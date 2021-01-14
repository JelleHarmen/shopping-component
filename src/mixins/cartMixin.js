export const cartItems = {
  computed: {
    cartItems() {
      // create variable for better overview
      const items = this.$store.state.cart.length;
      // if items more than zero return true value of items in cart
      if (items > 99) {
        return "99+";
        // if items in cart are more than 99 return 99+
      } else if (items > 0) {
        return items;
      }
      // return false by default
      // no need to show a badge containing zero
      return false;
    },
  },
};

export const cartPriceTotal = {
  computed: {
    cartPriceTotal() {
      // create variable for better overview
      const items = this.$store.state.cart;

      // loop trough the items and
      const total = items.reduce((currentTotal, item) => {
        // get the current total and add price
        return currentTotal + item.price;

        // start at zero
      }, 0);

      // return the total
      // zero by default
      return total;
    },
  },
};

export const addToCart = {
  methods: {
    addToCart(item) {
      // add to cart function
      this.$store.state.cart.push(item);
    },
  },
};

export const removeFromCart = {
  methods: {
    removeFromCart(index) {
      this.$store.state.cart.splice(index, 1);
    },
  },
};
