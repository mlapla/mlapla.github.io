<template>
    <div ref="container" id="container"></div>
</template>

<script>
import { init, getStats, main } from '@/components/TilingShaders/threejs-tiling-shaders';
export default {
  methods: {
    animate() {
      main()
    }
  },
  mounted() {
    document.querySelector('#container').appendChild(init().domElement);
    document.querySelector('#container').appendChild(getStats());
    this.animate()
  },
  name: "TilingShaders"
}
</script>

<style scoped>
</style>