/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getClothingItem = /* GraphQL */ `
  query GetClothingItem($id: ID!) {
    getClothingItem(id: $id) {
      id
      title
      description
      image
      type
      condition
      featured
      price
      createdAt
      updatedAt
      orders {
        items {
          id
          clothing_id
          order_id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const listClothingItems = /* GraphQL */ `
  query ListClothingItems(
    $filter: ModelClothingItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClothingItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        image
        type
        condition
        featured
        price
        createdAt
        updatedAt
        orders {
          nextToken
          __typename
        }
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      user
      date
      total
      createdAt
      updatedAt
      clothin_items {
        items {
          id
          clothing_id
          order_id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user
        date
        total
        createdAt
        updatedAt
        clothin_items {
          nextToken
          __typename
        }
        __typename
      }
      nextToken
      __typename
    }
  }
`;
