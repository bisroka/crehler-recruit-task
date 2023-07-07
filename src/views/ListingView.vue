<template>
  <TheHeader :sortKey="sortKey" :options="options" @sortHandler="sortHandler" />
  <main class="wrapper">
    <TheSearch :search="search" @searchHandler="searchHandler($event)" />
    <div v-if="loading">Loading...</div>
    <div v-else-if="!products.length">No products found</div>

    <div v-else class="products">
      <ProductCard
        v-for="product in products"
        :key="product.name"
        :product="product"
      />
    </div>
  </main>
</template>

<script lang="ts" setup>
import TheHeader from "@/components/TheHeader.vue";
import TheSearch from "@/components/TheSearch.vue";
import ProductCard from "@/components/ProductCard.vue";

import { useStore } from "vuex";
import { computed, ref } from "vue";
import { useLoader } from "@/composables/useLoader";

const store = useStore();

const sortKey = ref("name-asc");
const search = ref("");
const options = ref([
  { value: "name-asc", text: "Name (A-Z)" },
  { value: "name-desc", text: "Name (Z-A)" },
  { value: "price-asc", text: "Price (Low to High)" },
  { value: "price-desc", text: "Price (High to Low)" },
]);
const products = computed(() => store.getters["products"]);

const { loading, startLoading, stopLoading } = useLoader();

const getSortedProducts = async () => {
  await store.dispatch("getProducts", {
    categoryId: "e435c9763b0d44fcab67ea1c0fdb3fa0",
    parameters: {
      order: sortKey.value,
    },
  });
};

const sortHandler = async (value: string) => {
  try {
    startLoading();
    sortKey.value = value;
    await getSortedProducts();
  } catch (error) {
    console.error(error);
  } finally {
    stopLoading();
  }
};

const searchHandler = async (value: string) => {
  try {
    startLoading();
    search.value = value;
    if (search.value === "") {
      getSortedProducts();
      return;
    }
    store.dispatch("getProductsBySearch", {
      search: search.value,
    });
  } catch (error) {
    console.error(error);
  } finally {
    stopLoading();
  }
};

(async function () {
  try {
    startLoading();
    await store.dispatch("getProducts", {
      categoryId: "e435c9763b0d44fcab67ea1c0fdb3fa0",
    });
  } catch (error) {
    console.error(error);
  } finally {
    stopLoading();
  }
})();
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
}
.products {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  width: 100%;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
