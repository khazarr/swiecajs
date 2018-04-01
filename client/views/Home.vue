<template>
<div class="main-view">
  <div class="title-container">
      <h1 class="title">
        swieca
          <!-- <img class="js-logo img-fluid" src="/JavaScript-logo.png"> -->
      </h1>
      <p>Web Developer</p>
      <TheCube v-if="$mq !== 'mobile'" />
      <TheSocials />
    </div>
       <vue-particles
       class="particles"
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles >
</div>



</template>

<script>
import TheSocials from 'components/TheSocials'
import TheCube from 'components/TheCube'
export default {
  components: {
    TheSocials,
    TheCube
  },
  mounted() {
  },
  computed: {
  }
};
</script>

<style>
.particles {
  height: 100vh;
}
.main-view {
  display: block;
  max-height: 100vh;
}
.title-container {
  position: absolute;
  bottom: 0;
  top: 0;
  margin: auto;
  padding: 40px;
  left: 0;
  right: 0;
  width: 60%;
  height: 60%;
  min-width: 800px;
  max-width: 800px;
  text-align: center;
  max-height: 800px;
  min-height: 600px;
}
.js-logo {
  height: 150px;
  margin-left: -10px;
  box-shadow: 7px 4px #000;
  position: relative;
  top: 40px;
}

h1 {
  font-family: Roboto;
  position: relative;
}

body {
  /* background-image: url("https://image.ibb.co/j75Tpn/bg.jpg"); */
  background-repeat: no-repeat;
  background-size: cover;
  background: linear-gradient(to top, #136a8a, #267871);

  overflow: hidden;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 700;
  font-size: 85px;
  color: #fff;
  text-shadow: 8px 8px #000;
  margin-right: 170px;
  margin-top: 25%;
}

.title-container p {
  color:#d8d8d8;
  text-shadow: 2px 2px #000;
    font-weight: 500;
    margin-top: -20px;
    margin-bottom: 0px;
    font-size: 38px;
}



</style>