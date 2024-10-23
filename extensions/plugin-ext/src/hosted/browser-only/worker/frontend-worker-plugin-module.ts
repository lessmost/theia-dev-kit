import { ContainerModule, interfaces } from "@theia/core/shared/inversify";
import { PluginManagerExtImpl } from "@theia/plugin-ext/lib/plugin/plugin-manager";
import { FrontendPluginManagerExtImpl } from "../../../plugin/frontend-plugin-manager";

export default new ContainerModule(
  (
    bind: interfaces.Bind,
    _unbind: interfaces.Unbind,
    isBound: interfaces.IsBound,
    rebind: interfaces.Rebind,
  ) => {
    if (isBound(PluginManagerExtImpl)) {
      rebind(PluginManagerExtImpl)
        .to(FrontendPluginManagerExtImpl)
        .inSingletonScope();
    } else {
      bind(PluginManagerExtImpl)
        .to(FrontendPluginManagerExtImpl)
        .inSingletonScope();
    }
  },
);
