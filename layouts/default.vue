<template>
  <div>
    <Header />
    <nuxt />
  </div>
</template>

<script>
import Header from '~/components/header.vue'
export default {
  components: {
    Header
  }
}
</script>

<style scoped>
header {
  position: sticky;
  position: -webkit-sticky;
}
</style>
