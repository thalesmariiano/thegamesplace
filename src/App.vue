<template>
  <header>
    <AppHeader />
  </Header>
  <div class="min-h-screen">
    <RouterView />
  </div>
  <footer>
    <AppFooter />
  </footer>
</template>

<script setup>
  import AppHeader from '@/components/AppHeader.vue'
  import AppFooter from '@/components/AppFooter.vue'
  import { RouterView } from 'vue-router'
</script>


<style scoped>

</style>
