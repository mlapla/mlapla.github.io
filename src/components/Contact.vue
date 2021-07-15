<template lang="html">
  <div class="contact">
    <ul>
      <li>
        <a class="social-media-link" href="mailto:laplante.michael@hotmail.com">
          <i class="fas fa-envelope"></i>
          laplante.michael@hotmail.com
        </a>
      </li>
      <li>
        <a class="social-media-link" href="https://github.com/mlapla">
          <i class="fab fa-github"></i>
          mlapla
        </a>
      </li>
      <li>
        <a class="social-media-link" href="https://twitter.com/mikeLapla">
          <i class="fab fa-twitter"></i>
          mikeLapla
        </a>
      </li>
      <li>
        <a class="social-media-link" href="https://ko-fi.com/mlapla">
          <i class="fas fa-coffee"></i>
          mlapla
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style lang="css" scoped>
ul {
  list-style-type: none;
  text-align: right;
}
.fas, .fab {
  padding: 5px;
  color: black;
}
.fas:hover, .fab:hover {
  transform: scale(1.1)
}
</style>