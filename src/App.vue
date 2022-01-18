<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
body, html{
  margin:0;
  padding:0;
}

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