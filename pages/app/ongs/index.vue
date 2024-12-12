<script lang="ts" setup>
import { useToast } from 'primevue/usetoast';
import type { User } from '~/shared/types/auth/user';
import type { Campaign } from '~/shared/types/campaign';
import type { ONG } from '~/shared/types/ong';

definePageMeta({
  middleware: ['authenticated', 'admin-only'],
  layout: 'dashboard',
});

const { state } = useAuth()

const toast = useToast();

const campaign = ref<ONG | undefined>();
const selected = ref();
const openEditDialog = ref(false);
const openDeleteDialog = ref(false);
const openNewDialog = ref(false);
const startDate = ref()
const endDate = ref()

const { data: ongs } = await useLazyFetch<ONG[]>('/api/ongs');
const { data: users } = await useLazyFetch<User[]>('/api/users');

function deleteCampaign(item: Campaign) {
  //   campaign.value = item;
  //   openDeleteDialog.value = true;
}

async function deleteCampaignConfirm() {
  //   try {
  //     const headers = useRequestHeaders(['cookie']);
  //     await $fetch(`/api/campaigns/${campaign.value?.campaign_id}`, { method: 'DELETE', headers });
  //     campaigns.value = campaigns.value!.filter((val) => val.campaign_id !== campaign.value!.campaign_id);
  //     toast.add({ severity: 'success', summary: 'Deletado com sucesso', detail: campaign.value?.title, life: 3000 });
  //   } catch (e: any) {
  //     toast.add({ severity: 'error', summary: 'Erro ao deletar', detail: e.message, life: 3000 });
  //   }
  //   openDeleteDialog.value = false;
}

async function openNew() {
  campaign.value = {
    name: '',
    description: '',
    content: '',
    email: '',
    phone: '',
    status: 'Active',
    category: '',
    handler: '',
    ong_id: '',
    website_url: '',
    image_profile: '',
    image_banner: '',
    user_id: '',
    created_at: '',
    updated_at: '',
  }

  openNewDialog.value = true;
}

async function saveCampaign() {
  try {
    const headers = useRequestHeaders(['cookie']);
    await $fetch(`/api/ongs`, { method: 'POST', headers, body: JSON.stringify(campaign.value) });
    ongs.value?.push(campaign.value!);
    toast.add({ severity: 'success', summary: 'Salvo com sucesso', life: 3000 });
  } catch (e: any) {
    toast.add({ severity: 'error', summary: 'Erro ao deletar', detail: e.message, life: 3000 });
  }

  openNewDialog.value = false;
}
</script>

