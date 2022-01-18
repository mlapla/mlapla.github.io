<template>
  <v-app-bar
      app
      color = "white"
  >
    <v-app-bar-title>mllp</v-app-bar-title>
    <v-avatar
        class="mr-10"
        size="40"
    >
      <v-img
          :src="require('@/assets/mllp_logo.png')"
          alt="Logo"
      />
    </v-avatar>
    <v-container class="py-0 fill-height">
<!--      <v-btn to="#projects">Projects</v-btn>-->
<!--      <v-btn to="#about">About</v-btn>-->
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
}
</script>

<style scoped>
.v-app-bar {
  font-family: 'Source Code Pro', monospace;
}
</style>