<script lang="ts" setup>
import type { FormSubmitEvent } from '@primevue/forms/form';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';

definePageMeta({
  layout: false,
});

const formValues = ref({
  email: '',
  password: '',
  rememberme: false,
});

const resolver = zodResolver(
  z.object({
    email: z.string().min(1, { message: 'O e-mail é obrigatório.' }).email("Endereço de e-mail inválido"),
    password: z
      .string()
      .min(12, "A senha deve ter 12 caracteres ou mais")
      .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
      .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
      .regex(/\d/, "A senha deve conter pelo menos um número"),
  })
);

async function onFormSubmit(e: FormSubmitEvent) {
  if (e.valid) {
    alert(formValues.value.email + ' ' + formValues.value.password + ' ' + formValues.value.rememberme)
  }
};
</script>

<template>
  <div class="dashboard-login">
    <div class="dashboard-welcome">
      <img src="/favicon.ico" alt="dashboard-welcome-logo">
      <h3 class="dashboard-welcome-title">Bem vindo ao Painel do Apoio Solidário!</h3>
    </div>

    <Form v-slot="$form" :initialValues="formValues" :resolver @submit="onFormSubmit" validateOnValueUpdate
      class="dashboard-form">
      <FormField v-slot="$field" name="email" class="dashboard-field">
        <label for="email" class="dashoboard-field-label">Email</label>
        <InputText v-model="formValues.email" type="text" placeholder="Email" class="dashboard-input" />
        <Message v-if="$field?.invalid" severity="error" variant="simple" size="small">{{ $field.error?.message }}
        </Message>
      </FormField>

      <FormField v-slot="$field" name="password" class="dashboard-field">
        <label for="password" class="dashoboard-field-label">Password</label>
        <Password v-model="formValues.password" type="password" placeholder="Senha" feedback toggleMask
          input-class="dashboard-input" panel-class="dashboard-input-painel" />
        <Message v-if="$field?.invalid" severity="error" variant="simple" size="small">{{ $field.error?.message }}
        </Message>
      </FormField>

      <div class="dashboard-remember">
        <Checkbox id="rememberme" v-model="formValues.rememberme" :binary="true" />
        <label for="rememberme">Lembrar-me</label>
      </div>

      <button type="submit">Entrar</button>
    </Form>
  </div>
</template>

<style>
.dashboard-login {
  height: 80vh;
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
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