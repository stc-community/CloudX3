import { useI18n } from "vue-i18n";

export function useLang() {
  const { locale, t } = useI18n();

  function setLang(lang: "zh" | "en") {
    window.localStorage.setItem('LANG', lang)
    locale.value = lang;
  }

  return {
    t,
    locale,
    setLang
  };
}
