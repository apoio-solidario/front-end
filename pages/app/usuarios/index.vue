<script lang="ts" setup>
import { useToast } from 'primevue/usetoast';
import type { User } from '~/shared/types/auth/user';
import type { UserRegister } from '~/shared/types/auth/user-register';

definePageMeta({
  middleware: ['authenticated', 'admin-only'],
  layout: 'dashboard',
});

const roles = [{ id: 0, role: "ADMIN" }, { id: 1, role: "ONG" }];

const { state } = useAuth()

const toast = useToast();

const userReg = ref<UserRegister | undefined>();
const item = ref<User | undefined>();
const selected = ref();
const openEditDialog = ref(false);
const openDeleteDialog = ref(false);
const openNewDialog = ref(false);

const { data: users } = await useLazyFetch<User[]>('/api/users');

function deleteitem(param: User) {
  item.value = param;
  openDeleteDialog.value = true;
}

async function deleteitemConfirm() {
  try {
    const headers = useRequestHeaders(['cookie']);
    await $fetch(`http://localhost:8080/api/v1/users/${item.value?.user_id}`, { method: 'DELETE', headers });
    users.value = users.value!.filter((val) => val.user_id !== item.value!.user_id);
    toast.add({ severity: 'success', summary: 'Deletado com sucesso', life: 3000 });
  } catch (e: any) {
    toast.add({ severity: 'error', summary: 'Erro ao deletar', detail: e.message, life: 3000 });
  }
  openDeleteDialog.value = false;
}

async function openNew() {
  userReg.value = {
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    email: '',
    role: 'ONG',
  }

  openNewDialog.value = true;
}

async function saveitem() {
  try {
    const headers = useRequestHeaders(['cookie']);
    const res = await $fetch<User>(`/api/users`, { method: 'POST', headers, body: JSON.stringify(userReg.value) });
    users.value?.push(res);
    toast.add({ severity: 'success', summary: 'Criado com sucesso', life: 3000 });
  } catch (e: any) {
    toast.add({ severity: 'error', summary: 'Erro ao criar', detail: e.message, life: 3000 });
  }

  openNewDialog.value = false;
}
</script>

<template>
  <div class="dashboard-items">
    <Toast />

    <Toolbar class="dashboard-items-header">
      <template #start>
        <h3 class="dashboard-items-header-title">Usuários</h3>
      </template>

      <template #end>
        <div class="dashboard-items-header-actions">
          <button class="dashboard-items-header-action" @click="openNew">
            <Icon name="mdi:plus" />
            Adicionar
          </button>
          <button class="dashboard-items-header-action" :disabled="!selected || !selected.length">
            <Icon name="mdi:delete-outline" />
            Deletar
          </button>
        </div>
      </template>
    </Toolbar>

    <div class="dashboard-items-grid">
      <DataTable v-model:selection="selected" :value="users" stripedRows :rowHover=true class="recent-grid-rounded">
        <Column selectionMode="multiple" style="width: 3rem"></Column>
        <Column field="user_id" header="ID"></Column>
        <Column field="username" header="Usuário"></Column>
        <Column field="first_name" header="Primeiro Nome"></Column>
        <Column field="last_name" header="Segundo Nome"></Column>
        <Column field="email" header="Email"></Column>
        <Column field="role" header="Role"></Column>
        <Column :exportable="false">
          <template #body="slotProps">
            <div class="recent-grid-actions">
              <button class="recent-grid-actions-button" @click="openEditDialog = true">
                <Icon name="mdi:edit" />
              </button>
              <button class="recent-grid-actions-button">
                <Icon name="mdi:delete" @click="deleteitem(slotProps.data)" />
              </button>
            </div>
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
        <span v-if="item">Tem certeza que quer deletar a usuário: <b>{{ item.username }}</b>?</span>
      </div>
      <template #footer>
        <Button label="No" icon="pi pi-times" text @click="openDeleteDialog = false" />
        <Button label="Yes" icon="pi pi-check" @click="deleteitemConfirm" />
      </template>
    </Dialog>

    <Dialog v-model:visible="openNewDialog" :style="{ width: '450px' }" header="Nova Usuário" :modal="true">
      <div class="new-dialog">
        <div class="new-dialog-field">
          <label for="username">Usuário</label>
          <InputText id="username" v-model="userReg!.username" required="true" autofocus fluid />
          <small v-if="!userReg?.username" class="text-red-500">Usuário é obrigatório</small>
        </div>
        <div class="new-dialog-field">
          <label for="first_name">Primeiro</label>
          <InputText id="first_name" v-model="userReg!.first_name" required="true" autofocus fluid />
          <small v-if="!userReg?.first_name" class="text-red-500">Primeiro Nome é obrigatório</small>
        </div>
        <div class="new-dialog-field">
          <label for="last_name">Segundo Nome</label>
          <InputText id="last_name" v-model="userReg!.last_name" required="true" autofocus fluid />
          <small v-if="!userReg?.last_name" class="text-red-500">Segundo Nome é obrigatório</small>
        </div>
        <div class="new-dialog-field">
          <label for="password">Senha</label>
          <InputText id="password" v-model="userReg!.password" required="true" autofocus fluid />
          <small v-if="!userReg?.password" class="text-red-500">Senha é obrigatória</small>
        </div>
        <div class="new-dialog-field">
          <label for="email">Email</label>
          <InputText type='email' id="email" v-model="userReg!.email" required="true" autofocus fluid />
          <small v-if="!userReg?.email" class="text-red-500">Email é obrigatório</small>
        </div>
        <div class="new-dialog-field">
          <label for="role">Role</label>
          <Select v-model="userReg!.role" :options="roles" optionLabel="role" option-value="role"
            placeholder="Selecione uma Role" checkmark :highlightOnSelect="false" class="w-full md:w-56" />
          <small v-if="!userReg?.role" class="text-red-500">Role é obrigatória</small>
        </div>
      </div>
      <template #footer>
        <Button label="Cancelar" icon="pi pi-times" text @click="openNewDialog = false" />
        <Button label="Salvar" icon="pi pi-check" @click="saveitem" />
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

.dashboard-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.dashboard-items-header {
  border-radius: var(--border-radius-md) !important;
  border: 1px solid var(--p-datatable-header-cell-border-color) !important;
}

.dashboard-items-header-title {
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
.dashboard-items-header-action {
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

.dashboard-items-header-actions {
  display: flex;
  gap: 1rem;
}

.dashboard-items-header-action {
  display: flex;
  flex-direction: row;
  color: var(--color-primary-text);
  gap: 0.5rem;
  padding: var(--spacing-sm-2) var(--spacing-sm-2);
}

.dashboard-items {
  height: 100%;
  width: 100%;
  padding: var(--spacing-md);
}
</style>