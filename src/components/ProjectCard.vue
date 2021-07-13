<template lang="html">
  <v-card
   class="mx-auto"
   max-width="400"
 >
   <v-img
     class="white--text align-end"
     height="200px"
     :src="thumbnail ? thumbnail : 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'"
   >
     <v-card-title>{{ title }}</v-card-title>
   </v-img>

   <v-card-subtitle class="pb-0">{{ date }}</v-card-subtitle>

   <v-card-text class="text--primary">
     {{ description }}
   </v-card-text>

   <v-card-actions>
     <v-btn
       color="primary"
       text
     >
       Share
     </v-btn>

     <v-btn
       color="primary"
       text
       :href="link"
     >
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
</style>
