<script lang="ts" setup></script>

<template>
    <div class="image-card">
        <img src="https://picsum.photos/1200/630" alt="" class="image-card-image">

        <div class="image-card-content">
            <div class="image-card-info">
                <Icon name="mdi:image" />
                <span>81096086-27ab-492c-bb80-db800b...</span>
            </div>

            <div class="image-card-info">
                <Icon name="mdi:clock-outline" />
                <span>12 de nov. de 2024</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.image-card {
    border: 1px solid var(--color-border);
    width: 425px;
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