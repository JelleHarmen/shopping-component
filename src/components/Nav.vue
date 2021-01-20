<template>
  <section>
    <div class="container border-b-2 py-8">
      <div class="grid grid-cols-2">
        <div>
          <router-link to="/">
            <h3
              class="text-black font-extrabold text-xl hover:text-primary inline"
            >
              Webshop
            </h3>
          </router-link>
        </div>

        <nav class="flex justify-end">
          <router-link :to="{ name: 'Home' }">Home</router-link>
          <router-link :to="{ name: 'ShoppingCart' }" class="ml-5">
            <div class="relative">
              <img
                src="@/assets/icons/shopping-cart.svg"
                alt="Winkelwagen"
                class="w-6"
              />

              <div
                v-if="cart_amount"
                class="absolute -top-5 lg:-top-4 -right-2 lg:-right-4 badge bg-red-500  text-white px-2 py-1 rounded-full text-xs inline"
              >
                {{ cart_amount }}
              </div>

              <div
                v-if="cart_value"
                class="absolute -bottom-7 -right-2 lg:-right-4 badge bg-green-500  text-white px-2 py-1 rounded-full text-xs whitespace-nowrap inline"
              >
                {{ cart_value.toLocaleString(locale, currency) }}
              </div>
            </div>
          </router-link>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
import useCart from "@/use/useCart.js";
// import state
import state from "@/use/state";

export default {
  name: "Nav",
  setup() {
    // get the functions needed
    const { cart_items, cart_amount, cart_value } = useCart();

    // get the functions needed
    const { locale, currency } = state();
    return {
      cart_items,
      cart_amount,
      cart_value,
      locale,
      currency,
    };
  },
};
</script>
