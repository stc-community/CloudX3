import NProgress from "@/utils/progress";
import { Router, createRouter } from "vue-router";
import { getHistoryMode, loadModuleRoutes } from "./utils";
const Layout = () => import("@/layout/index.vue");
import { site } from "@/config/site";

const moduleRotes = loadModuleRoutes();

const routes = [
  {
    path: "/",
    name: "Home",
    component: Layout,
    redirect: "/welcome",
    meta: {
      icon: "homeFilled",
      title: "Home"
    },
    children: [
      ...moduleRotes,
      {
        path: "/:pathMatch(.*)*",
        name: "404 not found",
        component: () => import("@/views/404.vue"),
        meta: {
          title: "404 not found"
        }
      }
    ]
  }
];

/** 创建路由实例 */
export const router: Router = createRouter({
  history: getHistoryMode(),
  routes: routes,
  strict: true,
  scrollBehavior(to, from, savedPosition) {
    return new Promise(resolve => {
      if (savedPosition) {
        return savedPosition;
      } else {
        if (from.meta.saveSrollTop) {
          const top: number =
            document.documentElement.scrollTop || document.body.scrollTop;
          resolve({ left: 0, top });
        }
      }
    });
  }
});

router.beforeEach((to: toRouteType, _from, next) => {
  NProgress.start();
  window.document.title = site.name;
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
