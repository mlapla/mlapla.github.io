<template>
  <v-app>
    <AppBar/>
    <v-main class="grey lighten-3">
      <v-container class="py-0 fill-height" style="width:50%;max-width:1000px;">
        <v-sheet
          min-height="70vh"
          rounded="lg"
        >
          <router-view/>
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar'
export default {
  name: 'App',
  components: {
    AppBar,
  },
}
</script>

<style>
a {
  text-decoration: none;
  font-family: 'Source Code Pro', monospace;
}

i {
  font-family: FontAwesome;
}

h1, h2, h3, h4, h5 {
  margin: 1em;
  font-family: 'Source Code Pro', monospace;
}
</style>