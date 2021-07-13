<template lang="html">
  <div class="tweets">
    <v-card
        class="mx-auto"
        max-width="400"
    >
      <a  class="twitter-timeline"
          href="https://twitter.com/mikeLapla?ref_src=twsrc%5Etfw"
          data-tweet-limit="2"
      >Tweets by mikeLapla</a>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Tweets'
}
</script>

<style lang="css" scoped>
.tweets {
  height: 400px;
  margin-bottom: 5em;
}
</style>