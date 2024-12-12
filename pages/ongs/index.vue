<script lang="ts" setup>
import type { ONG } from '~/shared/types/ong';

const { data: ongs } = useLazyFetch<ONG[]>('/api/events')

useSeoMeta({
  title: 'ONGs | Apoio Solidário',
  ogTitle: 'ONGs | Apoio Solidário',
  description: 'Descubra organizações e saiba como apoiá-las.',
  ogDescription: 'Descubra organizações e saiba como apoiá-las.',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <CardList v-if="ongs">
    <ONGCard v-for="(item, index) in ongs" :item="item" :index="index" :key="item.ong_id" />
  </CardList>
  <div v-else>
    <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="transparent" animationDuration=".5s"
      aria-label="Custom ProgressSpinner" />
  </div>
</template>

<style></style>