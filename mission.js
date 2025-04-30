// Select the theme dropdown
const themeSelector = document.querySelector("#themeSelector");

function changeTheme() {
  const body = document.body;
  const logo = document.querySelector(".logo");

  if (themeSelector.value === "dark") {
    body.classList.add("dark");
    logo.setAttribute("src", "byui-logo_white.png");
  } else {
    body.classList.remove("dark");
    logo.setAttribute("src", "byui-logo_blue.webp");
  }
}

// Listen for changes to the dropdown
themeSelector.addEventListener("change", changeTheme);
