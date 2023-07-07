<template>
  <header class="header">
    <div class="header-content">
      <h1>Shopware Listing</h1>
      <select
        :value="sortKey"
        @change="$emit('sortHandler', $event.target.value)"
      >
        <option
          v-for="option in options"
          :value="option.value"
          :key="option.value"
        >
          {{ option.text }}
        </option>
      </select>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { defineProps, onMounted } from "vue";

const props = defineProps<{
  sortKey: string;
  options: Array<{ value: string; text: string }>;
}>();
</script>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid #ccc;
  background-color: #000;
  &-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      color: #fff;
    }
    select {
      padding: 0.5rem;
      border-radius: 4px;
      border: 1px solid #ccc;
    }
  }
}
</style>
