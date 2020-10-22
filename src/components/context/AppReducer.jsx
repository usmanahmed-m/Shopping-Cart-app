export default (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [
          ...state.cart,
          state.products.filter((product) => product._id === action.payload),
        ],
      };
    default:
      return state;
  }
};
