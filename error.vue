<script setup>
import { clearError } from '#app/composables/error';
import { useHead } from '@unhead/vue';

const isDev = import.meta.dev
const props = defineProps({
    error: Object,
})

useHead({
    title: `Ocorreu um erro | Apoio Solidário`
})

function handleError() {
    return clearError({ redirect: '/' })
}
</script>

<template>
    <NuxtLayout>
        <div class="error">
            <img src="/favicon.ico" alt="Apoio Solidári Logo">
            <h1>
                Ocorreu um erro
            </h1>
            <p>
                Parece que você seguiu um link quebrado ou inseriu uma URL que não existe neste site.
            </p>
            <pre v-if="isDev" class="dev-message">{{ error }}</pre>
            <button @click="handleError">
                Voltar
            </button>
        </div>
    </NuxtLayout>
</template>

<style>
.error {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
}

h1 {
    margin: 0;
}

.dev-message {
    border: 1px solid red;
    border-radius: 20px;
    padding: 1rem;
}
</style>