import Vue from 'vue'
import VueRouter from 'vue-router'
import staticRoute from "./staticRoute";


Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    //mode: "history",
    routes: staticRoute
});

// 路由跳转前验证(全局守卫)
router.beforeEach((to, from, next) => {
  next();
});

router.afterEach(() => {
  
});

export default router;
