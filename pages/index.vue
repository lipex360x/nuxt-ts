<template>
  <section>
    <h1>{{ title }}</h1>
    <h3>{{ content }}</h3>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

function sleep(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time))
}

export default Vue.extend({
  layout: 'website',

  async asyncData() {
    await sleep(1500)

    const title = 'Hello Nuxt'
    const content = 'Nuxt Content'

    console.log('async return')

    return { title, content }
  },

  data() {
    return {
      title: '',
      content: ''
    }
  },

  head(this: any) {
    return {
      title: this.title
    }
  },

  async created() {

  },

  mounted() {
    // this.$axios.$get('/post')
  }
})
</script>
