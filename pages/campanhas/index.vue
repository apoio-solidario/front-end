<script lang="ts" setup>
import type { Campaign } from '~/shared/types/campaign';

const campanhas: Campaign[] = []
</script>

<template>
  <CardList>
    <CampaignCard v-for="(item, index) in campanhas" :item="item" :index="index" :key="item.id" />
  </CardList>
</template>

<style></style>