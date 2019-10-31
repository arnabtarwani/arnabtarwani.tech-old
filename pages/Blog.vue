<template>
  <div class="container">
    <section class="posts">
      <div v-if="posts == 0" class="column">
        <h3>There are currently no posts available!</h3>
        <h3>Check back in sometime!</h3>
      </div>
      <div v-else>
        <div v-for="post in posts" :key="post.attributes.title" class="columns">
          <div class="date">{{ post.attributes.date }}</div>
          <div>
            <nuxt-link :to="post._path" class="title-links">
              {{ post.attributes.title }}
            </nuxt-link>
          </div>
          <p class="excerpt">
            {{ post.attributes.excerpt }}
            <nuxt-link :to="post._path" class="title-links"
              >read more</nuxt-link
            >
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData() {
    const context = await require.context('~/content/', true, /\.md$/)
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
  margin-top: 5vh;
}

.columns {
  text-align: justify;
}

.date {
  font-size: 0.5em;
  margin: 0px auto;
}

.excerpt {
  font-size: 0.6em;
  margin: 0px auto;
}

.posts {
  font-size: 2.2em;
  text-decoration: none;
}

.title-links {
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  color: #ff3900;
  font-weight: 450;
}

.title-links:hover {
  color: #000000;
}

@media (max-width: 767px) {
  .container {
    margin-top: 2vh;
    text-align: justify;
  }

  .markdown-body {
    padding: 15px;
  }

  .posts {
    font-size: 1.5em;
    text-decoration: none;
  }
}
</style>
