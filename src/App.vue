<template>
  <header>
    <Header />
  </Header>
  <div class="p-5">
    <RouterView />
  </div>
</template>

<script setup>
  import Header from '@/components/Header.vue'
  import { RouterView } from 'vue-router'
</script>


<style scoped>

</style>
