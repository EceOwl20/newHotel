import { useLocale, useTranslations } from "next-intl";
import { locales } from "@/config";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t("locale", { locale })}>
      {locales.map((cur) => {
        return (
          <div key={cur} value={cur}>
            {t("locale", { locale: cur })}
          </div>
        );
      })}
    </LocaleSwitcherSelect>
  );
}
