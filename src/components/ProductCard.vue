<template>
  <figure v-if="product.name" class="product-card">
    <h3 class="product-card__name">{{ product.name }}</h3>
    <p class="product-card__description">
      {{ product.description }}
    </p>
    <p class="product-card__price">
      <b>Cena:</b>
      {{ getPrice(product.calculatedPrice.totalPrice, countryCode) }}
    </p>
  </figure>
  <figure v-else class="product-card product-card--error">
    <h3 class="product-card__name">Problem with product</h3>
  </figure>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { getPrice } from "../utils/PriceUtils";
import { getCountryCode } from "../utils/LanguageUtils";
import { Product } from "@/types/Product";

defineProps({
  product: {
    type: Object as () => Product,
    required: true,
  },
});

const currency = navigator.language || "pl-PL";
const countryCode = getCountryCode(currency);
</script>

<style lang="scss" scoped>
.product-card {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 1rem;
  max-width: 650px;

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "name"
    "description"
    "price";

  &--error {
    color: #ccc;
    border: 1px solid #ccc;
    background-color: #fafafa;
  }
  &__name {
    grid-area: name;
    height: fit-content;
    width: 100%;
  }
  &__description {
    grid-area: description;
    height: fit-content;
    width: 100%;
  }
  &__price {
    grid-area: price;
    height: fit-content;
    align-self: self-end;
    width: 100%;
  }
}
</style>
