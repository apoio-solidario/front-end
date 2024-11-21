<script lang="ts" setup>
const props = defineProps({ src: { type: String, required: true }, alt: { type: String, required: true } })
</script>

<template>
  <div class="illustration-container">
    <NuxtImg :src="src" :alt="alt" class="illustration" />
  </div>
</template>

<style>
.illustration-container {
  height: 100%;
  width: 100%;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.illustration {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
</style>