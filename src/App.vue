<template>
  <header>
    <AppHeader />
  </Header>
  <div class="p-5">
    <RouterView />
  </div>
</template>

<script setup>
  import AppHeader from '@/components/AppHeader.vue'
  import { RouterView } from 'vue-router'
</script>


<style scoped>

</style>
