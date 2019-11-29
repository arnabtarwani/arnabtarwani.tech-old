<template>
  <div class="container">
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-BKZXZ23RN2"></script>
    <script>
  window.dataLayer = window.dataLayer || []
  function gtag() {
    dataLayer.push(arguments)
  }
  gtag('js', new Date())

  gtag('config', 'G-BKZXZ23RN2')
    </script>
    <hr />
    <section class="posts">
      <div v-if="posts == 0" class="column">
        <h3>There are currently no posts available!</h3>
        <h3>Check back in sometime!</h3>
      </div>
      <div v-else>
        <div v-for="post in posts" :key="post.attributes.title" class="columns">
          <div>
            <nuxt-link :to="post._path" class="title-links">{{ post.attributes.title }}</nuxt-link>
            <div class="date">{{ post.attributes.date }}</div>
          </div>
          <p class="excerpt">
            {{ post.attributes.excerpt }}
            <nuxt-link :to="post._path" class="title-links">read more</nuxt-link>
          </p>
          <hr />
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
@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&display=swap');

.container {
  margin-top: 0vh;
  font-family: 'Poppins', sans-serif;
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
  text-align: end;
}

.title-links:hover {
  color: #b92200;
}

@media (max-width: 767px) {
  .container {
    margin-top: 4vh;
    text-align: left;
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
