<script lang="ts" setup></script>

<template>
  <header>
    <div class="container">
      <Logo class="header-logo" />
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
  z-index: 99;
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

@media (max-width: 1024px) {
  .header-logo {
    display: none;
  }
}
</style>
