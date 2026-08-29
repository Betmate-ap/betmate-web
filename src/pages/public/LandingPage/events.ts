export const focusAuth = (mode: "signup" | "login") =>
  window.dispatchEvent(new CustomEvent("focusAuthForm", { detail: { mode } }));
