<template>
  <main>
    <profile-section avatar-url="" name="DRUMCORPBSN" />
    <link-grid :links="drumcorpbsnData as LinkData[]" />
  </main>
</template>

<script lang="ts" setup>
import profileSection from '@/components/profile-section.vue'
import linkGrid from '@/components/link-grid.vue'

import drumcorpbsnData from '@/assets/data/drumcorpbsn-data.json'
import type { LinkData } from '@/models/interfaces/link-data.interface'
</script>
