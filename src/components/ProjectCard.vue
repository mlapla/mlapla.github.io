<template lang="html">
  <v-card
    class=""
    width="400px"
    elevation="3"
  >
    <template slot="progress">
      <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
      ></v-progress-linear>
    </template>
    <v-container
      width="100%"
      height="55%"
    >
      <v-img

          :aspect-ratio="16/9"
          :src="project_data.thumbnail !== undefined ? require('@/assets/thumbnails/' + project_data.thumbnail) : 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'"
      />
    </v-container>
    <v-card-title class="card-title">{{ project_data.title }}</v-card-title>
    <v-card-subtitle class="pb-0">{{ project_data.date }}</v-card-subtitle>
    <v-card-text class="truncate">
      {{ project_data.description }}
    </v-card-text>

    <v-card-actions>
      <v-btn :href="project_data.link">
        <i class="fab fa-github"></i>
      </v-btn>
      <v-spacer/>
      <v-btn
        v-if="project_data.readmore_link"
        :to="project_data.readmore_link"
        elevation="2"
      >
        Demo
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project_data: {
      type: Object
    }
  }
}
</script>

<style lang="css" scoped>
.fab {
  font-size: large;
}

.card-title {
  font-family: 'Source Code Pro', monospace;
}

.crop-container {
  width: 100%;
  height:220px;
  overflow: hidden;
  margin: 0px;
}

.crop-container v-img {
  display: block;
  width: 100%;
}

.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
