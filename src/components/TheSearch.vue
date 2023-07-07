<template>
  <div class="the-search__container">
    <input
      :value="search"
      type="text"
      placeholder="Search..."
      @input="$emit('searchHandler', $event.target.value)"
      class="the-search__input"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

defineProps({
  search: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.the-search {
  &__container {
    margin: 64px 0;
    width: 100%;
    text-align: center;
  }
  &__input {
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 100%;
    max-width: 600px;
  }
}
</style>
