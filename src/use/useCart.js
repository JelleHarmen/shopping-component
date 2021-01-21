import { ref, computed } from "vue";

// create te cart
const cart_items = ref([]);

export default function() {
  // the total value of the items in the cart
  const cart_quantity = computed(() => {
    // loop trough the items and
    const total = cart_items.value.reduce((currentTotal, item) => {
      // get the current total and add price
      return currentTotal + item.quantity;

      // start at zero
    }, 0);

    // return the total
    // zero by default
    if (total >= 99) {
      return "99+";
    }
    return total;
  });

  // the total value of the items in the cart
  const cart_value = computed(() => {
    // loop trough the items and
    const total = cart_items.value.reduce((currentTotal, item) => {
      const { price, quantity } = item;
      const total_price = price * quantity;
      // get the current total and add price
      return currentTotal + total_price;

      // start at zero
    }, 0);

    // return the total
    // zero by default
    return total;
  });

  // add item to the cart
  const addToCart = (item) => {
    if (!item.quantity) {
      item.quantity = 1;
      cart_items.value.push(item);
    } else {
      item.quantity += 1;
    }
  };

  // remove item from the cart
  const removeFromCart = (index) => {
    cart_items.value.splice(index, 1);
  };

  // return all functions
  return {
    cart_items,
    cart_quantity,
    cart_value,
    addToCart,
    removeFromCart,
  };
}
