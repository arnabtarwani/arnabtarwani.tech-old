<template>
  <div class="container">
    <!-- Global site tag (gtag.js) - Google Analytics -->
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-145293740-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-145293740-1');
</script>

    <vue-typer text="Hello World! I was registered locally!"></vue-typer>
    <div class="navbar">
    </div>
    <!-- <div class="nav-items">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-navbar toggleable="lg" variant="faded" type="dark">
        <b-collapse id="nav-collapse" is-nav>
          <b-nav-item>
            <nuxt-link to="/about">about</nuxt-link></b-nav-item>
          <b-nav-item>
            <nuxt-link to="/blog">blog</nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link to="/projects">projects</nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link to="/contact">contact</nuxt-link>
          </b-nav-item>
        </b-collapse>
      </b-navbar>
    </div>-->
    <div class="profile-card">
      <p style="font-size: 2em;">
        hi, welcome!
        <span class="wave">🖐</span>
      </p>
      <p style="font-size: 2em; margin-top: 3vh;">
        i'm
        <b style="color:#FF3900;font-weight:500;">arnab tarwani</b>, a data
        scientist with an immense passion for data. also, a web enthusiast and a developer in
        the making.
      </p>
    </div>
    <div class="social text-left" style="margin-top: 5vh;">
      <p>
        follow me on
        <img src="~assets/arrow.png" alt="arrow" style="width: 25px;" />
      </p>
      <a href="https://medium.com/@arnab.tarwani">
        <img src="~assets/medium-color.png" alt="Medium" />
      </a>
      <a href="https://github.com/arnabtarwani">
        <img src="~assets/github (1).png" alt="Github" />
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
    <div class="nav-buttons text-left">
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
    </div>
    <p id="copyright">copyright © {{new Date().getFullYear()}}. made with ❣️ and NuxtJS.</p>
    <nuxt />
  </div>
</template>

<script>
export default {
  loading: true
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&display=swap');

/* width */
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #83818111;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #ff3000;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b92200;
  border-radius: 10px;
}

.container {
  display: block;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  text-align: center;
  -webkit-filter: blur(1);
}

.navbar {
  text-align: center;
  min-height: 23vh;
  justify-content: center;
  align-items: center;
  text-align: center;
}

/* .nav-items {
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  list-style: none;
  color: #ff370075;
  font-size: 2em;
} */

.nav-buttons {
  margin-top: 5vh;
}

.profile-card {
  text-align: left;
  justify-content: center;
  align-content: center;
  width: 58%;
  font-feature-settings: 'abvs';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-shadow: 10px #000;
  /* box-shadow: 0.2px 3px 5px rgba(0, 0, 0, 0.19),
    0px 0.5px 0.5px rgba(0, 0, 0, 0.23); */
}

.profile-text {
  box-shadow: 0.2px 3px 5px rgba(0, 0, 0, 0.19),
    0px 0.5px 0.5px rgba(0, 0, 0, 0.23);
}

.social {
  font-size: 2em;
}

.social p {
  margin-bottom: 3px;
}

.social img {
  width: 40px;
  padding-right: 10px;
  margin-right: 15px;
}

/* .social img:hover {
  filter: brightness(75%) sepia(10) saturate(80) hue-rotate(10.5deg)
    opacity(85.2%);
} */

#logo {
  width: 300px;
  text-align: center;
}

#about {
  border-color: #ff3000;
  color: #ff3000;
  margin-right: 17px;
  margin-bottom: 10px;
}

#about::after {
  border-color: #ff3000;
  background: #ff3000;
  color: #ffffff;
}

#about:hover {
  color: #ffffff;
  background: #ff3000;
}

#copyright {
  text-align: left;
  margin-top: 10vh;
  font-size: 1.1em;
}

span.wave {
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
}

span.wave:hover {
  cursor: pointer;
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(-10deg);
  }
  20% {
    transform: rotate(12deg);
  }
  30% {
    transform: rotate(-10deg);
  }
  40% {
    transform: rotate(9deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@media screen and (max-width: 480px) {
  .profile-card {
    text-align: left;
    width: 100%;
    font-size: 0.7em;
  }

  .social {
    font-size: 1.5em;
  }

  .social p {
    margin-bottom: 2px;
  }

  .social img {
    width: 30px;
    margin-right: 10px;
  }

  .nav-buttons {
    margin-top: 2.5vh;
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
