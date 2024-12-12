<script lang="ts" setup>
import type { Event } from '~/shared/types/event';

const props = defineProps<{
    item: Event
}>()
</script>

<template>
    <div class="event-card">
        <img :src="item.banner_profile" alt="" class="event-card-image">

        <div class="event-card-content">
            <h2>{{ item.title }}</h2>
            <Description>
                {{ item.description }}
            </Description>

            <hr>

            <div class="event-card-info event-card-info-date">
                <Icon name="mdi:calendar" />
                <span>Sun, Sep 10, 2023 - Tue, Sep 12, 2023</span>
            </div>

            <div class="event-card-info event-card-info-hours">
                <Icon name="mdi:clock-outline" />
                <span>09:00 AM - 05:00 PM</span>
            </div>

            <div class="event-card-info event-card-info-location">
                <Icon name="mdi:location" size="1.8em" />
                <span>R. Todos os Santos, 286-552 - Salesianos, Juazeiro do Norte, Ceará</span>
            </div>
        </div>

        <div class="event-card-actions">
            <PrimaryLink href="/" title="Ver mais sobre esse evento" class="event-card-action">
                Ver Mais
            </PrimaryLink>
            <IconLink href="/" title="Salvar evento" icon="mdi:cards-heart-outline" class="event-card-action" />
            <IconLink href="/" title="Compartilhar evento" icon="mdi:share-variant" class="event-card-action" />
        </div>
    </div>
</template>

<style scoped>
.event-card {
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius-md);
    padding: var(--card-min-padding) var(--card-min-padding);
    box-shadow: var(--shadow-small);
}

.event-card-image {
    width: 100%;
    border-radius: var(--border-radius-md);
}

.event-card-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0.5rem 0 0.8rem 0;
}

.event-card-info {
    margin: 0;
    display: flex;
    align-items: center;
    gap: 10px;
    height: 30px;
}

.event-card-content>* {
    margin: 0;
}

.event-card-actions {
    display: flex;
    width: 100%;
    gap: 1rem;
}

.event-card-action:first-child {
    flex: 4;
}

.event-card-action {
    width: 100%;
    flex: 1;
}
</style>