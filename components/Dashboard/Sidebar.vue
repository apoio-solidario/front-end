<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import type { UserRole } from '~/shared/types/auth/user';

const { state, logout } = useAuth();

const isOpen = ref(false);
const isDesktop = ref(false);

interface MenuItem {
  name: string;
  link: string;
  icon: string;
  roles: UserRole[];
}

const menuItems = (): MenuItem[] => {
  const menuItems: MenuItem[] = [
    { name: 'Campanhas', link: '/app/campanhas/', icon: 'mdi:loudspeaker-outline', roles: ['ADMIN', 'ONG'] },
    { name: 'Eventos', link: '/app/eventos/', icon: 'mdi:calendar', roles: ['ADMIN', 'ONG'] },
    { name: 'ONGs', link: '/app/ongs/', icon: 'mdi:hand-heart', roles: ['ADMIN'] },
    // { name: 'Opiniões', link: '/app/opinioes/', icon: 'mdi:chat', roles: ['ADMIN', 'ONG'] },
    // { name: 'Contatos', link: '/app/contatos/', icon: 'mdi:contact', roles: ['ADMIN'] },
    // { name: 'Imagens', link: '/app/imagens/', icon: 'mdi:images-outline', roles: ['ADMIN', 'ONG'] },
    { name: 'Usuários', link: '/app/usuarios/', icon: 'mdi:user-group', roles: ['ADMIN'] },
  ];

  return menuItems.filter(item => item.roles.includes(state.value.user!.role));
}

async function logoutAction() {
  logout().then(() => {
    navigateTo("/app/login/")
  });
}

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
      <NuxtLink to="/">
        <Logo />
      </NuxtLink>
      <nav>
        <ul class="sidebar-section">
          <h4 class="sidebar-section-title">Visão Geral</h4>
          <li>
            <NuxtLink to="/app/" class="sidebar-nav-link" exact-active-class="sidebar-nav-active-link">
              <Icon name="mdi:home" style="color: black" size="1.2em" />
              Início
            </NuxtLink>
          </li>
        </ul>
        <ul class="sidebar-section">
          <h4 class="sidebar-section-title">Ferramentas de Gestão</h4>
          <li v-for="item in menuItems()" :key="item.name">
            <NuxtLink :to="item.link" class="sidebar-nav-link" exact-active-class="sidebar-nav-active-link">
              <Icon :name="item.icon" style="color: black" size="1.2em" />
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
        <ul class="sidebar-section">
          <h4 class="sidebar-section-title">Configurações do Usuário</h4>
          <li>
            <button @click="logoutAction" class="sidebar-nav-link sidebar-nav-logout"
              exact-active-class="sidebar-nav-active-link">
              <Icon name="mdi:logout" style="color: black" size="1.2em" />
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<style scoped>
.sidebar-container {
  position: initial;
}

.sidebar {
  height: 100%;
  min-height: 100vh;
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

.sidebar nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.sidebar-section {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sidebar-section-title {
  margin: 0;
  padding: var(--spacing-sm-2);
  font-size: var(--font-size-small);
}

.sidebar-nav-logout {
  width: 100%;
  background-color: var(--color-background);
  box-shadow: none;
}

.sidebar-nav-link {
  padding: var(--spacing-sm-2) var(--spacing-sm-2);
  border-radius: var(--border-radius-md);
  display: flex;
  color: var(--color-text-primary);
  gap: 1rem;
  transition: background-color var(--transition-normal);
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
  .sidebar-container {
    position: fixed;
  }

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
