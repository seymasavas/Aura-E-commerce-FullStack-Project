const initialState = {
  cart: [],
  payment: {},
  address: {},
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.cart.find(
        (item) => String(item.product.id) === String(action.payload.id),
      );

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            String(item.product.id) === String(action.payload.id)
              ? { ...item, count: item.count + 1 }
              : item,
          ),
        };
      } else {
        return {
          ...state,
          cart: [
            ...state.cart,
            { count: 1, checked: true, product: action.payload },
          ],
        };
      }

    case "SET_CART":
      return {
        ...state,
        cart: action.payload,
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(
          (item) => String(item.product.id) !== String(action.payload),
        ),
      };

    case "UPDATE_ITEM_COUNT":
      return {
        ...state,
        cart: state.cart.map((item) =>
          String(item.product.id) === String(action.payload.productId)
            ? { ...item, count: action.payload.count }
            : item,
        ),
      };

    case "TOGGLE_ITEM_CHECK":
      return {
        ...state,
        cart: state.cart.map((item) =>
          String(item.product.id) === String(action.payload)
            ? { ...item, checked: !item.checked }
            : item,
        ),
      };

    case "SET_PAYMENT":
      return { ...state, payment: action.payload };

    case "SET_ADDRESS":
      return { ...state, address: action.payload };

    default:
      return state;
  }
};

export default shoppingCartReducer;
