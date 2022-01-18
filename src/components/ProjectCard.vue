<template lang="html">
  <v-card
  width="400"
  elevation="3"
  >
  <div class="crop-container">
    <v-img
        :src="project_data.thumbnail !== undefined ? require('@/assets/thumbnails/' + project_data.thumbnail) : 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'"
    />
  </div>
    <v-card-title>{{ project_data.title }}</v-card-title>
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
        :to=" project_data.readmore_link !== undefined ? project_data.readmore_link : '/posts/'+project_data.id+'.md'"
        elevation="2"
      >
        Read More
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
