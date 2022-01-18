<template>
  <div ref="container" id="container"></div>
</template>

<script>
import { init, mainLoop, showGUI, hideGUI } from '@/components/PBRDemo/PBR.js';
export default {
  methods: {
    animate() {
      console.log('animating');
      mainLoop();
    },
  },
  watch:{
    $route (to, from){
      hideGUI();
    }
  },
  mounted() {
    document.querySelector('#container').appendChild(init().domElement);
    this.animate();
    showGUI();
    console.log('terminating?');
  },
  name: "PBRDemo"
}
</script>

<style scoped>
div, canvas {
  padding: 0em;
  margin: 0em;
}
</style>