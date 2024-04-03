import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'

// import translations
import nl from './locales/nl.json'
import en from './locales/en.json'

// import styles
import './style.css'

// configure i18n
const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'nl',
  messages: { en, nl }
})

// create and start the app
const app = createApp(App)
app.use(i18n)
app.use(router)
app.mount('#app')
