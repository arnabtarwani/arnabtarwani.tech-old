<template>
  <div class="container">
    <section class="posts">
      <div v-if="posts == 0" class="column">
        <h3>There are currently no posts available!</h3>
        <h3>Check back in sometime!</h3>
      </div>
      <div v-else>
        <div v-for="post in posts" :key="post.attributes.title" class="columns">
          <p class="title is-4">
            <nuxt-link :to="post._path" class="title-links">
              {{ post.attributes.title }}
            </nuxt-link>
          </p>
          <p class="subtitle is-6">{{ post.attributes.tags }}</p>
          <div class="content">
            <p>{{ post.attributes.date }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData() {
    const context = await require.context('~/content/blog', true, /\.md$/)
    const posts = await context.keys().map((key) => ({
      ...context(key),
      _path: `/${key.replace('.md', '').replace('./', '')}`
    }))
    return { posts: posts.reverse() }
  }
}
</script>

<style scoped>
.container {
  margin-top: 30vh;
}

.posts {
  font-size: 2.2em;
  text-decoration: none;
}

.title-links {
  text-decoration: none;
  color: #ff3900;
  font-weight: 400;
}

.title-links:hover {
  color: #000000;
}
</style>
