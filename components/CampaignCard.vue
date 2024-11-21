<script lang="ts" setup></script>

<template>
    <div class="campaign-card">
        <img src="https://picsum.photos/1200/630" alt="" class="campaign-card-image">

        <div class="campaign-card-content">
            <h4 class="campaign-card-info campaign-card-local">
                <Icon name="mdi:location" size="1em" />
                Juazeiro do Norte - CE
            </h4>
            <h2 class="campaign-card-info campaign-card-title">Lorem Ipsum</h2>
            <p class="campaign-card-info campaign-card-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor
            </p>
        </div>

        <div class="campaign-card-actions">
            <PrimaryLink href="/" title="Ver mais sobre essa campanha" class="campaign-card-action">
                Ver Mais
            </PrimaryLink>
            <IconLink href="/" title="Salvar campanha" icon="mdi:cards-heart-outline" class="campaign-card-action" />
            <IconLink href="/" title="Compartilhar campanha" icon="mdi:share-variant" class="campaign-card-action" />
        </div>
    </div>
</template>

<style scoped>
.campaign-card {
    border: 1px solid var(--color-border);
    width: 425px;
    border-radius: var(--border-radius-md);
    padding: var(--card-min-padding) var(--card-min-padding);
    box-shadow: var(--shadow-small);
}

.campaign-card-image {
    width: 100%;
    border-radius: var(--border-radius-md);
}

.campaign-card-content {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    margin: 0.5rem 0;
}

.campaign-card-info {
    margin: 0;
}

.campaign-card-local {
    font-weight: normal;
    font-size: 0.85em;
}

.campaign-card-actions {
    display: flex;
    width: 100%;
    gap: 1rem;
}

.campaign-card-action:first-child {
    width: 100%;
    flex: 4;
}

.campaign-card-action {
    width: 100%;
    flex: 1;
    padding: var(--spacing-sm) var(--spacing-xl);
}
</style>