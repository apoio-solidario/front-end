<script lang="ts" setup>
import { useToast } from 'primevue/usetoast';
import type { Event } from '~/shared/types/event';
import type { ONG } from '~/shared/types/ong';

definePageMeta({
  middleware: 'authenticated',
  layout: 'dashboard',
});

const { state } = useAuth()

const toast = useToast();

const event = ref<Event | undefined>();
const selected = ref();
const openEditDialog = ref(false);
const openDeleteDialog = ref(false);
const openNewDialog = ref(false);
const startDate = ref()
const endDate = ref()

const { data: events } = await useLazyFetch<Event[]>('/api/events');
const { data: ongs } = await useLazyFetch<ONG[]>('/api/ongs');

function deleteevent(item: Event) {
  event.value = item;
  openDeleteDialog.value = true;
}

async function deleteeventConfirm() {
  try {
    const headers = useRequestHeaders(['cookie']);
    await $fetch(`/api/events/${event.value?.event_id}`, { method: 'DELETE', headers });
    events.value = events.value!.filter((val) => val.event_id !== event.value!.event_id);
    toast.add({ severity: 'success', summary: 'Deletado com sucesso', detail: event.value?.title, life: 3000 });
  } catch (e: any) {
    toast.add({ severity: 'error', summary: 'Erro ao deletar', detail: e.message, life: 3000 });
  }
  openDeleteDialog.value = false;
}

async function openNew() {
  event.value = {
    event_id: '',
    title: '',
    description: '',
    content: '',
    image_profile: '',
    banner_profile: '',
    start_data: '',
    end_data: '',
    handler: '',
    status: 'Active',
    ong_id: '',
    created_at: '',
    updated_at: '',
  }

  openNewDialog.value = true;
}

async function saveevent() {

  console.log(ongs)

  try {
    event.value!.end_data = endDate.value;
    event.value!.start_data = startDate.value;

    if (!event.value?.ong_id && state.value.user!.role === 'ONG') {
      console.log(ongs.value!.filter((e) => {
        console.log(e.user_id === state.value.user!.user_id)
        console.log(e.user_id)
        console.log(state.value.user!.user_id)
        return e.user_id === state.value.user!.user_id;
      }))
      event.value!.ong_id = ongs.value!.filter((e) => e.user_id === state.value.user!.user_id)[0].ong_id
    }

    const headers = useRequestHeaders(['cookie']);
    await $fetch(`/api/events`, { method: 'POST', headers, body: JSON.stringify(event.value) });
    events.value?.push(event.value!);
    toast.add({ severity: 'success', summary: 'Deletado com sucesso', detail: event.value?.title, life: 3000 });
  } catch (e: any) {
    toast.add({ severity: 'error', summary: 'Erro ao deletar', detail: e.message, life: 3000 });
  }

  openNewDialog.value = false;
}
</script>

<template>
  <div class="dashboard-events">
    <Toast />

    <Toolbar class="dashboard-events-header">
      <template #start>
        <h3 class="dashboard-events-header-title">Eventos</h3>
      </template>

      <template #end>
        <div class="dashboard-events-header-actions">
          <button class="dashboard-events-header-action" @click="openNew">
            <Icon name="mdi:plus" />
            Adicionar
          </button>
          <button class="dashboard-events-header-action" :disabled="!selected || !selected.length">
            <Icon name="mdi:delete-outline" />
            Deletar
          </button>
        </div>
      </template>
    </Toolbar>

    <div class="dashboard-events-grid">
      <DataTable v-model:selection="selected" :value="events" stripedRows :rowHover=true class="recent-grid-rounded">
        <Column selectionMode="multiple" style="width: 3rem"></Column>
        <Column field="title" header="Nome"></Column>
        <Column field="description" header="Descrição"></Column>
        <Column field="start_data" header="Data de Início"></Column>
        <Column field="end_data" header="Data Final"></Column>
        <Column header="Status" field="status" :filterMenuStyle="{ width: '14rem' }">
          <template #body="{ data }">
            <Tag :value="data.status" severity="info" />
          </template>
        </Column>
        <Column :exportable="false">
          <template #body="slotProps">
            <div class="recent-grid-actions">
              <button class="recent-grid-actions-button" @click="openEditDialog = true">
                <Icon name="mdi:edit" />
              </button>
              <button class="recent-grid-actions-button">
                <Icon name="mdi:delete" @click="deleteevent(slotProps.data)" />
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
        <span v-if="event">Tem certeza que quer deletar a campanha: <b>{{ event.title }}</b>?</span>
      </div>
      <template #footer>
        <Button label="No" icon="pi pi-times" text @click="openDeleteDialog = false" />
        <Button label="Yes" icon="pi pi-check" @click="deleteeventConfirm" />
      </template>
    </Dialog>

    <Dialog v-model:visible="openNewDialog" :style="{ width: '450px' }" header="Nova Campanha" :modal="true">
      <div class="new-dialog">
        <div class="new-dialog-field">
          <label for="title">Nome</label>
          <InputText id="title" v-model="event!.title" required="true" autofocus fluid />
          <small v-if="!event?.title" class="text-red-500">Nome é obrigatório</small>
        </div>
        <div class="new-dialog-field" v-if="state.user?.role === 'ADMIN'">
          <label for="ong_id">ONG</label>
          <Select v-model="event!.ong_id" :options="ongs!" optionLabel="name" option-value="user_id"
            placeholder="Selecione uma ONG" checkmark :highlightOnSelect="false" class="w-full md:w-56" />
          <small v-if="!event?.ong_id" class="text-red-500">ONG é obrigatória</small>
        </div>
        <div class="new-dialog-field">
          <label for="description">Descrição</label>
          <Textarea id="description" v-model="event!.description" required="true" rows="2" cols="20" fluid />
          <small v-if="!event?.description" class="text-red-500">Descrição é obrigatória</small>
        </div>
        <div class="new-dialog-field">
          <label for="content">Conteúdo</label>
          <Textarea id="content" v-model="event!.content" required="true" rows="8" cols="20" fluid />
          <small v-if="!event?.content" class="text-red-500">Conteúdo é obrigatório</small>
        </div>
        <div class="new-dialog-field">
          <label for="start_date">Data de inicio</label>
          <DatePicker v-model="startDate" showIcon fluid :showOnFocus="false" />
          <small v-if="!startDate" class="text-red-500">Data incial é obrigatória</small>
        </div>
        <div class="new-dialog-field">
          <label for="end_date">Data final</label>
          <DatePicker v-model="endDate" showIcon fluid :showOnFocus="false" />
          <small v-if="!endDate" class="text-red-500">Data final é obrigatória</small>
        </div>
      </div>
      <template #footer>
        <Button label="Cancelar" icon="pi pi-times" text @click="openNewDialog = false" />
        <Button label="Salvar" icon="pi pi-check" @click="saveevent" />
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

.dashboard-events {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.dashboard-events-header {
  border-radius: var(--border-radius-md) !important;
  border: 1px solid var(--p-datatable-header-cell-border-color) !important;
}

.dashboard-events-header-title {
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
.dashboard-events-header-action {
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

.dashboard-events-header-actions {
  display: flex;
  gap: 1rem;
}

.dashboard-events-header-action {
  display: flex;
  flex-direction: row;
  color: var(--color-primary-text);
  gap: 0.5rem;
  padding: var(--spacing-sm-2) var(--spacing-sm-2);
}

.dashboard-events {
  height: 100%;
  width: 100%;
  padding: var(--spacing-md);
}
</style>