<script lang="ts" setup></script>

<template>
  <section class="end-section">
    <h2 class="end-section-title">Cause um Impacto, faça a diferença, construa um amanhã melhor</h2>
    <Description>
      Participe da nossa missão de impactar vidas
    </Description>
    <div class="end-section-actions">
      <PrimaryLink href="/campanhas/">
        Ver campanhas
      </PrimaryLink>
    </div>
  </section>
</template>

<style>
.end-section {
  height: 100%;
  max-width: var(--max-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: center;
  margin: 5rem 0;
}

.end-section-impact {
  border: 1px solid var(--color-primary);
  border-radius: var(--border-radius-md);
  padding: 0.5;
}

.end-section-title {
  margin: 0;
  font-size: 2em;
}

.end-section-actions {
  margin-top: 0.5rem;
}
</style>