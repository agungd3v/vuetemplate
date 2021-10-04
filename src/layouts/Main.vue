<template>
  <div class="content__wrapper">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <slot name="content" />
  </div>
</template>
<script>
export default {
  name: 'MainLayout'
}
</script>
