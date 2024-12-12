<script lang="ts" setup>
import type { Event } from '~/shared/types/event';

const eventos: Event[] = []

useSeoMeta({
  title: 'Eventos | Apoio Solidário',
  ogTitle: 'Eventos | Apoio Solidário',
  description: 'Explore eventos beneficentes e oportunidades para contribuir.',
  ogDescription: 'Explore eventos beneficentes e oportunidades para contribuir.',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <CardList>
    <EventCard v-for="(item, index) in eventos" :item="item" :index="index" :key="item.id" />
  </CardList>
</template>

<style></style>