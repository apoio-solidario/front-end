<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({ href: { type: String, required: true }, title: { type: String, required: false } })
</script>

<template>
  <a :href="href" :title="title" class="primary-button">
    <slot />
  </a>
</template>

<style>
.primary-button {
  background-color: var(--color-primary);
  color: var(--color-text-accent);
  padding: var(--spacing-sm-2) var(--spacing-xl);
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-small);
  transition: background-color var(--transition-normal);
}

.primary-button:hover {
  color: var(--color-text-accent);
  background-color: var(--color-secondary);
}
</style>