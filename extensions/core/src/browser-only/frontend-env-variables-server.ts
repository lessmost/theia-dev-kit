import { injectable } from "@theia/core/shared/inversify";
import {
  EnvVariable,
  EnvVariablesServer,
} from "@theia/core/lib/common/env-variables";

const variables: EnvVariable[] = [
  {
    name: "THEIA_WEBVIEW_EXTERNAL_ENDPOINT",
    value: "{{hostname}}",
  },
];

@injectable()
export class FrontendEnvVariablesServer implements EnvVariablesServer {
  async getExecPath(): Promise<string> {
    return "";
  }
  async getVariables(): Promise<EnvVariable[]> {
    return variables;
  }
  async getValue(key: string): Promise<EnvVariable | undefined> {
    return variables.find((v) => v.name === key);
  }
  async getConfigDirUri(): Promise<string> {
    return "";
  }
  async getHomeDirUri(): Promise<string> {
    return "";
  }
  async getDrives(): Promise<string[]> {
    return [];
  }
}
