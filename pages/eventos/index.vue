<script lang="ts" setup>
import type { Event } from '~/shared/types/event';

const eventos: Event[] = []
</script>

<template>
  <CardList>
    <EventCard v-for="(item, index) in eventos" :item="item" :index="index" :key="item.id" />
  </CardList>
</template>

<style></style>