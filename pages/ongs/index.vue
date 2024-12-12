<script lang="ts" setup>
import type { ONG } from '~/shared/types/ong';

const ongs: ONG[] = []

useSeoMeta({
  title: 'ONGs | Apoio Solidário',
  ogTitle: 'ONGs | Apoio Solidário',
  description: 'Descubra organizações e saiba como apoiá-las.',
  ogDescription: 'Descubra organizações e saiba como apoiá-las.',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <CardList>
    <ONGCard v-for="(item, index) in ongs" :item="item" :index="index" :key="item.id" />
  </CardList>
</template>

<style></style>