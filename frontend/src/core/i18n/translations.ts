import type { Locale } from "./locale";
import { enUS, zhCN, zhTW, type Translations } from "./locales";

export const translations: Record<Locale, Translations> = {
  "en-US": enUS,
  "zh-CN": zhCN,
  "zh-TW": zhTW,
};
