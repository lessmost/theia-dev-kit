import { injectable } from "@theia/core/shared/inversify";
import { RPCProtocol } from "@theia/plugin-ext/lib/common/rpc-protocol";
import { HostedPluginSupport } from "@theia/plugin-ext/lib/hosted/browser/hosted-plugin";
import { setUpPluginApi } from "@theia/plugin-ext/lib/main/browser/main-context";
import { PluginHost } from "@theia/plugin-ext/lib/hosted/common/hosted-plugin";
// import { PluginWorker } from "@theia/plugin-ext/lib/hosted/browser/plugin-worker";
import { PluginWorker } from "./frontend-plugin-worker";

@injectable()
export class FrontendHostedPluginSupport extends HostedPluginSupport {
  protected override initRpc(
    _host: PluginHost,
    _pluginId: string,
  ): RPCProtocol {
    // const rpc =
    //   host === "frontend" ? new PluginWorker().rpc : this.createServerRpc(host);
    const rpc = new PluginWorker().rpc;
    setUpPluginApi(rpc, this.container);
    this.mainPluginApiProviders
      .getContributions()
      .forEach((p) => p.initialize(rpc, this.container));
    return rpc;
  }
}
