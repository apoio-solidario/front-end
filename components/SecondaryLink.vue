<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({ href: { type: String, required: true }, title: { type: String, required: false } })
</script>

<template>
  <a :href="href" :title="title" class="secondary-button">
    <slot />
  </a>
</template>

<style>
.secondary-button {
  position: relative;
  color: var(--color-primary);
  background-color: transparent;
  border-radius: var(--border-radius-sm);
  padding: var(--spacing-sm-2) var(--spacing-xl);
  box-shadow: var(--shadow-small);
  transition: color var(--transition-normal), background-color var(--transition-normal);
}

.secondary-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
  border-radius: inherit;
  padding: 2px;
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  /* Subtract the inner area */
  -webkit-mask-composite: xor;
  /* Subtract the inner area */
  mask-composite: exclude;
}

.secondary-button:hover {
  color: #fff;
  background-color: var(--color-secondary);
}
</style>