<template>
  <div class="about" >
    <h2 class="text-center">About</h2>
    <v-container>
      <v-row>
        <v-col>
          <Contact/>
        </v-col>
        <v-col>
          <p>
            Hi, I'm Michael. Welcome to my personal website. This site's purpose is to gather my learnings through my progress in mathematical physics and computer science while also acting as a portfolio. Hence, it gathers projects and personal toughts mostly about cosmology, number theory, algorithms and other varieties.
          </p>
          <p>
            You can always reach me via the contact information at the bottom of the page about anything. I'll always be happy to chat about science or answer questions on content I posted.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Contact from '@/components/Contact'
export default {
  name: 'About',
  components: {
    Contact
  }
}
</script>
