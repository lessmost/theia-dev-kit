import { Event } from "@theia/core";
import { ContainerModule, interfaces } from "@theia/core/shared/inversify";
import { ShellTerminalServerProxy } from "@theia/terminal/lib/common/shell-terminal-protocol";
import { FrontendShellTerminalServer } from "./browser-only/frontend-shell-terminal-server";

export default new ContainerModule(
  (
    bind: interfaces.Bind,
    _unbind: interfaces.Unbind,
    _isBound: interfaces.IsBound,
    rebind: interfaces.Rebind,
  ) => {
    bind(FrontendShellTerminalServer).toSelf().inSingletonScope();
    rebind(ShellTerminalServerProxy)
      .toDynamicValue((context) => {
        const server = context.container.get(FrontendShellTerminalServer);
        console.debug("Rebinding ShellTerminalServerProxy", server);
        return Object.assign(Object.create(server), {
          onDidOpenConnection: Event.None,
          onDidCloseConnection: Event.None,
        });
      })
      .inSingletonScope();
  },
);
