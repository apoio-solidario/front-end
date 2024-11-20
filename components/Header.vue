<script lang="ts" setup>
import { ref, watch } from "vue";

// Reactive state for mobile menu
const isMobileMenuOpen = ref(false);

// Toggles the menu visibility
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Watch for menu state changes to toggle scrolling
watch(isMobileMenuOpen, (isOpen) => {
  const body = document.body;
  if (isOpen) {
    body.style.overflow = "hidden";
    body.style.width = "100%";
  } else {
    body.style.overflow = "";
    body.style.width = "";
  }
});
</script>

<template>
  <header>
    <div class="container">
      <a href="/">
        <Logo />
      </a>

      <!-- Hamburger button for mobile -->
      <button class="hamburger" @click="toggleMobileMenu" aria-label="Toggle navigation menu"
        :aria-expanded="isMobileMenuOpen">
        <Icon name="mdi-menu" class="menu-icon" style="color: black" size="1em" v-if="!isMobileMenuOpen" />
        <Icon name="mdi-close" class="close-icon" style="color: black" size="1em" v-else />
      </button>

      <!-- Navigation -->
      <nav :class="{ open: isMobileMenuOpen }">
        <ul>
          <li>
            <a href="/">Início</a>
          </li>
          <li>
            <a href="/campanhas/">Campanhas</a>
          </li>
          <li>
            <a href="/eventos/">Eventos</a>
          </li>
          <li>
            <a href="/ongs/">ONGs</a>
          </li>
          <li>
            <hr>
          </li>
          <li>
            <PrimaryLink href="/sou-uma-ong/">Sou uma ONG</PrimaryLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style>
header {
  width: 100%;
  height: 4rem;
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
  max-width: var(--max-width);
  height: 100%;
  display: inherit;
  align-items: inherit;
  justify-content: space-between;
  padding: 0 var(--screen-min-width-padding);
  position: relative;
}

nav ul {
  display: flex;
  gap: 1.5rem;
  padding: 0;
  list-style-type: none;
}

nav ul li hr {
  height: 100%;
  margin: 0;
  border: 1px solid var(--color-text-primary);
}

.hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 100;
  position: relative;
}

.menu-icon,
.close-icon {
  font-size: 2rem;
  color: var(--color-text);
}

@media (max-width: 768px) {
  nav {
    position: fixed;
    top: 0;
    right: 0;
    width: 60%;
    height: 100%;
    background-color: var(--color-background);
    transform: translateX(100%);
    opacity: 0;
    z-index: 90;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }

  nav.open {
    transform: translateX(0);
    opacity: 1;
  }

  nav ul {
    flex-direction: column;
    margin: 5rem 1rem 0;
  }

  nav ul li {
    width: 100%;
    text-align: center;
  }

  .hamburger {
    height: 2rem;
    width: 2rem;
    display: flex;
    align-items: center;
    border: 1px solid var(--color-surface);
  }

  nav ul {
    align-items: flex-start;
  }
}
</style>
