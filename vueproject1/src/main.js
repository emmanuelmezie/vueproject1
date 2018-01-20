import Vue from 'vue'
//import App from './App.vue'
import Rating from './components/Rating'

new Vue({
  el: '#app',
  template:'<Rating :grade="3"/>',
  components: { Rating },
  //render: h => h(App)
})
