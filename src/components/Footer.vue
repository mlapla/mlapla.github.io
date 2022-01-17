<template lang="html">
  <v-footer
      app
      v-bind="localAttrs"
      :padless="padless"
  >
    <v-card
        flat
        tile
        width="100%"
        class="grey lighten-1 text-center"
    >

      <v-card-text class="white--text">
        Copyright &copy; 2022 Copyright Holder All Rights Reserved. <br>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  components: {
  },
  data: () => ({
    padless: true,
  }),
  computed: {
    localAttrs () {
      const attrs = {}

      if (this.variant === 'default') {
        attrs.absolute = false
        attrs.fixed = false
      } else {
        attrs[this.variant] = true
      }
      return attrs
    },
  },
}
</script>