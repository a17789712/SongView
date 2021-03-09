import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from "vue-router";
import InsertList from './InsertList'
Vue.use(Router);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  routes:[{
    path:'/insertList',
    name:'insertList',
    component:InsertList
  }
  ]

})


