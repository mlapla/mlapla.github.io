<template>
  <div class="projects">
    <v-card
        max-width="1300px"
        class="d-inline-flex justify-center flex-wrap"
        flat
    >
        <ProjectCard class="card"
                     v-for="item in projects"
                     :key="item.id"
                     :project_data="item"
        />
    </v-card>
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
          'id': '4',
          'title': 'PBR Shading in ThreeJS',
          'link': 'https://github.com/mlapla/threejs-pbr-demo',
          'readmore_link': '/pbr-demo',
          'description': 'An interactive PBR shading demo, ported to ThreeJS.',
          'date': '2022/01/16',
          'thumbnail': 'pbr_thumbnail.png'
        },
        {
          'id': '3',
          'title': 'Tiling shaders in ThreeJS',
          'link': 'https://github.com/mlapla/threejs_shader_tiling',
          'readmore_link': '/tiles',
          'description': 'A simple ThreeJS setup to tile planar shaders. Perfect for testing a large amount of procedural graphics and snippets from ShaderToy.',
          'date': '2021/11/16',
          'thumbnail': 'JULIA2.png'
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
          'id': '1',
          'title': 'Quadtree Compression',
          'link': 'https://github.com/mlapla/png_quadtree_comp',
          'description': 'A simple textbook project where we compress PNGs by approximating regions with a similar color to a uniform color.',
          'date': '2020/08/23',
          'thumbnail': 'png_to_quad.png',
        },
        {
          'id': '0',
          'title': 'Personal Website in VueJS',
          'link': 'https://github.com/mlapla/mlapla.github.io',
          'description': 'A personal portfolio website in VueJS.',
          'date': '2022/01/22',
          'thumbnail': 'vue.png'
        }
      ]
    }
  }
}
</script>

<style scoped>
.projects {
  width: 100%;
  text-align: center;
}
.card {
  padding: 10px;
  margin: 10px;
}
</style>