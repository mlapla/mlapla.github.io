<template>

  <v-app :theme="theme">
    <AppBar/>
    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import logo from '@/assets/logo.svg'
import AppBar from '@/components/AppBar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  logo,
  components: {
    AppBar,
    Footer
  }
}
</script>

<style>
.v-app-bar-title {
  font-family: 'Source Code Pro', monospace;
}
</style>