import { createRouter, createWebHistory } from "vue-router";
import Main from "@/views/Main.vue";
import Board from "@/views/Board.vue";
import Overview from "@/views/Overview.vue";
import Settings from "@/views/Settings.vue";
import Login from "@/views/Login.vue";
import Task from "@/views/Task.vue";
import PageNotFound from "@/views/PageNotFound.vue";
import Profil from "@/views/Profil.vue";
import NewTask from "@/views/NewTask.vue";
import Projects from "@/views/Projects.vue";
import Team from "@/views/Team.vue";

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return {
        top: 0,
        behavior: "smooth",
      };
    }
  },
  // linkActiveClass: "bg-gray-900 text-white",
  // linkExactActiveClass: "exact-active",
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: {
        name: "projects",
      },
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
      meta: {
        requireAuth: true,
      },
    },
    {
      path: "/project/:project_id(\\d+)",
      component: Main,
      meta: {
        requireAuth: true,
      },
      children: [
        {
          path: "",
          redirect: {
            name: "board",
          },
        },
        {
          path: "board",
          name: "board",
          component: Board,
        },
        {
          path: "overview",
          name: "overview",
          component: Overview,
        },
        {
          path: "task/:task_id(\\d+)",
          name: "task",
          component: Task,
        },
        {
          path: "new",
          name: "new",
          component: NewTask,
        },
        {
          path: "profil/:user_id?",
          name: "profil",
          component: Profil,
        },
        {
          path: "settings",
          name: "settings",
          component: Settings,
        },
        {
          path: "team",
          name: "team",
          component: Team,
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/404",
      component: PageNotFound,
    },
    // DEFAULT
    {
      path: "/:pathMatch(.*)*",
      component: PageNotFound,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

// router.beforeEach( async (to, from, next) => {
//     const requireAuth = to.matched.some(record => record.meta.requireAuth);
//     if (requireAuth){
//       const loginpath = window.location.pathname;
//       next({ name: 'login'});
//     } else next();

//       if (to.meta.requiresAuth && !auth.isLoggedIn()) {
//         // this route requires auth, check if logged in
//         // if not, redirect to login page.
//         return {
//           path: '/login',
//           // save the location we were at to come back later
//           query: { redirect: to.fullPath },
//         }
//       }

// if (to.name === 'Home' && isAuthenticated) {
//     next({ name: 'Dashboard' })
//   } else next()
// });

export default router;
