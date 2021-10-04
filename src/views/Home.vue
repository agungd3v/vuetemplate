<template>
  <main-layout>
    <template v-slot:content>
      <h1>This is an sign in page</h1>
    </template>
  </main-layout>
</template>

<script>
import MainLayout from '@/layouts/Main.vue'
export default {
  name: 'Home',
  components: {
    MainLayout
  }
}
</script>
