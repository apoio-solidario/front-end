<script lang="ts" setup>
import type { Image } from '~/shared/types/image';

const props = defineProps<{
    item: Image
}>()
</script>

<template>
    <div class="image-card">
        <img :src="item.image_url" :alt="item.image_name" class="image-card-image">

        <div class="image-card-content">
            <div class="image-card-info">
                <Icon name="mdi:image" />
                <span>{{ item.image_name }}</span>
            </div>

            <div class="image-card-info">
                <Icon name="mdi:clock-outline" />
                <span>{{ item.created_at }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.image-card {
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius-md);
    padding: var(--card-min-padding) var(--card-min-padding);
    box-shadow: var(--shadow-small);
}

.image-card-image {
    position: relative;
    width: 100%;
    border-radius: var(--border-radius-md);
}

.image-card-content {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    gap: 10px;
}

.image-card-info {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 30px;
}
</style>