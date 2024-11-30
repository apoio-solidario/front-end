<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const isOpen = ref(false);
const isDesktop = ref(false);

interface MenuItem {
  name: string;
  link: string;
  icon: string;
}
const menuItems: MenuItem[] = [
  { name: 'Início', link: '/app/admin/', icon: 'mdi:home' },
  { name: 'Campanhas', link: '/app/admin/campanhas/', icon: 'mdi:loudspeaker-outline' },
  { name: 'Eventos', link: '/app/admin/eventos/', icon: 'mdi:calendar' },
  { name: 'ONGs', link: '/app/admin/ongs/', icon: 'mdi:hand-heart' },
  { name: 'Opiniões', link: '/app/admin/opinioes/', icon: 'mdi:chat' },
  { name: 'Contatos', link: '/app/admin/contatos/', icon: 'mdi:contact' },
  { name: 'Imagens', link: '/app/admin/imagens/', icon: 'mdi:images-outline' },
];

const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};

const checkScreenSize = () => {
  isDesktop.value = window.innerWidth >= 1024; // Adjust breakpoint as needed
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize);
});
</script>

<template>
  <aside class="sidebar-container">
    <button class="sidebar-button" @click="toggleSidebar">
      <Icon name="mdi:dock-left" style="color: white" />
    </button>

    <div :class="['sidebar', { 'is-open': isOpen || isDesktop }]">
      <nav>
        <Logo v-if="!isDesktop" />
        <ul>
          <li v-for="item in menuItems" :key="item.name">
            <NuxtLink :to="item.link" class="sidebar-nav-link" exact-active-class="sidebar-nav-active-link">
              <Icon :name="item.icon" style="color: black" size="1.2em" />
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  height: 100%;
  position: fixed;
  top: 4rem;
  left: -250px;
  width: 16rem;
  background-color: var(--color-background);
  padding: 1rem;
  transition: left 0.3s ease;
  z-index: 99;
  border-right: 1px solid var(--color-surface);
}

.sidebar.is-open {
  left: 0;
}

.sidebar-logo {
  width: 100%;
  margin-bottom: 1rem;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sidebar-nav-link {
  padding: var(--spacing-sm-2) var(--spacing-xl);
  border-radius: var(--border-radius-md);
  display: flex;
  color: var(--color-text-primary);
  display: flex;
  gap: 1rem
}

.sidebar-nav-link:hover {
  background-color: var(--color-surface);
}

.sidebar-nav-active-link {
  background-color: var(--color-surface);
}

.sidebar-button {
  position: fixed;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 100;
  left: 1rem;
  top: 0.5rem;
  display: flex;
  align-items: center;
  border: 1px solid var(--color-surface);
}

@media (min-width: 1024px) {
  .sidebar {
    left: 0;
    position: relative;
  }

  .sidebar-button {
    display: none;
  }

  .overlay {
    display: none;
  }
}
</style>
