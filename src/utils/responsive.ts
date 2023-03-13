import { App } from "vue";
import Storage from "responsive-storage";

const nameSpace = "responsive-";

export const injectResponsiveStorage = (app: App, config: ServerConfigs) => {
  const configObj = {
    locale: Storage.getData("locale", nameSpace) ?? {
      locale: config.Locale ?? "zh"
    }
  };

  app.use(Storage, { nameSpace, memory: configObj });
};
