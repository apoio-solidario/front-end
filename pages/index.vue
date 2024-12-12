<script setup lang="ts">
import { useSeoMeta } from '#app';
import AboutSection from '~/layouts/homepage/AboutSection.vue';
import HelpSection from '~/layouts/homepage/HelpSection.vue';
import HomeSection from '~/layouts/homepage/HomeSection.vue';
import EndSection from '~/layouts/homepage/EndSection.vue';

useSeoMeta({
    title: 'Início | Apoio Solidário',
    ogTitle: 'Início | Apoio Solidário',
    description: 'Conectando ONGs e pessoas para doaçõese apoio.',
    ogDescription: 'Conectando ONGs e pessoas para doaçõese apoio.',
    twitterCard: 'summary_large_image',
})
</script>

<template>
    <HomeSection />
    <AboutSection />
    <HelpSection />
    <EndSection />
</template>

<style scoped></style>
