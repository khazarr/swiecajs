<template>
<div class="main-view">
  <div class="title-container">
      <h1 class="title">
        swieca
          <img class="js-logo img-fluid" src="/JavaScript-logo.png">
      </h1>
    </div>
       <vue-particles
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
      </vue-particles>
</div>

  <!-- <section class="container">
    <div class="title-container">
      <h1 class="title">
        swieca
          <img class="js-logo img-fluid" src="/JavaScript-logo.png">
      </h1>
    </div>
  </section> -->
      

</template>

<script>

export default {
}
</script>

<style>
.main-view {
  display: block;
  max-height: 100vh;
}
.title-container{
  position: absolute;
    bottom: 0;
    top: 0;
    margin: auto;
    width: 500px;
    height: 200px;
    left: 0;
    right: 0;
}
.js-logo {
 height: 150px;
 margin-left: -10px;
 box-shadow: 7px 4px #000;
}

h1 {
  font-family: Roboto;
  position: relative;
}

body {
  /* background-image: url("https://image.ibb.co/j75Tpn/bg.jpg"); */
  /* background-repeat: no-repeat;
  background-size: cover; */
  background: linear-gradient(to top, #136a8a, #267871);
  
  overflow: hidden;
}
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;

  
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 700;
  font-size: 100px;
  color: #fff;
  text-shadow: 8px 8px #000;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>
