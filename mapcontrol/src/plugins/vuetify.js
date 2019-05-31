import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'


Vue.use(Vuetify, {
  theme: {
    primary: '#2E7D32',
    secondary: '#2E7D32',
    accent: '#2E7D32',
    error: '#2E7D32',
    info: '#2E7D32',
    succes: '#2E7D32',
    warning: '#2E7D32',
  }, 
  customProperties: true,
  iconfont: 'md',
})
