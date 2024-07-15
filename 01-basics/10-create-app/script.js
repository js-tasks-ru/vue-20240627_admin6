import { defineComponent, createApp } from 'vue/dist/vue.esm-bundler.js'

const App = defineComponent({
  name: 'App',

  setup() {
    return {
    }
  },

  template: `
    <div>Сегодня ${ new Date().toLocaleDateString(navigator.language, { dateStyle: 'long' }) }</div>
  `,
})

const app = createApp(App)

app.mount('#app')
