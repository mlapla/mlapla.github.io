<template lang="html">
  <v-container id="tweets">
    <v-card>
      <a  class="twitter-timeline"
          href="https://twitter.com/mikeLapla?ref_src=twsrc%5Etfw"
          data-tweet-limit="3"
      >Tweets by mikeLapla</a>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Tweets'
}
</script>

<style lang="css" scoped>
#tweets {
  width: 60%;
  max-width: 500px;
}
</style>