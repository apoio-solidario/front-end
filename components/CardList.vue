<script lang="ts" setup></script>

<template>
  <div class="card-list">
    <slot />
  </div>
</template>

<style>
.card-list {
  width: 100%;
  max-width: var(--max-width);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  justify-items: center;
  align-items: center;
}
</style>