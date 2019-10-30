<template>
  <div class="container">
    <Header />
    <div class="navbar"></div>
    <h3 style="margin-left: -35px;">the page is not ready yet!</h3>
    <div class="social text-center" style="margin-top: 1vh;">
      <p>
        meanwhile, follow me on
        <img src="~assets/arrow.png" alt="arrow" style="width: 25px;" />
      </p>
      <a href="https://medium.com/@arnab.tarwani">
        <img src="~assets/medium-color.png" alt="Medium" />
      </a>
      <a href="https://github.com/arnabtarwani">
        <img src="~assets/github-logo.png" alt="Github" />
      </a>
      <a href="https://www.linkedin.com/in/arnabtarwani/">
        <img src="~assets/linkedin-logo (2).png" alt="LinkedIn" />
      </a>
      <a href="https://twitter.com/arnabtarwani">
        <img src="~assets/twitter (1).png" alt="Twitter" />
      </a>
      <a href="https://instagram.com/arnabtarwani">
        <img src="~assets/instagram.png" alt="Instagram" />
      </a>
      <a href="mailto:arnab.tarwani@ucdconnect.ie">
        <img src="~assets/email.png" alt="Email" />
      </a>
    </div>
    <nuxt />
  </div>
</template>

<script>
import Header from '~/components/header.vue'
export default {
  layout: 'default',
  components: {
    Header
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&display=swap');

.container {
  display: block;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  text-align: center;
}

.social {
  text-align: center;
  font-size: 1.5em;
}

.social p {
  margin-bottom: 10px;
}

.social img {
  text-align: center;
  width: 40px;
  padding-right: 10px;
  margin-right: 15px;
}

.navbar {
  text-align: center;
  min-height: 28vh;
  justify-content: center;
  align-items: center;
  text-align: center;
}

@media screen and (max-width: 480px) {
  h3 {
    text-align: center;
    font-size: 1.5em;
    font-weight: 600;
    padding-left: 20px;
  }

  .profile-card {
    text-align: center;
    font-size: 0.7em;
  }

  .social {
    font-size: 1.3em;
  }

  .social p {
    margin-bottom: 2px;
  }

  .social img {
    width: 30px;
    margin-right: 10px;
  }

  #logo {
    width: 200px;
  }

  #copyright {
    margin-top: 8vh;
    text-align: left;
    font-size: 1em;
  }

  #about {
    text-align: left;
    margin: 5px auto;
  }
}
</style>
