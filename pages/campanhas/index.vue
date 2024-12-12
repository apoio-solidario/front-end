<script lang="ts" setup>
import { useLazyFetch } from '#app';
import type { Campaign } from '~/shared/types/campaign';

const { data: campaigns, status } = useLazyFetch<Campaign[]>('/api/campaigns')

useSeoMeta({
  title: 'Campanhas | Apoio Solidário',
  ogTitle: 'Campanhas | Apoio Solidário',
  description: 'Descubra campanhas solidárias para apoiar.',
  ogDescription: 'Descubra campanhas solidárias para apoiar.',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <CardList>
    <CampaignCard v-for="(item, index) in campaigns" :item="item" :index="index" :key="item.id" />
  </CardList>
</template>

<style></style>