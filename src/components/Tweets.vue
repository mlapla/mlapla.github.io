<template lang="html">
  <v-flex class="tweets">
    <v-card>
            <a  class="twitter-timeline"
                href="https://twitter.com/mikeLapla?ref_src=twsrc%5Etfw"
                data-tweet-limit="2"
            >Tweets by mikeLapla</a>
          </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'Tweets'
}
</script>

<style lang="css" scoped>
.tweets {
  width: 60%;
}
</style>