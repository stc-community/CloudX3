import { useI18n } from "vue-i18n";

export function useLang() {
  const { locale, t } = useI18n();

  function switchLang() {
    const nextLang = locale.value === "zh" ? "en" : "zh";
    setLang(nextLang);
  }

  function setLang(lang: "zh" | "en") {
    window.localStorage.setItem("LANG", lang);
    locale.value = lang;
  }

  return {
    t,
    locale,
    switchLang
  };
}
