<script lang="ts" setup></script>

<template>
  <footer>
    <div class="footer-container">
      <Logo />
    </div>
  </footer>
</template>

<style>
footer {
  height: 10rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-surface);
}

.footer-container {
  max-width: var(--max-width);
}
</style>