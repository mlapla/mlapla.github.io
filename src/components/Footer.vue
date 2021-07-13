<template lang="html">
  <v-footer
      v-bind="localAttrs"
      :padless="padless"
  >
    <v-card
        flat
        tile
        width="100%"
        class="grey lighten-1 text-center"
    >
      <Contact/>
      <v-card-text class="white--text">
        Copyright &copy; 2021 Copyright Holder All Rights Reserved. <br>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import Contact from '@/components/Contact.vue'
export default {
  name: 'Footer',
  components: {
    Contact
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