import { injectable } from "@theia/core/shared/inversify";
import { PluginPathsService } from "@theia/plugin-ext/lib/main/common/plugin-paths-protocol";

@injectable()
export class FrontendPluginPathsService implements PluginPathsService {
  async getHostLogPath(): Promise<string> {
    return "";
  }

  async getHostStoragePath(
    _workspaceUri: string | undefined,
    _rootUris: string[],
  ): Promise<string | undefined> {
    return "";
  }
}
