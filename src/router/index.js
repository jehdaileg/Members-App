import { createRouter, createWebHistory } from "vue-router";
//import Home from "../views/Home.vue";
import Dashboard from "../components/Dashboard.vue";
//import ViewMember from "../components/members/ViewMember.vue";
//import NewMember from "../components/members/NewMember.vue";
//import EditMember from "../components/members/NewMember.vue";


const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },

  {
    path: "/new",
    name: "NewMember",
    component : ()=> import ('../components/members/NewMember.vue'),

  },
  {
    path: "/edit/:member_id",
    name: "EditMember",
    component: ()=> import ('../components/members/EditMember.vue'),

  },

  {
    path: "/:member_id",
    name: "ViewMember",
    component: ()=> import ('../components/members/ViewMember.vue'),

  },


  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
