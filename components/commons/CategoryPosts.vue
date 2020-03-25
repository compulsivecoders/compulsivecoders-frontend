<template>
  <div class="category-posts">
    <SectionTitle title="Posts in same category" />
    <div v-if="posts" class="posts-container">
      <PostLink
        v-for="(post, index) in posts.slice(0,3)"
        :key="index"
        :image-src="post.feature_image"
        :title="post.title"
        :main-tag="post.primary_tag.slug"
        :slug="post.slug"
        :date="post.created_at"
        theme="light"
      />
    </div>
  </div>
</template>

<script>
import PostLink from './PostLink'
import SectionTitle from './SectionTitle'

export default {
  components: { SectionTitle, PostLink },
  props: {
    tag: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    this.$axios.get('posts', {
      params: {
        include: 'tags',
        filter: 'tag:' + this.tag
      }
    })
      .then((data) => {
        this.posts = data.data.posts
      })
  }
}
</script>

<style lang="scss" scoped>
</style>
