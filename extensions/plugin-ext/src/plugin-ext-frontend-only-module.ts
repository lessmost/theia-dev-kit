import { ContainerModule, interfaces } from "@theia/core/shared/inversify";
import { HostedPluginSupport } from "@theia/plugin-ext/lib/hosted/browser/hosted-plugin";
import {
  HostedPluginServer,
  PluginServer,
} from "@theia/plugin-ext/lib/common/plugin-protocol";
import { PluginPathsService } from "@theia/plugin-ext/lib/main/common/plugin-paths-protocol";
import { LanguagePackService } from "@theia/plugin-ext/lib/common/language-pack-service";
import { FrontendHostedPluginSupport } from "./hosted/browser-only/frontend-hosted-plugin";
import { FrontendHostedPluginServer } from "./hosted/browser-only/frontend-hosted-plugin-server";
import { FrontendPluginServer } from "./hosted/browser-only/frontend-plugin-server";
import { FrontendPluginPathsService } from "./hosted/browser-only/frontend-plugin-path-service";
import { FrontendLanguagePackService } from "./hosted/browser-only/frontend-language-pack-service";

export default new ContainerModule(
  (
    bind: interfaces.Bind,
    _unbind: interfaces.Unbind,
    isBound: interfaces.IsBound,
    rebind: interfaces.Rebind,
  ) => {
    if (isBound(LanguagePackService)) {
      rebind(LanguagePackService)
        .to(FrontendLanguagePackService)
        .inSingletonScope();
    } else {
      bind(LanguagePackService)
        .to(FrontendLanguagePackService)
        .inSingletonScope();
    }
    rebind(HostedPluginSupport)
      .to(FrontendHostedPluginSupport)
      .inSingletonScope();
    rebind(HostedPluginServer)
      .to(FrontendHostedPluginServer)
      .inSingletonScope();
    rebind(PluginServer).to(FrontendPluginServer).inSingletonScope();
    rebind(PluginPathsService)
      .to(FrontendPluginPathsService)
      .inSingletonScope();
  },
);
