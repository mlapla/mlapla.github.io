<template>
  <div class="projects">
    <v-flex d-flex>
      <v-layout wrap>
        <v-flex md4
          v-for="item in projects"
          :key="item.id"
        >
          <ProjectCard class="card"
              :title="item.title"
              :link="item.link"
              :description="item.description"
              :date="item.date"
              :thumbnail="item.thumbnail"
          />
        </v-flex>
      </v-layout>
    </v-flex>
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard'

export default {
  name: "Projects",
  components: {
    ProjectCard
  },
  data () {
    return {
      projects: [
        {
          'id': '1',
          'title': 'Quadtree Compression',
          'link': 'https://github.com/mlapla/png_quadtree_comp',
          'description': 'A simple textbook project where we compress PNGs by approximating regions with a similar color to a uniform color.',
          'date': '2020/08/23',
          'thumbnail': 'thumbnail_code.png'
        },
        {},
        {},
        {},
        {},
      ]
    }
  }
}
</script>

<style scoped>
.card {
  padding: 10px;
  margin: 10px;
}
</style>