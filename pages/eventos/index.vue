<script lang="ts" setup>
import type { Event } from '~/shared/types/event';

const { data: events } = useLazyFetch<Event[]>('/api/events')

useSeoMeta({
  title: 'Eventos | Apoio Solidário',
  ogTitle: 'Eventos | Apoio Solidário',
  description: 'Explore eventos beneficentes e oportunidades para contribuir.',
  ogDescription: 'Explore eventos beneficentes e oportunidades para contribuir.',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <CardList v-if="events">
    <EventCard v-for="(item, index) in events" :item="item" :index="index" :key="item.event_id" />
  </CardList>
  <div v-else>
    <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="transparent" animationDuration=".5s"
      aria-label="Custom ProgressSpinner" />
  </div>
</template>

<style></style>