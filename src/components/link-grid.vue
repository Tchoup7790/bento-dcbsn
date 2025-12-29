<template>
  <div class="links-grid" v-if="links.length > 0">
    <link-card v-for="(link, index) in links" :key="index" :link="link" />
  </div>
</template>

<script lang="ts" setup>
import type { Link } from '@/models/link'
import linkCard from './link-card.vue'

defineProps({
  links: {
    type: Array<Link>,
    required: true,
  },
})
</script>
