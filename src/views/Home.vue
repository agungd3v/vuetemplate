<template>
  <main-layout>
    <template v-slot:content>
      <h1>This is an home page</h1>
      <button @click="signout">Sign Out</button>
    </template>
  </main-layout>
</template>

<script>
import MainLayout from '@/layouts/Main.vue'
export default {
  name: 'Home',
  components: {
    MainLayout
  },
  methods: {
    signout() {
      this.$store.dispatch('logout', true)
      return this.$router.push({ name: 'SignIn' })
    }
  }
}
</script>
<style scoped>
  button {
    padding: 5px 10px;
    outline: none;
  }
</style>