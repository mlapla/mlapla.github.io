<template>
  <div class="home">
    <HelloWorld/>
    <Tweets/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import Tweets from '@/components/Tweets.vue';
export default {
  name: 'Home',
  
  components: {
    HelloWorld,
    Tweets,
  },
};
</script>
