<template lang="html">
  <v-card
   width="400"
   height="400"
   elevation="2"
 >
   <v-img
     :src="thumbnail !== undefined ? require('@/assets/thumbnails/' + thumbnail) : 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'"
   >
     <v-card-title>{{ title }}</v-card-title>
   </v-img>

   <v-card-subtitle class="pb-0">{{ date }}</v-card-subtitle>

   <v-card-text>
     {{ description }}
   </v-card-text>

   <v-card-actions>
     <v-btn>Share</v-btn>
     <v-btn :href="link">
       <i class="fab fa-github"></i>
     </v-btn>
   </v-card-actions>
 </v-card>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: ['title','link','description','date','thumbnail']
}
</script>

<style lang="css" scoped>
.v-card-title {
  color: white;
}
</style>
