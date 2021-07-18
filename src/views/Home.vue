<template>
  <div class="home">
    <Banner/>
    <Projects id="projects"/>
    <About id="about"/>
    <Tweets/>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import About from '@/components/About';
import Projects from '@/components/Projects';
import Tweets from '@/components/Tweets.vue';
import Banner from "@/components/Banner";
export default {
  name: 'Home',
  components: {
    Banner,
    Projects,
    About,
    Footer,
    Tweets,
  },
};
</script>
