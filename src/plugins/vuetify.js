import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/lib/styles/main.sass'
import * as components from 'vuetify/lib/components'
import * as directives from 'vuetify/lib/directives'
import { createVuetify } from 'vuetify'

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'myCustomLightTheme',
  }
})
