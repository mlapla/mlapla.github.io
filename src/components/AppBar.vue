<template>
  <v-app-bar
      app
      color="primary"
      flat
  >
    <v-container class="py-0 fill-height">
      <v-avatar
          class="mr-10"
          color="white"
          size="32"
      >
        <v-img
            :src="require('@/assets/mllp_logo.png')"
            alt="Logo"
        />
      </v-avatar>

      <v-btn to="/">Home</v-btn>
      <v-btn to="/projects"></v-btn>
      <v-btn to="/about">About</v-btn>

      <v-spacer></v-spacer>

      <v-switch
          v-model="$vuetify.theme.dark"
          color="secondary"
          :label="$vuetify.theme.dark ? 'Light Mode' : 'Dark Mode'"
          inset
      />
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar"
}
</script>

<style scoped>

</style>