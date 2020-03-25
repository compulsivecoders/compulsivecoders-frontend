<template>
  <div class="popular-posts">
    <FooterTitle title="Popular posts" />
    <div v-if="posts" class="posts-container">
      <PostLink
        v-for="(post, index) in posts.slice(0,3)"
        :key="index"
        :image-src="post.feature_image"
        :title="post.title"
        :main-tag="post.primary_tag.slug"
        :slug="post.slug"
        :date="post.created_at"
      />
    </div>
  </div>
</template>

<script>
import PostLink from '../../commons/PostLink'
import FooterTitle from './FooterTitle'
export default {
  components: { FooterTitle, PostLink },
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    this.$axios.get('/posts', {
      params: {
        include: 'tags'
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
