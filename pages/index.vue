<template>
  <section>
    <h1>{{ title }}</h1>
    <h3>{{ content }}</h3>
    <div class="count">
      {{ $count }}
      <button @click="increment">Increment</button>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'

function sleep(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time))
}

export default Vue.extend({
  layout: 'website',

  async asyncData() {
    await sleep(1500)

    const title = 'Hello Nuxt'
    const content = 'Nuxt Content'

    console.log('async SSR return')

    books.index()

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

  computed:{
    $count() {
      return books.$count
    }
  },

  methods: {
    increment() {
      books.increment(1)
    }
  }
})
</script>
