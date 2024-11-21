<script lang="ts" setup></script>

<template>
    <div class="campaign-card">
        <img src="/public/images/giarafa.png" alt="" class="campaign-card-image">

        <div class="campaign-card-content">
              <div class="img">
                <img src="/public/android-chrome-192x192.png" alt="" class="icon">
            </div>  
            <h2 class="campaign-card-info campaign-card-title">Lorem Ipsum</h2>
            <p class="campaign-card-info campaign-card-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor
            </p>
        </div>

        <div class="campaign-card-links">
            <PrimaryLink href="/" title="Ver mais sobre essa campanha" class="campaign-card-link">
                Ver Mais
            </PrimaryLink>
            <IconLink href="/" title="Salvar campanha" icon="mdi:cards-heart-outline" />
            <IconLink href="/" title="Compartilhar campanha" icon="mdi:share-variant" />
        </div>
    </div>
</template>

<style scoped>
.icon{
    width: 35%;
}
.img{
    position: relative;
    bottom: 7px;
    left: 25px;
    width: 60%;
}
.campaign-card {
    border: 1px solid var(--color-border);
    width: 425px;
    border-radius: var(--border-radius-md);
    padding: var(--card-min-padding) var(--card-min-padding);
    box-shadow: var(--shadow-small);
}

.campaign-card-image {
    width: 100%;
    height: 150px;
    border-radius: var(--border-radius-md);
}

.campaign-card-content {
    display: flex;
    flex-direction: column;
    position: relative;
    bottom: 40px;
}

.campaign-card-info {
    margin: 0;
}

.campaign-card-local {
    font-weight: normal;
    font-size: 0.85em;
}

.campaign-card-links {
    display: flex;
    width: 100%;
    gap: 1rem;
}

.campaign-card-link:first-child {
    width: 100%;
    flex: 4;
}

.campaign-card-link {
    width: 100%;
    flex: 1;
    padding: var(--spacing-sm) var(--spacing-xl);
}

.campaign-card-description {
    font-size: 16px;
    width: 300px;
}
</style>