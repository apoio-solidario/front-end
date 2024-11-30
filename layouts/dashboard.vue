<template>
  <div class="dashboard">
    <DashboardHeader />
    <DashboardSidebar />
    <main>
      <div class="dashboard-container">
        <slot />
      </div>
    </main>
  </div>
</template>

<style scoped>
main {
  height: 100%;
  width: 100%;
  background-color: var(--color-surface);
  margin: 0;
}

.dashboard {
  display: flex;
}

.dashboard-container {
  height: inherit;
  width: inherit;
  margin-top: calc(var(--header-height) + 2rem);
  background-color: white;
  border-radius: var(--border-radius-md);
}
</style>