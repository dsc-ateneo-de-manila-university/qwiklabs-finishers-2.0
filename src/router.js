import Vue from "vue";
import Router from "vue-router";

import firebase from "firebase";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name:'Home',
      component: () => import("./pages/Home.vue")
    },
    {
      path: "/quests",
      name:'Quests',
      component: () => import("./pages/Quests.vue")
    },
    {
      path: "/quests/:index",
      name:'QuestsViewMore',
      component: () => import("./pages/QuestsViewMore.vue")
    },
    {
      path: "/finishers",
      name:'Finishers',
      component: () => import("./pages/Finishers.vue")
    },
    {
      path: "/finishers/:id",
      name:'FinishersViewMore',
      component: () => import("./pages/FinishersViewMore.vue")
    },
    {
      path: "/register",
      name:'Register',
      component: () => import("./pages/Register.vue")
    },
    {
      path: "/admin",
      name:'Admin',
      component: () => import("./pages/Admin.vue"),
      meta:{
        requiresAuth:true,
      }
    },
    {
      path: "/admin/:index",
      component: () => import("./pages/AdminCourse.vue"),
      meta:{
        requiresAuth:true,
      }
    },
    {
      path: "*",
      component: () => import("./pages/NotFound.vue")
    }
  ],
  scrollBehavior: function(to) {
    if (to.hash) {
      return {
        selector: to.hash,
        offset: { x: 0, y: 60 }
      };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

router.beforeEach((to,from,next)=>{
  if(to.matched.some(record=>record.meta.requiresAuth)){
    if(!firebase.auth.currentUser){
      next({
        path:'/',
        query:{
          redirect:to.fullPath
        }
      })
    }else{
      next();
    }
  }else{
    next();
  }
})
export default router;