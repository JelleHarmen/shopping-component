// global state no need for VUEX

export default function() {
  const locale = "NL-nl";

  const currency = {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  };

  return {
    locale,
    currency,
  };
}
