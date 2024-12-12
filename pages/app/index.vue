<script lang="ts" setup>
import type { UserRole } from '~/shared/types/auth/user';
import type { Campaign } from '~/shared/types/campaign';

definePageMeta({
  middleware: 'authenticated',
  layout: 'dashboard',
});

const { state } = useAuth();

interface OverviewItem {
  name: string;
  icon: string;
  size?: number;
  roles: UserRole[];
}

const { data: users } = await useLazyFetch<ONG[]>('/api/users');
const { data: ongs } = await useLazyFetch<ONG[]>('/api/ongs');
const { data: campaigns } = await useLazyFetch<Campaign[]>('/api/campaigns');

const overviewItems = (): OverviewItem[] => {
  const menuItems: OverviewItem[] = [
    { name: 'Campanhas', icon: 'mdi:loudspeaker-outline', roles: ['ADMIN', 'ONG'], size: campaigns.value?.length },
    { name: 'Eventos', icon: 'mdi:calendar', roles: ['ADMIN', 'ONG'] },
    { name: 'Opiniões', icon: 'mdi:chat', roles: ['ADMIN', "ONG"] },
    { name: 'Imagens', icon: 'mdi:images-outline', roles: ['ADMIN', 'ONG'] },
    { name: 'Contatos', icon: 'mdi:contact', roles: ['ADMIN'] },
    { name: 'ONGs', icon: 'mdi:hand-heart', roles: ['ADMIN'], size: ongs.value?.length },
  ];

  console.log(state.value.user?.role)

  return menuItems.filter(item => item.roles.includes(state.value.user!.role));
}

export interface ONG {
  name: string
  description: string
  content: string
  email: string
  phone: string
  status: string
  category: string
  handler: string
  ong_id: string
  website_url: string
  image_profile: string
  image_banner: string
  user_id: string
  created_at: string
  updated_at: string
}
</script>

<template>
  <div class="dashboard-home">
    <div class="overview">
      <h3>Overview</h3>
      <div class="overview-list">
        <div v-for="(item, index) in overviewItems()" :key="index" class="overview-item">
          <div class="overview-item-header">
            <h4>{{ item.name }}</h4>
            <span>
              <Icon :name="item.icon" />
            </span>
          </div>
          <div class="overview-item-content">
            <span v-if="item.size">{{ item.size }}</span>
          </div>
        </div>
      </div>
    </div>

    <DashboardRecentGrid title="ONGs" :items="ongs" href="/app/ongs/" v-if="state.user!.role === 'ADMIN'">
      <Column field="name" header="Nome"></Column>
      <Column field="description" header="Descrição"></Column>
      <Column field="email" header="Email"></Column>
      <Column field="category" header="Categoria"></Column>
      <Column field="phone" header="Telefone"></Column>
      <Column header="Status" field="status" :filterMenuStyle="{ width: '14rem' }">
        <template #body="{ data }">
          <Tag :value="data.status" severity="info" />
        </template>
      </Column>
    </DashboardRecentGrid>

    <DashboardRecentGrid title="Usuários" :items="users" href="/app/usuarios/" v-if="state.user!.role === 'ADMIN'">
      <Column selectionMode="multiple" style="width: 3rem"></Column>
      <Column field="user_id" header="ID"></Column>
      <Column field="username" header="Usuário"></Column>
      <Column field="first_name" header="Primeiro Nome"></Column>
      <Column field="last_name" header="Segundo Nome"></Column>
      <Column field="email" header="Email"></Column>
      <Column field="role" header="Role"></Column>
    </DashboardRecentGrid>

    <DashboardRecentGrid title="Campanhas" :items="campaigns" href="/app/campanhas/">
      <Column field="title" header="Nome"></Column>
      <Column field="description" header="Descrição"></Column>
      <Column field="start_data" header="Data de Início"></Column>
      <Column field="end_data" header="Data Final"></Column>
      <Column header="Status" field="status" :filterMenuStyle="{ width: '14rem' }">
        <template #body="{ data }">
          <Tag :value="data.status" severity="info" />
        </template>
      </Column>
    </DashboardRecentGrid>
  </div>
</template>

<style scoped>
.dashboard-home {
  height: 100%;
  width: 100%;
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.rounded-table {
  border-radius: var(--border-radius-md);
  overflow: hidden;
  border: 1px solid var(--p-datatable-header-cell-border-color);
}

.overview {
  width: 100%;
}

.overview-list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.overview-item {
  width: 100%;
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-border);
  padding: var(--spacing-lg);
}

.overview-item-header {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
}
</style>