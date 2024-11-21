<script lang="ts" setup></script>

<template>
  <section class="help-section" id="como-ajudar">
    <div class="help-content">
      <h2 class="ajudar">Como Ajudar?</h2>
      <div class="help-description">
        <p>
          Você pode fazer parte do <strong>Apoio Solidário</strong> e ajudar as ONGs de diversas formas:
        </p>
        <ul>
          <li><strong>Divulgando</strong>: Compartilhe nosso projeto e as campanhas em suas redes sociais para alcançar
            mais pessoas.
          </li>
          <li><strong>Contribuindo</strong>: Doe diretamente para as campanhas das ONGs disponíveis na nossa plataforma.
            Toda ajuda faz a
            diferença!</li>
          <li><strong>Voluntariando-se</strong>: Entre em contato com as ONGs para oferecer seu tempo e habilidades.
          </li>
          <li><strong>Sugerindo melhorias</strong>: Envie ideias ou feedback para tornar nossa plataforma ainda mais
            eficiente e
            acessível.
          </li>
        </ul>
      </div>
    </div>
    <Illustration src="/images/illustration-help.png" alt="Illustração - Como Ajudar?" />
  </section>
</template>

<style>
.help-section {
  width: 100%;
  max-width: var(--max-width);
  display: flex;
  gap: 5rem;
  scroll-margin-top: 5rem;
  margin: 5rem 0;
}

.help-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}

.ajudar,
.help-description p {
  margin: 0;
}

.help-description {
  font-size: 1.2em;
  color: var(--color-text-secondary);
}

.help-btns {
  display: flex;
  gap: 1rem;
}

@media (max-width: 900px) {
  .help-section {
    flex-direction: column;
    gap: 4rem;
  }

  .help-content {
    height: fit-content;
  }

  .help-content {
    width: 100%;
    justify-content: center;
  }
}
</style>