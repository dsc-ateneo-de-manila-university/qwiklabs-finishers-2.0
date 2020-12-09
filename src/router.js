import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("./pages/Home.vue")
    },
    {
      path: "/quests",
      component: () => import("./pages/Quests.vue")
    },
    {
      path: "/quests/:id",
      component: () => import("./pages/QuestsViewMore.vue")
    },
    {
      path: "/finishers",
      component: () => import("./pages/Finishers.vue")
    },
    {
      path: "/finishers/:id",
      component: () => import("./pages/FinishersViewMore.vue")
    },
    {
      path: "/register",
      component: () => import("./pages/Register.vue")
    },
    {
      path: "/admin",
      component: () => import("./pages/Admin.vue")
    },
    {
      path: "/admin/:id",
      component: () => import("./pages/AdminCourse.vue")
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


export default router;