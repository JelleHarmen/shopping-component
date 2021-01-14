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
                v-if="cartItems"
                class="absolute -top-5 lg:-top-4 -right-2 lg:-right-4 badge bg-red-500  text-white px-2 py-1 rounded-full text-xs inline"
              >
                {{ cartItems }}
              </div>

              <div
                v-if="cartPriceTotal"
                class="absolute -bottom-7 -right-2 lg:-right-4 badge bg-green-500  text-white px-2 py-1 rounded-full text-xs whitespace-nowrap inline"
              >
                {{
                  cartPriceTotal.toLocaleString(
                    $store.state.locale,
                    $store.state.currency
                  )
                }}
              </div>
            </div>
          </router-link>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
import { cartItems, cartPriceTotal } from "../mixins/cartMixin";

export default {
  name: "Nav",
  mixins: [cartItems, cartPriceTotal],
};
</script>
