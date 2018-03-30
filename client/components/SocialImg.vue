<template>
<div>
    <a :href="url">
        <img :src="imgSrc" :alt="name">
    </a>
</div>

</template>

<script>
export default {
  props: ['imgSrc','url','name']
}
</script>

<style scoped>
 img {
    background: rgba(255,255,255,0.9);
    margin: 10px;
    box-shadow: 7px 4px #000;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
 }

 img:hover {
     /* transform: scale(1.2 ) rotate(15deg) rotate(15deg);
     transition: all 0.2s ease-in-out; */
     -webkit-animation: socialsAnimation 1s ; /* Safari 4+ */
  -moz-animation:    socialsAnimation 1s ; /* Fx 5+ */
  -o-animation:      socialsAnimation 1s ; /* Opera 12+ */
  animation:         socialsAnimation 1s ; /* IE 10+, Fx 29+ */
 }

 @keyframes socialsAnimation {
  0%   { transform: rotate(0deg); }
  25% { transform: rotate(10deg); }
  50% { transform: rotate(-10deg); }
  100% { transform: rotate(0deg); }
}
</style>
