<script lang="ts" setup>
import type { FormSubmitEvent } from '@primevue/forms/form';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';
import type { UserLogin } from '~/shared/types/auth/user-login';

const { login, state, getError } = useAuth();

definePageMeta({
  middleware: 'authenticated',
  layout: 'login',
});

const formValues = reactive<UserLogin>({
  username: '',
  password: '',
});

const resolver = zodResolver(
  z.object({
    username: z.string().min(1, 'Por favor, insira o nome do usuário.'),
    password: z.string().min(1, "Por favor, insira uma senha."),
  })
);

async function onFormSubmit(e: FormSubmitEvent) {
  if (e.valid) {
    await login(formValues);

    const error = getError()
    if (error) {
      alert(error.message);
      return;
    }

    if (state.value.isLoggedIn) {
      await navigateTo("/app/");
    }
  }
};
</script>

<template>
  <DashboardHeader />
  <div class="dashboard-login">
    <div class="dashboard-welcome">
      <img src="/favicon.ico" alt="dashboard-welcome-logo">
      <h3 class="dashboard-welcome-title">Bem vindo ao Painel do Apoio Solidário!</h3>
    </div>

    <Form v-slot="$form" :initialValues="formValues" :resolver @submit="onFormSubmit" validateOnValueUpdate
      class="dashboard-form">
      <FormField v-slot="$field" name="username" class="dashboard-field">
        <label for="username" class="dashoboard-field-label">Username</label>
        <InputText v-model="formValues.username" type="text" placeholder="Username" class="dashboard-input" />
        <Message v-if="$field?.invalid" severity="error" variant="simple" size="small">{{ $field.error?.message }}
        </Message>
      </FormField>

      <FormField v-slot="$field" name="password" class="dashboard-field">
        <label for="password" class="dashoboard-field-label">Password</label>
        <Password v-model="formValues.password" type="password" placeholder="Senha" :feedback="false" toggleMask
          input-class="dashboard-input" panel-class="dashboard-input-painel" />
        <Message v-if="$field?.invalid" severity="error" variant="simple" size="small">{{ $field.error?.message }}
        </Message>
      </FormField>

      <button type="submit">Entrar</button>
    </Form>
  </div>
</template>

<style>
.dashboard-login {
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  margin-top: 10rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: var(--spacing-md);
  justify-content: center;
  gap: 1rem;
}

.dashboard-welcome {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
}

.dashboard-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: calc(var(--max-width) / 4);
}

.dashboard-field {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.dashboard-remember {
  display: flex;
  gap: 0.5rem;
}

.dashoboard-field-label::after {
  content: '*';
  color: red;
  margin-left: 4px;
}

.dashboard-input {
  width: 100%;
}

.dashboard-input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
  outline: none;
}

.dashboard-input::placeholder {
  color: #aaa;
}
</style>