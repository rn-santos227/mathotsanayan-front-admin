import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AuthView from "../views/auth/MainView.vue";
import CoursesView from "../views/courses/MainView.vue";
import DashboardView from "../views/dashboard/MainView.vue";
import ModulesView from "../views/modules/MainView.vue";
import ReportsView from "../views/reports/MainView.vue";
import SchoolsView from "../views/schools/MainView.vue";
import SectionsView from "../views/sections/MainView.vue";
import StudentsView from "../views/students/MainView.vue";
import SubjectView from "../views/subjects/MainView.vue";
import TeachersView from "../views/teachers/MainView.vue";
import { useAuthModule } from "@/store";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "dashboard",
    component: DashboardView,
    meta: {
      forAuth: true,
    },
  },

  {
    path: "/courses",
    name: "courses",
    component: CoursesView,
    meta: {
      forAuth: true,
    },
  },

  {
    path: "/modules",
    name: "modules",
    component: ModulesView,
    meta: {
      forAuth: true,
    },
  },

  {
    path: "/reports",
    name: "reports",
    component: ReportsView,
    meta: {
      forAuth: true,
    },
  },

  {
    path: "/schools",
    name: "schools",
    component: SchoolsView,
    meta: {
      forAuth: true,
    },
  },

  {
    path: "/sections",
    name: "sections",
    component: SectionsView,
    meta: {
      forAuth: true,
    },
  },

  {
    path: "/students",
    name: "students",
    component: StudentsView,
    meta: {
      forAuth: true,
    },
  },

  {
    path: "/subjects",
    name: "subjects",
    component: SubjectView,
    meta: {
      forAuth: true,
    },
  },

  {
    path: "/teachers",
    name: "teachers",
    component: TeachersView,
    meta: {
      forAuth: true,
    },
  },

  {
    path: "/login",
    name: "login",
    component: AuthView,
    meta: {
      forVisitors: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthModule();
  if (to.meta.forAuth && !authStore.isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
