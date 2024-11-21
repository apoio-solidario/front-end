<script lang="ts" setup></script>

<template>
    <div class="ong-card">
        <div class="ong-card-banner">
            <img src="https://picsum.photos/1200/630" alt="" class="ong-card-image">
            <div class="ong-card-avatar">
                <img src="/public/android-chrome-192x192.png" alt="" class="ong-card-avatar-image">
            </div>
        </div>

        <div class="ong-card-content">
            <h2 class="ong-card-info ong-card-title">Lorem Ipsum</h2>
            <p class="ong-card-info ong-card-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor
            </p>
        </div>

        <div class="ong-card-actions">
            <PrimaryLink href="/" title="Ver mais sobre essa ONG" class="ong-card-action">
                Ver Mais
            </PrimaryLink>
            <IconLink href="/" title="Salvar ONG" icon="mdi:cards-heart-outline" class="ong-card-action" />
            <IconLink href="/" title="Compartilhar ONG" icon="mdi:share-variant" class="ong-card-action" />
        </div>
    </div>
</template>

<style scoped>
.ong-card {
    border: 1px solid var(--color-border);
    width: 425px;
    border-radius: var(--border-radius-md);
    padding: var(--card-min-padding) var(--card-min-padding);
    box-shadow: var(--shadow-small);
}

.ong-card-banner {
    height: 150px;
    width: 100%;
    position: relative;
    object-fit: cover;
}

.ong-card-image {
    height: inherit;
    width: 100%;
    border-radius: var(--border-radius-md);
}

.ong-card-avatar {
    position: absolute;
    bottom: -80px;
    left: 8px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 3px solid white;
    background-color: var(--color-background);
    overflow: hidden;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.ong-card-avatar-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.ong-card-content {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    margin: 2.5rem 0 0.5rem 0;
}

.ong-card-avatar {
    height: 5rem;
    width: 5rem;
    transform: translateY(-60%);
}

.ong-card-info {
    margin: 0;
}

.ong-card-actions {
    display: flex;
    width: 100%;
    gap: 1rem;
}

.ong-card-action:first-child {
    width: 100%;
    flex: 4;
}

.ong-card-action {
    width: 100%;
    flex: 1;
    padding: var(--spacing-sm) var(--spacing-xl);
}
</style>