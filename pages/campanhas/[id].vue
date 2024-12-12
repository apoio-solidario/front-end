<script lang="ts" setup>
import { useLazyFetch } from '#app';
import type { Campaign } from '~/shared/types/campaign';

const route = useRoute()
const { data: campaign } = useLazyFetch<Campaign>(`/api/campaigns/${route.params.id}`)

useSeoMeta({
  title: `${campaign.value?.title} | Apoio Solidário`,
  ogTitle: `${campaign.value?.title} | Apoio Solidário`,
  description: campaign.value?.description,
  ogDescription: campaign.value?.description,
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="campaign-profile">

    <div class="campaign-header">
      <div class="campaign-banner-container">
        <img src="https://picsum.photos/1200/630" alt="" class="campaign-banner">
      </div>

      <div class="campaign-info">
        <div class="campaign-info-ong">
          <img src="/public/favicon.ico" alt="" class="campaign-avatar">
          <span class="campaign-name">{{ route.params.id }}</span>
        </div>

        <div class="campaign-actions">
          <PrimaryButton class="campaign-action-button">Apoiar</PrimaryButton>
          <PrimaryButton class="campaign-action-button">Contato</PrimaryButton>
        </div>
      </div>
    </div>

    <div class="campaign-content">
      <div class="campaign-content-top">
        <div class="campaign-content-left">

          <div class="campaign-about-container">
            <h3 class="campaign-about-title">Sobre</h3>
            <div class="campaign-about-content">
              <p>Lorem ipsum dolor sit amet. Et fuga nesciunt est </p>
              <p>In enim tempora aut molestiae exercitationem et omnis modi et illo nulla 33 vitae aspernatur et sunt
                nulla. Est dolores cumque in quos facere ut quae temporibus sit.</p>
            </div>
          </div>

          <div class="campaign-tags">
            <h3 class="campaign-tags-title">Tags</h3>
            <div class="campaign-tag-list">
              <span class="campaign-tag">Evento</span>
              <span class="campaign-tag">Ceará</span>
              <span class="campaign-tag">social</span>
              <span class="campaign-tag">Cultura</span>
              <span class="campaign-tag">Comunidade</span>
            </div>
          </div>
        </div>

        <div class="campaign-content-right">
          <div class="campaign-description">
            <h3 class="campaign-description-title">Descrição</h3>
            <hr>
            <article class="campaign-description-article">
            </article>
          </div>
        </div>
      </div>

      <div class="campaign-content-bottom">
        <div class="campaign-images">
          <h3>Imagens</h3>
          <div class="campaign-images-list">
            <img src="https://picsum.photos/1200/630" alt="" class="campaign-image">
            <img src="https://picsum.photos/1200/630" alt="" class="campaign-image">
            <img src="https://picsum.photos/1200/630" alt="" class="campaign-image">
            <img src="https://picsum.photos/1200/630" alt="" class="campaign-image">
            <img src="https://picsum.photos/1200/630" alt="" class="campaign-image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  margin: 0.5rem 0;
}

hr {
  border: 1px solid var(--color-border);
}

.campaign-header {
  border-radius: var(--border-radius-md);
  width: 100%;
}

.campaign-info {
  height: 75px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  background-color: var(--color-background);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-md);
  border: 1px solid var(--color-border);
  margin: auto;
  transform: translateY(-50%);
}

.campaign-actions {
  display: flex;
  gap: 1rem;
}

.campaign-info-ong {
  display: flex;
  gap: 1rem;
}

.campaign-profile {
  width: 100%;
  max-width: var(--max-width);
}

.campaign-banner {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: var(--border-radius-md);
}

.campaign-name {
  align-content: center;
  font-weight: bold;
}

.campaign-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.campaign-content-top {
  display: flex;
  gap: 2rem;
}

.campaign-content-left,
.campaign-content-right {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.campaign-content-left {
  flex: 2;
}

.campaign-content-right {
  flex: 5;
}

.campaign-about-container {
  padding: var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-md);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.campaign-about-title {
  margin: 0 0 0.5rem 0;
}

.campaign-description {
  padding: var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-md);
}

.campaign-description-article>h3,
p {
  margin: 1rem 0;
}

.campaign-tags {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-md);
}

.campaign-tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.campaign-tag {
  padding: var(--spacing-sm) var(--spacing-sm-2);
  border-radius: var(--border-radius-md);
  background-color: var(--color-primary);
  color: var(--color-text-accent);
}

.campaign-images {
  width: 100%;
  padding: var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-md);
}

.campaign-images-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  width: 100%;
  gap: 1rem;
}

.campaign-image {
  width: 100%;
  border-radius: var(--border-radius-md);
}

@media (max-width: 900px) {
  .campaign-info {
    width: 90%;
    flex-direction: column;
    gap: 1rem;
  }

  .campaign-content-top {
    flex-direction: column;
  }

  .campaign-content-left,
  .campaign-content-right {
    width: 100%;
  }
}
</style>