export default function ({ $axios, redirect }) {
  $axios.onRequest((config) => {
    config.params = {
      'key': '23b3f708eb1484502a4168f5e3'
    }
  })
}
