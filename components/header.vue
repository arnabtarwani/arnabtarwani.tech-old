<template>
  <div class="nav-buttons text-center" style="margin-top: 5vh;">
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
    <!-- <nuxt-link to="/">
      <b-button id="about" variant="outline-primary">home</b-button>
    </nuxt-link>-->
    <nuxt-link to="/about">
      <b-button id="about" variant="outline-primary">about</b-button>
    </nuxt-link>
    <nuxt-link to="/blog">
      <b-button id="about" variant="outline-primary">blog</b-button>
    </nuxt-link>
    <nuxt-link to="/projects">
      <b-button id="about" variant="outline-primary">portfolio</b-button>
    </nuxt-link>
    <nuxt-link to="/resume">
      <b-button id="about" variant="outline-primary">resume</b-button>
    </nuxt-link>
    <div style="font-size: 1em; color:#ff3900; margin-top: 0.2vh;">
      <font-awesome-icon :icon="['fas', 'long-arrow-alt-left']" />
      <nuxt-link to="/" style="color: #ff3900; text-decoration: none;">back to homepage</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  loading: {
    color: 'blue',
    height: '5px'
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&display=swap');
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;
  margin-right: calc(-1 * (100vw - 100%));
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.nav-buttons {
  font-family: 'Poppins', sans-serif;
}
</style>
