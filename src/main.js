// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VueRouter from 'vue-router';
import router from './router'
//import router file all contents
// import routers from './router'
// import Routers from './router/index.js';

import App1 from './App.vue'
// import App1 from './App'

// import store from './store'  //Vuex 状态管理


//iview use
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

// Vue.use(VueRouter);
Vue.config.productionTip = false
// The routing configuration
// const RouterConfig = {
//   routes: Routers,
// };
// const router = new VueRouter(RouterConfig);


/* eslint-disable no-new */
new Vue({
  // el: '#app',  //out of index.html 
  router,//index.js路由
  
  // components: { App1 },
  // render:h => h(App1),
  render:function(createElement){//entry
          return createElement(App1)
        }
  // template: '<App1/>'   //vue外层  标签 可忽略
}).$mount('#app')

// new Vue({
//   router,
//   // store,
//   render: h => h(App1)
// }).$mount('#app')

