var productItemConsulting = document.getElementById("product_consulting");
var productItemDevelopment = document.getElementById("product_development");
var productItemViewer = document.getElementById("product_viewer");
// Entry
(function () {
    console.log("Added");
    productItemConsulting === null || productItemConsulting === void 0 ? void 0 : productItemConsulting.addEventListener("click", function () {
        document.location.href =
            "mailto:dozermailjd@gmail.com?subject=Consulting - From Drews&body=Hello From Drews! I'm interested in a meeting with you.";
    });
    productItemDevelopment === null || productItemDevelopment === void 0 ? void 0 : productItemDevelopment.addEventListener("click", function () {
        document.location.href =
            "mailto:dozermailjd@gmail.com?subject=Development - From Drews&body=Hello From Drews! I'm interested in a meeting with you.";
    });
    productItemViewer === null || productItemViewer === void 0 ? void 0 : productItemViewer.addEventListener("click", function () {
        document.location.href =
            "mailto:dozermailjd@gmail.com?subject=3D Viewer - From Drews&body=Hello From Drews! I'm interested in a meeting with you.";
    });
})();
