<template>
  <div class="signin">
    <h1>This is an sign in page</h1>
    <form @submit.prevent="signin">
      <input type="text" v-model="email" placeholder="Username or email">
      <input type="password" v-model="password" placeholder="Password">
      <button type="submit">Sign In</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'SignIn',
  data() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    async signin() {
      try {
        if (!this.email || !this.password) return console.error('fields is required')
        const request = await this.axios.post('/login', {
          usormail: this.email,
          pwd: this.password
        })
        if (request.status) {
          this.$store.dispatch('setUser', request.message.user)
          this.$store.dispatch('setToken', request.message.token)
          localStorage.setItem('bearer', JSON.stringify({
            user: this.$store.state.user,
            token: this.$store.state.token
          }))
          return this.$router.push({ name: 'Home' })
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
<style scoped>
  form {
    width: 220px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
  }
  form input,
  form button {
    padding: 5px 10px;
    outline: none;
  }
</style>