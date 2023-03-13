import {
  RouterHistory,
  createWebHistory,
  createWebHashHistory
} from "vue-router";

export function getHistoryMode(): RouterHistory {
  const routerHistory = import.meta.env.VITE_ROUTER_HISTORY;
  // len=1, only history
  // len=2, history mode with base path
  // see https://next.router.vuejs.org/zh/api/#%E5%8F%82%E6%95%B0-1
  const historyMode = routerHistory.split(",");
  const leftMode = historyMode[0];
  const rightMode = historyMode[1];
  // no param
  if (historyMode.length === 1) {
    if (leftMode === "hash") {
      return createWebHashHistory("");
    } else if (leftMode === "h5") {
      return createWebHistory("");
    }
  } //has param
  else if (historyMode.length === 2) {
    if (leftMode === "hash") {
      return createWebHashHistory(rightMode);
    } else if (leftMode === "h5") {
      return createWebHistory(rightMode);
    }
  }
}

export function loadModuleRoutes(): Array<RouteConfigsTable> {
  // load module routes
  const modules: Record<string, any> = import.meta.glob(
    ["./modules/**/*.ts", "!./modules/**/remaining.ts"],
    {
      eager: true
    }
  );

  const moduleRotes = [];
  Object.keys(modules).forEach(key => {
    moduleRotes.push(modules[key].default);
  });

  moduleRotes.sort((a, b) => {
    return a?.meta?.rank - b?.meta?.rank;
  });

  return moduleRotes;
}
