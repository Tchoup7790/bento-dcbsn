<template>
  <div class="profile-section">
    <div class="avatar">
      <img :src="avatarUrl" :alt="name" />
    </div>
    <h1 class="profile-name">{{ name }}</h1>
  </div>
</template>

<script lang="ts" setup>
const name = 'DRUMCORPSBSN'
const avatarUrl =
  'https://storage.googleapis.com/creatorspace-public/users%2Fcmcjiv8a702m8nm01myz7n1wm%2FoNbGJSqvpMIbuZjM-BSN.png'
</script>
