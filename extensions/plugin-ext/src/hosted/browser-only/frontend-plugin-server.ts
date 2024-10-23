import { injectable } from "@theia/core/shared/inversify";
import {
  PluginDeployOptions,
  PluginIdentifiers,
  PluginServer,
  PluginStorageKind,
  PluginType,
} from "@theia/plugin-ext/lib/common/plugin-protocol";
import {
  KeysToAnyValues,
  KeysToKeysToAnyValue,
} from "@theia/plugin-ext/lib/common/types";

@injectable()
export class FrontendPluginServer implements PluginServer {
  deploy(
    _pluginEntry: string,
    _type?: PluginType,
    _options?: PluginDeployOptions,
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }

  uninstall(_pluginId: PluginIdentifiers.VersionedId): Promise<void> {
    throw new Error("Method not implemented.");
  }

  undeploy(_pluginId: PluginIdentifiers.VersionedId): Promise<void> {
    throw new Error("Method not implemented.");
  }

  setStorageValue(
    _key: string,
    _value: KeysToAnyValues,
    _kind: PluginStorageKind,
  ): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  getStorageValue(
    _key: string,
    _kind: PluginStorageKind,
  ): Promise<KeysToAnyValues> {
    throw new Error("Method not implemented.");
  }

  async getAllStorageValues(
    _kind: PluginStorageKind,
  ): Promise<KeysToKeysToAnyValue> {
    return {};
  }
}
