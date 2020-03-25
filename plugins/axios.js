export default function ({ $axios, redirect }) {
  $axios.onRequest((config) => {
    config.params = {
      ...config.params,
      key: process.env.apiKey || process.env.API_KEY
    }
  })
}
