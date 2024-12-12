<script lang="ts" setup>
interface Props {
  title: string;
  href: string;
  items: any[] | null;
}

const props = defineProps<Props>()
</script>

<template>
  <div class="recent-grid-container">
    <div class="recent-grid-header">
      <h3>Recentes - {{ title }}</h3>
      <NuxtLink :to="href" class="recent-grid-header-more">
        Ver Mais
        <Icon name="mdi:arrow-right" />
      </NuxtLink>
    </div>
    <div class="recent-grid">
      <DataTable :value="items" stripedRows :rowHover=true class="recent-grid-rounded">
        <slot />
      </DataTable>
    </div>
  </div>
</template>

<style scoped>
.recent-grid-rounded {
  border-radius: var(--border-radius-md);
  overflow: hidden;
  border: 1px solid var(--p-datatable-header-cell-border-color);
}

.recent-grid {
  width: 100%;
}

.recent-grid-header {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
}

.recent-grid-header-more {
  display: flex;
  gap: 0.5rem;
  font-size: 0.9em;
  align-items: center;
}
</style>