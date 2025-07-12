function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    menu.classList.toggle("show");
  }
  function toggleServices() {
    const panel = document.getElementById("service-panel");
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  }