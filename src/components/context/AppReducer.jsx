export default (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const check = state.cart.every((item) => item._id !== action.payload);
      if (check) {
        return {
          ...state,
          cart: [
            ...state.cart,
            ...state.products.filter(
              (product) => product._id === action.payload
            ),
          ],
        };
      } else {
        alert(`Product has been added to Cart`);
        return state;
      }
    case "INCREMENT_ITEM":
      console.log("increment clicked ", state.cart);
      const { cart } = state;

      cart.forEach((item) => {
        if (item._id === action.payload) {
          item.count += 1;
        }
      });
      return { ...state, cart };

    case "DECREMENT_ITEM":
      console.log("decrement clicked", cart);
      // const { cart } = state;

      cart.forEach((item) => {
        if (item._id === action.payload) {
          item.count === 1 ? (item.count = 1) : (item.count -= 1);
        }
      });
      return { ...state, cart };

    default:
      return state;
  }
};
