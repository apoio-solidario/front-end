<template>
  <div class="dashboard">
    <DashboardSidebar />
    <main>
      <div class="dashboard-container">
        <DashboardHeader />
        <div class="dashboard-content">
          <slot />
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
main {
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background-color: var(--color-surface);
  margin: 0;
  padding: 0;
}

.dashboard {
  display: flex;
}

.dashboard-container {
  width: 100%;
  margin: calc(var(--header-height) + 2rem) 0 2rem 0;
}

.dashboard-content {
  background-color: white;
  border-radius: var(--border-radius-md);
  margin: 0 var(--screen-min-width-padding);
  margin-left: 18rem;
}

@media (max-width: 1024px) {
  .dashboard-content {
    margin: 0 calc(var(--screen-min-width-padding) - 1rem);
  }
}
</style>