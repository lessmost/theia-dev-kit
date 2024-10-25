import { ContainerModule, interfaces } from "@theia/core/shared/inversify";
import { EnvVariablesServer } from "@theia/core/lib/common/env-variables/env-variables-protocol";
import { FrontendEnvVariablesServer } from "./browser-only/frontend-env-variables-server";

export default new ContainerModule(
  (
    bind: interfaces.Bind,
    _unbind: interfaces.Unbind,
    isBound: interfaces.IsBound,
    rebind: interfaces.Rebind,
  ) => {
    if (isBound(EnvVariablesServer)) {
      rebind(EnvVariablesServer)
        .to(FrontendEnvVariablesServer)
        .inSingletonScope();
    } else {
      bind(EnvVariablesServer)
        .to(FrontendEnvVariablesServer)
        .inSingletonScope();
    }
  },
);
