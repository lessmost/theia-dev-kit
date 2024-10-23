import { injectable } from "@theia/core/shared/inversify";
import { Plugin } from "@theia/plugin-ext/lib/common/plugin-api-rpc";
import { PluginManagerExtImpl } from "@theia/plugin-ext/lib/plugin/plugin-manager";

@injectable()
export class FrontendPluginManagerExtImpl extends PluginManagerExtImpl {
  protected override getActivationEvents(plugin: Plugin): string[] | undefined {
    if (!plugin.model.entryPoint?.frontend) {
      return undefined;
    }
    const result = plugin.rawModel.activationEvents;
    return Array.isArray(result) ? result : undefined;
  }
}
