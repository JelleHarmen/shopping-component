<template>
  <section>
    <div class="container py-5">
      <div class="pb-5">
        <h1 class="title">Home</h1>
      </div>

      <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
        <div
          class="shop--item  bg-gray-100 rounded-lg p-5"
          :key="item.id"
          v-for="item in shop_items"
        >
          <h5 class="text-xl">
            {{ item.name }}
          </h5>
          <p class="mb-4">
            {{ item.price.toLocaleString(locale, currency) }}
          </p>

          <button @click="addToCart(item)" class="btn bg-primary">
            Toevoegen aan winkelwagen
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import shop_items
import shop_items from "@/config/shop_items";

// import cart functions
import useCart from "@/use/useCart";

// import state
import state from "@/use/state";

export default {
  name: "Home",
  data() {
    return {
      shop_items,
    };
  },
  setup() {
    // get the functions needed for this page
    const { cart_items, addToCart } = useCart();

    // get the functions needed
    const { locale, currency } = state();

    return {
      cart_items,
      addToCart,
      locale,
      currency,
    };
  },
};
</script>
