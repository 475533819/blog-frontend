const c1 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "D:\\web_lagou\\task\\lagou\\fed-e-task-03-04\\code\\blog-width-gridsome\\src\\pages\\About.vue")
const c2 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "D:\\web_lagou\\task\\lagou\\fed-e-task-03-04\\code\\blog-width-gridsome\\node_modules\\gridsome\\app\\pages\\404.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "D:\\web_lagou\\task\\lagou\\fed-e-task-03-04\\code\\blog-width-gridsome\\src\\pages\\Index.vue")

export default [
  {
    path: "/about/",
    component: c1
  },
  {
    name: "404",
    path: "/404/",
    component: c2
  },
  {
    name: "home",
    path: "/",
    component: c3
  },
  {
    name: "*",
    path: "*",
    component: c2
  }
]
