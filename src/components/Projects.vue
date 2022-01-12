<template>
  <div class="projects">
    <v-flex d-flex>
      <v-layout wrap>
        <v-flex md4
          v-for="item in projects"
          :key="item.id"
        >
          <ProjectCard class="card"
              :id="item.id"
              :title="item.title"
              :github_link="item.link"
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
          'thumbnail': 'png_to_quad.png',
        },
        {
          'id': '2',
          'title': 'Simple Schrodinger solver',
          'link': 'https://github.com/mlapla/simple_schrod_solver',
          'description': 'A simple time-independent Schroëdinger equation solver based on the numerov approximation. This is a Python reimplementation of Nouredine Zetili\'s Quantum Mechanics: Concepts and Applications original C implementation.',
          'date': '2020/09/03',
          'thumbnail': 'thumbnail_code.png'
        },
        {
          'id': '3',
          'title': 'Tiling shaders in ThreeJS',
          'link': 'https://github.com/mlapla/threejs_shader_tiling',
          'description': 'A simple ThreeJS setup to tile planar shaders. Perfect for testing a large amount of procedural graphics and snippets from ShaderToy.',
          'date': '2021/11/16',
          'thumbnail': 'thumbnail_code.png'
        },
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