<template>
  <div class="dashboard-campaigns">
    <Toast />

    <Toolbar class="dashboard-campaigns-header">
      <template #start>
        <h3 class="dashboard-campaigns-header-title">ONGs</h3>
      </template>

      <template #end>
        <div class="dashboard-campaigns-header-actions">
          <button class="dashboard-campaigns-header-action" @click="openNew">
            <Icon name="mdi:plus" />
            Adicionar
          </button>
          <button class="dashboard-campaigns-header-action" :disabled="!selected || !selected.length">
            <Icon name="mdi:delete-outline" />
            Deletar
          </button>
        </div>
      </template>
    </Toolbar>

    <div class="dashboard-campaigns-grid">
      <DataTable v-model:selection="selected" :value="ongs" stripedRows :rowHover=true class="recent-grid-rounded">
        <Column selectionMode="multiple" style="width: 3rem"></Column>
        <Column field="ong_id" header="ID"></Column>
        <Column field="name" header="Nome"></Column>
        <Column field="description" header="Descrição"></Column>
        <Column field="email" header="Email"></Column>
        <Column field="phone" header="Telefone"></Column>
        <Column field="email" header="Email"></Column>
        <Column field="category" header="Categoria"></Column>
        <Column field="website_url" header="Website"></Column>
        <Column header="Status" field="status" :filterMenuStyle="{ width: '14rem' }">
          <template #body="{ data }">
            <Tag :value="data.status" severity="info" />
          </template>
        </Column>
      </DataTable>
    </div>

    <ConfirmDialog></ConfirmDialog>

    <Dialog v-model:visible="openEditDialog" :style="{ minWidth: '550px' }" header="Editar Campanha" :modal="true">
      <div>
        Hello World
      </div>
      <template #footer>
        <button @click="openEditDialog = false">
          Cancelar
        </button>
        <button>
          Salvar
        </button>
      </template>
    </Dialog>

    <Dialog v-model:visible="openDeleteDialog" :style="{ width: '450px' }" header="Confirmação" :modal="true">
      <div class="flex items-center gap-4">
        <i class="pi pi-exclamation-triangle !text-3xl" />
        <span v-if="campaign">Tem certeza que quer deletar a campanha: <b>{{ campaign.name }}</b>?</span>
      </div>
      <template #footer>
        <Button label="No" icon="pi pi-times" text @click="openDeleteDialog = false" />
        <Button label="Yes" icon="pi pi-check" @click="deleteCampaignConfirm" />
      </template>
    </Dialog>

    <Dialog v-model:visible="openNewDialog" :style="{ width: '450px' }" header="Nova Campanha" :modal="true">
      <div class="new-dialog">
        <div class="new-dialog-field">
          <label for="name">Nome</label>
          <InputText id="name" v-model="campaign!.name" required="true" autofocus />
          <small v-if="!campaign?.name" class="text-red-500">Nome é obrigatório</small>
        </div>
        <div class="new-dialog-field">
          <label for="description">Description</label>
          <Textarea id="description" v-model="campaign!.description" required="true" rows="2" cols="20" fluid />
          <small v-if="!campaign?.description" class="text-red-500">Descrição é obrigatória</small>
        </div>
        <div class="new-dialog-field">
          <label for="content">Conteúdo</label>
          <Textarea id="content" v-model="campaign!.content" required="true" rows="8" cols="20" fluid />
          <small v-if="!campaign?.content" class="text-red-500">Conteúdo é obrigatório</small>
        </div>
        <div class="new-dialog-field">
          <label for="email">Email</label>
          <InputText id="email" v-model="campaign!.email" required="true" autofocus />
          <small v-if="!campaign?.email" class="text-red-500">Email é obrigatório</small>
        </div>
        <div class="new-dialog-field">
          <label for="category">Categoria</label>
          <InputText id="category" v-model="campaign!.category" required="true" autofocus />
          <small v-if="!campaign?.category" class="text-red-500">Categoria é obrigatória</small>
        </div>
        <div class="new-dialog-field">
          <label for="ong_id">Usuário</label>
          <Select v-model="campaign!.user_id" :options="users!" optionLabel="username" option-value="user_id"
            placeholder="Selecione uma ONG" checkmark :highlightOnSelect="false" class="w-full md:w-56" />
          <small v-if="!campaign?.user_id" class="text-red-500">Usuário é obrigatório</small>
        </div>
      </div>
      <template #footer>
        <Button label="Cancelar" icon="pi pi-times" text @click="openNewDialog = false" />
        <Button label="Salvar" icon="pi pi-check" @click="saveCampaign" />
      </template>
    </Dialog>
  </div>
</template>

<style scoped>
.new-dialog {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.new-dialog-field {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.dashboard-campaigns {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.dashboard-campaigns-header {
  border-radius: var(--border-radius-md) !important;
  border: 1px solid var(--p-datatable-header-cell-border-color) !important;
}

.dashboard-campaigns-header-title {
  margin: 0;
}

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

.recent-grid-actions {
  display: flex;
  gap: 0.5rem;
}

.recent-grid-actions-button,
.dashboard-campaigns-header-action {
  border-radius: var(--border-radius-sm);
  padding: var(--spacing-sm) var(--spacing-sm);
  background-color: transparent;
  border: 1px solid var(--color-border);
  box-shadow: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.9em;
}

.dashboard-campaigns-header-actions {
  display: flex;
  gap: 1rem;
}

.dashboard-campaigns-header-action {
  display: flex;
  flex-direction: row;
  color: var(--color-primary-text);
  gap: 0.5rem;
  padding: var(--spacing-sm-2) var(--spacing-sm-2);
}

.dashboard-campaigns {
  height: 100%;
  width: 100%;
  padding: var(--spacing-md);
}
</style>