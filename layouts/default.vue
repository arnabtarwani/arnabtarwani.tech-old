<template>
  <div class="container">
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

.container::-webkit-scrollbar {
  background-color: rgb(27, 27, 27);
}
</style>
