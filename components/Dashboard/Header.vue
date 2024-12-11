<script lang="ts" setup></script>

<template>
  <header>
    <div class="container">
      <h3>Painel</h3>
    </div>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  background-color: var(--color-background);
  border: 1px solid var(--color-surface);
}

.container {
  width: 100%;
  height: 100%;
  display: inherit;
  align-items: inherit;
  justify-content: space-between;
  padding: 0 var(--screen-min-width-padding);
  position: relative;
}

.container h3 {
  height: 100%;
  width: 100%;
  align-content: center;
  margin: 0;
}

@media (max-width: 1024px) {
  header {
    margin-left: 0;
  }

  .container h3 {
    text-align: center;
  }

  .header-logo {
    display: none;
  }
}
</style>
