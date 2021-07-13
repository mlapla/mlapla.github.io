<template>

  <v-app :theme="theme">
    <AppBar/>
    <v-main>
      <v-container>
        <transition name="fade" mode="out-in">
          <router-view/>
        </transition>
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

/* Page transitions */
.fade-enter-active, .fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity, transform;
  transition-timing-function: ease;
}

.fade-enter, .fade-leave-active {
  transform: translate(1em,0);
  opacity: 0;
}
</style>