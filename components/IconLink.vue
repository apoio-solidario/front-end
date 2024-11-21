<script lang="ts" setup>
const props = defineProps({ icon: { type: String, required: true }, href: { type: String, required: true }, title: { type: String, required: false } })
</script>

<template>
  <NuxtLink :href="href" :title="title" class="icon-link">
    <Icon :name="icon" class="icon-link-icon" />
  </NuxtLink>
</template>

<style>
.icon-link {
  width: 100%;
  background-color: transparent;
  color: var(--color-text-accent);
  padding: var(--spacing-xs);
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-small);
  transition: background-color var(--transition-normal);
  align-content: center;
  border: 1px solid var(--color-primary);
}

.icon-link-icon {
  color: var(--color-primary);
  transition: color var(--transition-normal);
}

.icon-link:hover {
  background-color: var(--color-primary);
}

.icon-link:hover>.icon-link-icon {
  color: white;
}
</style>