import Layout from '@/views/layout/Layout'
import vue from './vue.config'
const vueRouter =   {
  path:'/vue',
  component:Layout,
  redirect:'/vue/module',
  name:'Vue',
  meta:{title:'Vue',icon:'example'},
  children:[
    {
      path:'module',
      name:'module',
      component:() => import('@/views/vue/module/index'),
      meta:{title:'module'}
    },
  ]

 }
//  const load = function(path){
//   //  return LOAD_MAP(path);
//   return r = require.ensure([],() => r(require('@/views/vue/module/index')))
//  }
//  const LOAD_MAP = function(path){
  
//  }
 const moduleRouter = (vue) => {
   console.log(vue);
   vue.forEach(element => {
     console.log(element);
     vueRouter.children.push({
       path:element,
       name:element,
       component:() => import(`@/views/vue/packages/${element}/index`),
       meta:{title:element}
     })
   });
   console.log(vueRouter.children);
 }

 moduleRouter(vue);
 export default vueRouter