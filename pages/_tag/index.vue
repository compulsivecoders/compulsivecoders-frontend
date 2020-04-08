<template>
  <div class="columns">
    <div class="column">
      <Card
        v-for="(post, index) in posts.slice(0,3)"
        :key="index"
        :ratio="randomRatio()"
        :image-src="post.feature_image"
        :title="post.title"
        :excerpt="post.excerpt"
        :main-tag="post.primary_tag.slug"
        :slug="post.slug"
        :date="post.created_at"
      />
    </div>
    <div class="column">
      <Card
        v-for="(post, index) in posts.slice(3,6)"
        :key="index"
        :ratio="randomRatio()"
        :image-src="post.feature_image"
        :title="post.title"
        :excerpt="post.excerpt"
        :main-tag="post.primary_tag.slug"
        :slug="post.slug"
        :date="post.created_at"
      />
    </div>
    <div class="column">
      <Card
        v-for="(post, index) in posts.slice(6,9)"
        :key="index"
        :ratio="randomRatio()"
        :image-src="post.feature_image"
        :title="post.title"
        :excerpt="post.excerpt"
        :main-tag="post.primary_tag.slug"
        :slug="post.slug"
        :date="post.created_at"
      />
    </div>
  </div>
</template>

<script>
import Card from '../../components/commons/Card'

export default {
  components: {
    Card
  },
  asyncData ({ store, params, app: { $axios } }) {
    return $axios.get('/posts', {
      params: {
        include: 'tags',
        filter: 'tag:' + params.tag
      }
    })
      .then((data) => {
        return { posts: data.data.posts }
      })
  },
  methods: {
    randomRatio () {
      const availableRatio = ['is-1by1', 'is-4by3', 'is-4by5']
      const randomIndex = Math.floor(Math.random() * 3)
      return availableRatio[randomIndex]
    }
  }
}
</script>

<style>

</style>
