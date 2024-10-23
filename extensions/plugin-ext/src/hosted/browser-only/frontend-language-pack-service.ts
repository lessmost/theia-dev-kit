import { injectable } from "@theia/core/shared/inversify";
import {
  LanguagePackBundle,
  LanguagePackService,
} from "@theia/plugin-ext/lib/common/language-pack-service";

@injectable()
export class FrontendLanguagePackService implements LanguagePackService {
  protected readonly storage = new Map<
    string,
    Map<string, LanguagePackBundle>
  >();

  storeBundle(
    pluginId: string,
    locale: string,
    bundle: LanguagePackBundle,
  ): void {
    if (!this.storage.has(pluginId)) {
      this.storage.set(pluginId, new Map());
    }
    this.storage.get(pluginId)!.set(locale, bundle);
  }

  deleteBundle(pluginId: string, locale?: string): void {
    if (locale) {
      this.storage.get(pluginId)?.delete(locale);
    } else {
      this.storage.delete(pluginId);
    }
  }

  async getBundle(
    pluginId: string,
    locale: string,
  ): Promise<LanguagePackBundle | undefined> {
    // TODO: 处理 VSCode 国际化语言的加载
    console.debug(
      `FrontendLanguagePackService.getBundle(${pluginId}, ${locale})`,
    );
    return this.storage.get(pluginId)?.get(locale);
  }
}
