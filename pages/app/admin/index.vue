<script lang="ts" setup>
definePageMeta({
  layout: 'dashboard',
});
</script>

<template>
  <div class="dashboard-home">
    Hello World
  </div>
</template>


<style>
.dashboard-home {
  height: 100%;
  width: 100%;
  padding: var(--spacing-md);
}

.rounded-table {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--p-datatable-header-cell-border-color);
}
</style>