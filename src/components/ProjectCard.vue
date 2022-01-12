<template lang="html">
  <v-card
  width="400"
  height="400"
  elevation="3"
  >
  <div class="crop-container">
    <v-img
        :src="thumbnail !== undefined ? require('@/assets/thumbnails/' + thumbnail) : 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'"
    />
  </div>
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
      <v-btn
        :href="'/posts/'+id+'.md'"
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
  props: ['id','title','link','description','date','thumbnail']
}
</script>

<style lang="css" scoped>
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
