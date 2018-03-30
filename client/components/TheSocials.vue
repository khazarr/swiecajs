<template>
<div>
  <SocialImg 
    v-for="img in getSocialImages"
    :key="img.name"
    :imgSrc="img.src"
    :url="img.url"
    :name="img.name"
    class="socials"
  />
</div>
</template>

<script>
import SocialImg from './SocialImg'
import { mapGetters } from 'vuex'
export default {
  components: {
    SocialImg
  },
  computed: {
    ...mapGetters([
      'getSocialImages',
    ])
  }
}
</script>

<style scoped>
 .socials {
   display: inline-flex
 }
</style>
