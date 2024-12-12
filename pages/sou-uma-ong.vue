<script lang="ts" setup>
import type { FormSubmitEvent } from '@primevue/forms/form';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';
import type { UserRegister } from '~/shared/types/auth/user-register';

const { register, getError } = useAuth();

definePageMeta({
  middleware: 'authenticated',
  layout: 'login',
});

// xBzgH2TuqQjJ4NadtKUR9P
const formValues = reactive<UserRegister>({
  username: '',
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  role: 'ADMIN'
});

const resolver = zodResolver(
  z.object({
    username: z.string().min(1, 'O nome do usuário é obrigatório.'),
    first_name: z.string().min(1, 'O primeiro nome é obrigatório.'),
    last_name: z.string().min(1, 'O último nome é obrigatório.'),
    email: z.string().min(1, 'O e-mail é obrigatório.').email("Endereço de e-mail inválido"),
    password: z
      .string()
      .min(12, "A senha deve ter 12 caracteres ou mais")
      .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
      .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
      .regex(/\d/, "A senha deve conter pelo menos um número"),
    role: z.enum(["ONG", "ADMIN"])
  })
);

async function onFormSubmit(e: FormSubmitEvent) {
  if (e.valid) {
    await register(formValues);

    const error = getError();
    if (error) {
      alert(error.message);
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000))

    await navigateTo("/app/login/");
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

      <FormField v-slot="$field" name="first_name" class="dashboard-field">
        <label for="first_name" class="dashoboard-field-label">Primeiro nome</label>
        <InputText v-model="formValues.first_name" type="text" placeholder="Primeiro nome" class="dashboard-input" />
        <Message v-if="$field?.invalid" severity="error" variant="simple" size="small">{{ $field.error?.message }}
        </Message>
      </FormField>

      <FormField v-slot="$field" name="last_name" class="dashboard-field">
        <label for="last_name" class="dashoboard-field-label">Último nome</label>
        <InputText v-model="formValues.last_name" type="text" placeholder="Último nome" class="dashboard-input" />
        <Message v-if="$field?.invalid" severity="error" variant="simple" size="small">{{ $field.error?.message }}
        </Message>
      </FormField>

      <FormField v-slot="$field" name="email" class="dashboard-field">
        <label for="email" class="dashoboard-field-label">Último nome</label>
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