<script lang="ts" setup>
import { useLazyFetch } from '#app';
import type { Campaign } from '~/shared/types/campaign';

const { data: campaigns } = useLazyFetch<Campaign[]>('/api/campaigns')

useSeoMeta({
  title: 'Campanhas | Apoio Solidário',
  ogTitle: 'Campanhas | Apoio Solidário',
  description: 'Descubra campanhas solidárias para apoiar.',
  ogDescription: 'Descubra campanhas solidárias para apoiar.',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <CardList v-if="campaigns">
    <CampaignCard v-for="(item, index) in campaigns" :item="item" :index="index" :key="item.campaign_id" />
  </CardList>
  <div v-else>
    <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="transparent" animationDuration=".5s"
      aria-label="Custom ProgressSpinner" />
  </div>
</template>

<style></style>