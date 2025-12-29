<template>
  <div class="container">
    <div class="content-wrapper">
      <profile-section />
      <link-grid :links="data as Link[]" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import data from '@/assets/data.json'
import profileSection from './components/profile-section.vue'
import linkGrid from './components/link-grid.vue'
import type { Link } from './models/link'
</script>
