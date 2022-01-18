<template>
  <AppBar/>
  <v-main class="grey lighten-3">
    <v-container class="py-0 fill-height" style="min-width:500px;">
      <v-sheet
          min-height="70vh"
          rounded="lg"
      >
        <Banner/>
        <Projects id="projects"/>
        <About id="about"/>
        <Tweets/>
        <Footer/>
      </v-sheet>
    </v-container>
  </v-main>
</template>

<script>
import Footer from '@/components/Footer'
import About from '@/components/About';
import Projects from '@/components/Projects';
import Tweets from '@/components/Tweets.vue';
import Banner from "@/components/Banner";
import AppBar from "@/components/AppBar";
export default {
  name: 'Home',
  components: {
    AppBar,
    Banner,
    Projects,
    About,
    Footer,
    Tweets,
  },
};
</script>
