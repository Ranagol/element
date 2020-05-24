import Vue from 'vue'
import ElementUI from 'element-ui';//needed for Element importing
import 'element-ui/lib/theme-chalk/index.css';//needed for Element importing
import App from './App.vue';
import locale from 'element-ui/lib/locale/lang/en'//importing english into Elements


Vue.use(ElementUI, { locale });//ElementUI is needed for Element importing, and with { locale } we import English language
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
