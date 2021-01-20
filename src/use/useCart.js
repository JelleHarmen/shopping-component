import { ref, computed } from "vue";

// create te cart
const cart_items = ref([]);

export default function() {
  // the amount of items in the cart
  const cart_amount = computed(() => {
    return cart_items.value.length;
  });

  // the total value of the items in the cart
  const cart_value = computed(() => {
    // loop trough the items and
    const total = cart_items.value.reduce((currentTotal, item) => {
      // get the current total and add price
      return currentTotal + item.price;

      // start at zero
    }, 0);

    // return the total
    // zero by default
    return total;
  });

  // add item to the cart
  const addToCart = (item) => {
    cart_items.value.push(item);
  };

  // remove item from the cart
  const removeFromCart = (index) => {
    cart_items.value.splice(index, 1);
  };

  // return all functions
  return {
    cart_items,
    cart_amount,
    cart_value,
    addToCart,
    removeFromCart,
  };
}
