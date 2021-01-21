<template>
  <section>
    <div class="container py-5">
      <div class="mb-5">
        <h1 class="title">
          winkelwagen
          <span v-if="cart_quantity"
            >({{ cart_quantity
            }}<span v-show="cart_quantity >= 99">+</span>)</span
          >
        </h1>
      </div>

      <div class="grid md:grid-cols-1 gap-4 lg:gap-6" v-if="cart_quantity > 0">
        <div
          class="shop--item bg-gray-100 rounded-lg p-3"
          :key="item.id"
          v-for="(item, index) in cart_items"
        >
          <div class="grid grid-cols-4">
            <div class="flex">
              <div class="self-center">
                <h5 class="text-xl font-bold">
                  {{ item.name }}
                </h5>
              </div>
            </div>

            <div class="flex justify-center">
              <div class="self-center">
                <p>
                  {{ item.price.toLocaleString(locale, currency) }}
                </p>
              </div>
            </div>

            <div class="flex justify-center">
              <div class="self-center" v-if="item.quantity">
                <p>
                  {{ item.quantity }}
                </p>
              </div>
            </div>

            <div class="flex justify-end">
              <button class="btn bg-secondary" @click="removeFromCart(index)">
                Verwijderen
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Nog geen items in de winkelwagen</p>

        <div class="pt-2">
          <router-link to="/" class="btn bg-primary"
            >Naar de winkel pagina</router-link
          >
        </div>
      </div>
      <div class="text-center pt-3" v-if="cart_value > 0">
        <h3 class="text-3xl">
          {{ cart_value.toLocaleString(locale, currency) }}
        </h3>
      </div>
    </div>
  </section>
</template>

<script>
// import cart functions
import useCart from "@/use/useCart";

// import state
import state from "@/use/state";

export default {
  name: "ShoppingCart",
  setup() {
    // get the functions needed
    const { cart_items, cart_quantity, cart_value, removeFromCart } = useCart();

    // get the functions needed
    const { locale, currency } = state();

    return {
      cart_items,
      cart_quantity,
      cart_value,
      removeFromCart,
      locale,
      currency,
    };
  },
};
</script>
