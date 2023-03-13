import dayjs from "dayjs";
import { resolve } from "path";
import pkg from "./package.json";
import { warpperEnv } from "./build";
import { getPluginsList } from "./build/plugins";
import { include, exclude } from "./build/optimize";
import { UserConfigExport, ConfigEnv, loadEnv } from "vite";

const root: string = process.cwd();

const pathResolve = (dir: string): string => {
  return resolve(__dirname, ".", dir);
};

const alias: Record<string, string> = {
  "@": pathResolve("src"),
  "@build": pathResolve("build")
};

const { dependencies, devDependencies, name, version } = pkg;
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss")
};

export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const { VITE_PORT, VITE_PUBLIC_PATH } = warpperEnv(loadEnv(mode, root));
  return {
    base: VITE_PUBLIC_PATH,
    root,
    resolve: {
      alias
    },

    server: {
      https: false,

      port: VITE_PORT,
      host: "0.0.0.0",

      proxy: {}
    },
    plugins: getPluginsList(command),

    optimizeDeps: {
      include,
      exclude
    },
    build: {
      sourcemap: false,

      chunkSizeWarningLimit: 4000,
      rollupOptions: {
        input: {
          index: pathResolve("index.html")
        },

        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]"
        }
      }
    },
    define: {
      __INTLIFY_PROD_DEVTOOLS__: false,
      __APP_INFO__: JSON.stringify(__APP_INFO__)
    }
  };
};
