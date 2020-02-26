<template>
  <div class="columns">
    <div class="column is-8-desktop is-12-tablet">
      <div class="post-section">
        <span v-html="post.html" />
      </div>
    </div>
  </div>
</template>

<script>
import 'highlight.js/styles/dracula.css'

export default {
  asyncData ({ store, params, app: { $axios } }) {
    return $axios.get(`/posts/slug/welcome`)
      .then((data) => {
        return { post: data.data.posts[0] }
      })
  }
}
</script>

<style lang="scss" scoped>
  .post-tag {
    font-family: 'MontserratSemiBold';
    color: #0074D9;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: 0.8rem;
    margin-top: 35px;
    margin-bottom: 15px;
  }

  .post-title {
    font-family: 'MontserratSemiBold';
    font-size: 2.2rem;
    line-height: 2.5rem;
  }

  .post-views {
    font-size: 0.8rem;
    color: #999;
  }

  .post-content {
    overflow-wrap: break-word;

    /deep/ h2 {
      font-family: 'MontserratSemiBold';
      font-size: 1.8rem;
      margin-bottom: 10px;
      margin-top: 10px;
    }

    /deep/ h3 {
      font-family: 'MontserratSemiBold';
      font-size: 1.3rem;
      margin-bottom: 7px;
      margin-top: 7px;
    }

    /deep/ h4 {
      font-family: 'MontserratSemiBold';
      font-size: 1.1rem;
      margin-top: 7px;
    }

    /deep/ pre {
      padding: 7px;
      margin-bottom: 10px;
    }

    /deep/ .image {
      margin: 5%;
      width: 90%;
      figcaption {
        padding: 5px;
        color: #666;
        text-align: center;
        font-size: 0.8rem;
      }
    }

    /deep/ ul {
      list-style-type: circle;
      margin-left: 35px;
    }
  }
</style>
