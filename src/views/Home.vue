<template>
  <div class="home">
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
export default {
  name: 'Home',
  
  components: {
    Projects,
    About,
    Footer,
    Tweets,
  },
};
</script>
