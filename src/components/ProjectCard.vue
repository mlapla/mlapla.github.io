<template lang="html">
  <v-card
  width="400"
  height="400"
  elevation="3"
  >
    <v-img :src="thumbnail !== undefined ? require('@/assets/thumbnails/' + thumbnail) : 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'"/>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle class="pb-0">{{ date }}</v-card-subtitle>
    <v-card-text class="truncate">
      {{ description }}
    </v-card-text>

    <v-card-actions>
      <v-btn :href="link">
        <i class="fab fa-github"></i>
      </v-btn>
      <v-spacer/>
      <v-btn :href="'/posts/'+id">
        Read More
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: ['title','link','description','date','thumbnail','postLink']
}
</script>

<style lang="css" scoped>
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
