import { injectable } from "@theia/core/shared/inversify";
import { MarkdownString } from "@theia/core/lib/common/markdown-rendering";
import {
  TerminalProcessInfo,
  IBaseTerminalClient,
} from "@theia/terminal/lib/common/base-terminal-protocol";
import {
  IShellTerminalServer,
  SerializableEnvironmentVariableCollection,
} from "@theia/terminal/lib/common/shell-terminal-protocol";

@injectable()
export class FrontendShellTerminalServer implements IShellTerminalServer {
  hasChildProcesses(processId: number | undefined): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  getEnvVarCollectionDescriptionsByExtension(
    id: number,
  ): Promise<Map<string, (string | MarkdownString | undefined)[]>> {
    throw new Error("Method not implemented.");
  }

  async getEnvVarCollections(): Promise<
    [string, string, boolean, SerializableEnvironmentVariableCollection][]
  > {
    return [["", "", false, { description: "", mutators: [] }]];
  }

  restorePersisted(jsonValue: string): void {
    throw new Error("Method not implemented.");
  }

  setCollection(
    extensionIdentifier: string,
    rootUri: string,
    persistent: boolean,
    collection: SerializableEnvironmentVariableCollection,
    description: string | MarkdownString | undefined,
  ): void {
    throw new Error("Method not implemented.");
  }

  deleteCollection(extensionIdentifier: string): void {
    throw new Error("Method not implemented.");
  }

  create(IBaseTerminalServerOptions: object): Promise<number> {
    throw new Error("Method not implemented.");
  }

  getProcessId(id: number): Promise<number> {
    throw new Error("Method not implemented.");
  }

  getProcessInfo(id: number): Promise<TerminalProcessInfo> {
    throw new Error("Method not implemented.");
  }

  getCwdURI(id: number): Promise<string> {
    throw new Error("Method not implemented.");
  }

  resize(id: number, cols: number, rows: number): Promise<void> {
    throw new Error("Method not implemented.");
  }

  attach(id: number): Promise<number> {
    throw new Error("Method not implemented.");
  }

  onAttachAttempted(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }

  close(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async getDefaultShell(): Promise<string> {
    return "sh";
  }

  dispose(): void {}

  setClient(client: IBaseTerminalClient | undefined): void {
    throw new Error("Method not implemented.");
  }

  getClient?(): IBaseTerminalClient | undefined {
    throw new Error("Method not implemented.");
  }
}
