document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const themeStylesheet = document.getElementById("theme-stylesheet");

  if (!themeToggle || !themeStylesheet) {
    console.error("Toggle or stylesheet element not found.");
    return;
  }

  const savedTheme = localStorage.getItem("theme") || "light";
  themeStylesheet.href = css / { savedTheme } - theme.css;

  themeToggle.addEventListener("click", () => {
    const isDark = themeStylesheet.href.includes("dark");
    const newTheme = isDark ? "light" : "dark";

    themeStylesheet.href = `css/${newTheme}-theme.css`;
    localStorage.setItem("theme", newTheme);
  });
});
