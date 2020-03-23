export default function ({ $axios, redirect }) {
  $axios.onRequest((config) => {
    config.params = {
      key: process.env.API_KEY
    }
  })
}
