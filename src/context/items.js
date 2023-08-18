import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { listClothingItems } from "../api/queries";
import { processOrder } from "../api/mutations";

const ItemContext = React.createContext();

const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  const checkout = async (orderDetails) => {
    const payload = {
      id: uuidv4(),
      ...orderDetails
    };
    try {
      await API.graphql(graphqlOperation(processOrder, { input: payload }));
      console.log("Order is successful");
    } catch (err) {
      console.log(err);
    }
  };

  const fetchItems = async () => {
    try {
      setLoading(true);
      // Switch authMode to API_KEY for public access
      const { data } = await API.graphql({
        query: listClothingItems,
        authMode: "API_KEY"
      });
      const items = data.listClothingItems.items;
      const featured = items.filter((item) => {
        return !!item.featured;
      });
      setItems(items);
      setFeatured(featured);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ItemContext.Provider value={{ items, featured, loading, checkout }}>
      {children}
    </ItemContext.Provider>
  );
};

export { ItemContext, ItemProvider };
