<script lang="ts" setup></script>

<template>
  <section class="about-section" id="sobre">
    <Illustration src="/images/illustration-about.png" alt="Illustração - Sobre" />
    <div class="about-content">
      <h2 class="about">Sobre o Projeto</h2>
      <p class="about-description">
        O projeto <strong>Apoio Solidario</strong> foi desenvolvido para conectar instituições sem fins lucrativos
        (ONGs) a potenciais
        doadores.
      </p>
      <p class="about-description">
        Nosso principal objetivo é trazer a visibilidade necessária para os projetos sociais, possibilitando que a
        população conheça essas iniciativas e saiba como contribuir, além de promover transparência e confiabilidade nas
        instituições.
      </p>
      <div class="about-btns">
        <PrimaryLink href="/#como-ajudar">
          Como Ajudar?
        </PrimaryLink>
        <span>ou</span>
        <SecondaryButton href="/campanhas/">
          Ver Campanhas
        </SecondaryButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  width: 100%;
  max-width: var(--max-width);
  display: flex;
  gap: 5rem;
  scroll-margin-top: 5rem;
  margin: 5rem 0;
}

.about-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}

.about,
.about-description {
  margin: 0;
}

.about-description {
  font-size: 1.2em;
}

.about-btns {
  display: flex;
  gap: 1rem;
  align-items: center;
}

@media (max-width: 900px) {
  .about-section {
    flex-direction: column-reverse;
    gap: 4rem;
  }

  .about-content {
    height: fit-content;
  }

  .about-content {
    width: 100%;
    justify-content: center;
  }
}
</style>