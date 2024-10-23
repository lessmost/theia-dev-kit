import { Event, RpcConnectionEventEmitter } from "@theia/core";
import { injectable } from "@theia/core/shared/inversify";
import { ExtPluginApi } from "@theia/plugin-ext";
import {
  DeployedPlugin,
  GetDeployedPluginsParams,
  HostedPluginClient,
  HostedPluginServer,
  PluginIdentifiers,
} from "@theia/plugin-ext/lib/common/plugin-protocol";
import VSCodeSql from "../../manifest/backend/vscode.sql@1.88.1.json";
import VSCodeJavascript from "../../manifest/backend/vscode.javascript@1.88.1.json";
import VSCodeTypescript from "../../manifest/backend/vscode.typescript@1.88.1.json";
import VSCodePython from "../../manifest/backend/vscode.python@1.88.1.json";
import VSCodeJsonLanguageFeatures from "../../manifest/frontend/vscode.json-language-features@1.88.1.json";
import VSCodeTypescriptLanguageFeatures from "../../manifest/frontend/vscode.typescript-language-features@1.88.1.json";

@injectable()
export class FrontendHostedPluginServer
  implements HostedPluginServer, RpcConnectionEventEmitter
{
  readonly onDidOpenConnection: Event<void> = Event.None;
  readonly onDidCloseConnection: Event<void> = Event.None;

  async getDeployedPluginIds(): Promise<PluginIdentifiers.VersionedId[]> {
    return [
      "vscode.sql@1.88.1",
      "vscode.javascript@1.88.1",
      "vscode.typescript@1.88.1",
      "vscode.python@1.88.1",
      "vscode.json-language-features@1.77.0",
      "vscode.typescript-language-features@1.88.1",
    ];
  }

  async getUninstalledPluginIds(): Promise<
    readonly PluginIdentifiers.VersionedId[]
  > {
    return [];
  }

  async getDeployedPlugins(
    _params: GetDeployedPluginsParams,
  ): Promise<DeployedPlugin[]> {
    return [
      VSCodeSql as DeployedPlugin,
      // @ts-ignore types
      VSCodeJavascript as DeployedPlugin,
      VSCodeTypescript as DeployedPlugin,
      // @ts-ignore types
      VSCodePython as DeployedPlugin,
      VSCodeJsonLanguageFeatures as DeployedPlugin,
      VSCodeTypescriptLanguageFeatures as DeployedPlugin,
    ];
  }

  async getExtPluginAPI(): Promise<ExtPluginApi[]> {
    return [];
  }

  onMessage(_targetHost: string, _message: Uint8Array): Promise<void> {
    throw new Error("Method not implemented.");
  }

  dispose(): void {
    throw new Error("Method not implemented.");
  }

  setClient(_client: HostedPluginClient | undefined): void {
    throw new Error("Method not implemented.");
  }

  getClient?(): HostedPluginClient | undefined {
    throw new Error("Method not implemented.");
  }
}
