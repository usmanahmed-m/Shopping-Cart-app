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
    case "REMOVE_FROM_CART":
      if (window.confirm("Do you want to remove this product from cart")) {
        return {
          ...state,
          cart: [
            ...state.cart.filter((product) => product._id !== action.payload),
          ],
        };
      }
      break;
    case "INCREMENT_ITEM": {
      const { cart } = state;

      cart.forEach((item) => {
        if (item._id === action.payload) {
          item.count += 1;
        }
      });
      return { ...state, cart };
    }

    case "DECREMENT_ITEM": {
      const { cart } = state;

      cart.forEach((item) => {
        if (item._id === action.payload) {
          item.count === 1 ? (item.count = 1) : (item.count -= 1);
        }
      });
      return { ...state, cart };
    }
    case "GET_TOTAL": {
      const { cart } = state;
      const total = cart.reduce((acc, item) => {
        return acc + item.price * item.count;
      }, 0);
      return {
        ...state,
        total,
      };
    }
    default:
      return state;
  }
};
