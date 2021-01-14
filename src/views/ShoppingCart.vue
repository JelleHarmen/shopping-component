<template>
  <section>
    <div class="container py-5">
      <div class="mb-5">
        <h1 class="title">
          winkelwagen <span v-if="cartItems">({{ cartItems }})</span>
        </h1>
      </div>

      <div
        class="grid md:grid-cols-1 gap-4 lg:gap-6"
        v-if="$store.state.cart != ''"
      >
        <div
          class="shop--item bg-gray-100 rounded-lg p-3"
          :key="item.id"
          v-for="(item, index) in $store.state.cart"
        >
          <div class="grid grid-cols-3">
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
                  {{
                    item.price.toLocaleString(
                      $store.state.locale,
                      $store.state.currency
                    )
                  }}
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
    </div>
  </section>
</template>

<script>
// import from cartMixin
import { cartItems, cartPriceTotal, removeFromCart } from "../mixins/cartMixin";

export default {
  name: "ShoppingCart",
  mixins: [cartItems, cartPriceTotal, removeFromCart],
};
</script>
