const { createApp, ref } = Vue

createApp({
  setup() {
    const message = ref('Hello vue by Suber-IQ!')
    return {
      message
    }
  }
}).mount('#app');