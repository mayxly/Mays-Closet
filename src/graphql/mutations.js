/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processOrder = /* GraphQL */ `
  mutation ProcessOrder($input: ProcessOrderInput!) {
    processOrder(input: $input)
  }
`;
export const createClothingItem = /* GraphQL */ `
  mutation CreateClothingItem(
    $input: CreateClothingItemInput!
    $condition: ModelClothingItemConditionInput
  ) {
    createClothingItem(input: $input, condition: $condition) {
      id
      title
      description
      image
      type
      condition
      featured
      price
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateClothingItem = /* GraphQL */ `
  mutation UpdateClothingItem(
    $input: UpdateClothingItemInput!
    $condition: ModelClothingItemConditionInput
  ) {
    updateClothingItem(input: $input, condition: $condition) {
      id
      title
      description
      image
      type
      condition
      featured
      price
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteClothingItem = /* GraphQL */ `
  mutation DeleteClothingItem(
    $input: DeleteClothingItemInput!
    $condition: ModelClothingItemConditionInput
  ) {
    deleteClothingItem(input: $input, condition: $condition) {
      id
      title
      description
      image
      type
      condition
      featured
      price
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createClothingOrder = /* GraphQL */ `
  mutation CreateClothingOrder(
    $input: CreateClothingOrderInput!
    $condition: ModelClothingOrderConditionInput
  ) {
    createClothingOrder(input: $input, condition: $condition) {
      id
      clothing_id
      order_id
      order {
        id
        user
        date
        total
        clothin_items {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      clothin_item {
        id
        title
        description
        image
        type
        condition
        featured
        price
        orders {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      __typename
    }
  }
`;
export const updateClothingOrder = /* GraphQL */ `
  mutation UpdateClothingOrder(
    $input: UpdateClothingOrderInput!
    $condition: ModelClothingOrderConditionInput
  ) {
    updateClothingOrder(input: $input, condition: $condition) {
      id
      clothing_id
      order_id
      order {
        id
        user
        date
        total
        clothin_items {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      clothin_item {
        id
        title
        description
        image
        type
        condition
        featured
        price
        orders {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      __typename
    }
  }
`;
export const deleteClothingOrder = /* GraphQL */ `
  mutation DeleteClothingOrder(
    $input: DeleteClothingOrderInput!
    $condition: ModelClothingOrderConditionInput
  ) {
    deleteClothingOrder(input: $input, condition: $condition) {
      id
      clothing_id
      order_id
      order {
        id
        user
        date
        total
        clothin_items {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      clothin_item {
        id
        title
        description
        image
        type
        condition
        featured
        price
        orders {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      __typename
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
