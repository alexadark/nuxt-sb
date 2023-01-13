<script setup>
const config = useRuntimeConfig();
const { slug } = useRoute().params;
const resolveRelations = ["popular-articles.articles"];
const story = await useAsyncStoryblok(
  slug && slug.length > 0 ? slug.join("/") : "home",
  {
    version: config.isPreview === "true" ? "draft" : "published",
    resolve_relations: resolveRelations,
  },
  { resolveRelations }
);
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
