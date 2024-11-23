<script lang="ts" setup></script>

<template>
  <p>
    <slot />
  </p>
</template>

<style scoped>
p {
  color: var(--color-text-secondary);
  margin: 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  -webkit-line-clamp: 2;
}
</style>