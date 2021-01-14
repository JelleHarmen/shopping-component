import Vuex from "vuex";

export const store = new Vuex.Store({
  state: {
    cart: [],
    api_url: "http://localhost:3000",
    locale: "nl-NL",
    currency: {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
    },
  },
});
