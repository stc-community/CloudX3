export type Theme = "light" | "dark";

export function changeTheme(theme: Theme) {
  window.document.documentElement.setAttribute("data-theme", theme);
  window.document.documentElement.className = theme;

  window.localStorage.setItem("theme", theme);
}

export function getCurrentTheme() {
  return window.localStorage.getItem("theme") || "light";
}
