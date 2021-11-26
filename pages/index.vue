<template>
  <h1>Home</h1>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'website',

  data() {
    return {
      title: 'Hello Nuxt'
    }
  },

  head(this: any) {
    return {
      title: this.title
    }
  },

  mounted() {
    // this.$axios.$get('/post')
  }
})
</script>
