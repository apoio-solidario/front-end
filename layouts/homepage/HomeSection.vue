<script lang="ts" setup></script>

<template>
    <section class="home-section" id="inicio">
        <div class="content">
            <h1 class="title">Conectando ONGs e pessoas para doações e apoio.</h1>
            <div class="btns">
                <PrimaryLink href="/campanhas/">
                    Ver camapanhas
                </PrimaryLink>
                <SecondaryLink href="/#sobre">
                    Sobre o projeto
                </SecondaryLink>
            </div>
        </div>
        <Illustration src="/images/illustration-home.png" alt="Illustração - Início" />
    </section>
</template>

<style scoped>
.home-section {
    margin-top: 5%;
    width: 100%;
    max-width: var(--max-width);
    display: flex;
}

.title {
    font-size: max(48px, min(3.5vw, 76px));
    background: linear-gradient(140deg, var(--color-primary), var(--color-secondary));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
}

.btns {
    display: flex;
    align-items: center;
    gap: 1rem;
}

@media (max-width: 900px) {
    .home-section {
        flex-direction: column;
        gap: 4rem;
    }

    .content {
        height: fit-content;
        width: 100%;
        justify-content: center;
    }
}
</style>