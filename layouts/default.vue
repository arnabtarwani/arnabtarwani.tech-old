<template>
  <div>
    <Header />
    <hr style="margin-left:21%;margin-right:21%;text-align:center;" />
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
