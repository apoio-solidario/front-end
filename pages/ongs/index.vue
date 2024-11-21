<script lang="ts" setup>
import type { ONG } from '~/shared/types/ong';

const ongs: ONG[] = []
</script>

<template>
  <CardList>
    <ONGCard v-for="(item, index) in ongs" :item="item" :index="index" :key="item.id" />
  </CardList>
</template>

<style></style>