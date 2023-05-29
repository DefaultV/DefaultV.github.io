const productItemConsulting = document.getElementById("product_consulting");
const productItemDevelopment = document.getElementById("product_development");
const productItemViewer = document.getElementById("product_viewer");

// Entry
(() => {
  console.log("Added");
  productItemConsulting?.addEventListener("click", () => {
    document.location.href =
      "mailto:dozermailjd@gmail.com?subject=Consulting - From Drews&body=Hello From Drews! I'm interested in a meeting with you.";
  });

  productItemDevelopment?.addEventListener("click", () => {
    document.location.href =
      "mailto:dozermailjd@gmail.com?subject=Development - From Drews&body=Hello From Drews! I'm interested in a meeting with you.";
  });

  productItemViewer?.addEventListener("click", () => {
    document.location.href =
      "mailto:dozermailjd@gmail.com?subject=3D Viewer - From Drews&body=Hello From Drews! I'm interested in a meeting with you.";
  });
})();
