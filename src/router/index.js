import Vue from 'vue'
import Router from 'vue-router'
import List from "../components/List";
import InsertList from "../components/InsertList";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component:List,
      // children:[
      //   {
      //     path:'/insertList',
      //     name: 'InsertList',
      //     component:InsertList
      //   }
      // ]

    },
    {

      path: '/insertList',
      name: 'insertList',
      component:InsertList
    }
  ]
})
