var productItemContact = document.getElementsByClassName("contact");
var productItemExpandable = document.getElementsByClassName("expandable");
var lightbox = document.getElementsByClassName("lightbox")[0];
var lightboxTitle = document.getElementsByClassName("lightbox-title")[0];
var lightboxText = document.getElementsByClassName("lightbox-text")[0];
var lightboxImage = document.getElementsByClassName("lightbox-image")[0];
// Entry
(function () {
    // Don't ever do this
    lightbox.children[0].addEventListener("click", function (ev) {
        ev.stopPropagation();
    });
    lightbox.addEventListener("click", function (ev) {
        lightbox.classList.remove("active");
    });
    for (var i = 0; i < productItemExpandable.length; i++) {
        var expandableItem = productItemExpandable[i];
        expandableItem === null || expandableItem === void 0 ? void 0 : expandableItem.addEventListener("click", function (ev) {
            var _a;
            var target = ev.target;
            lightbox.classList.add("active");
            lightboxTitle.textContent = target.children[0].textContent;
            lightboxText.textContent = target.children[1].textContent;
            lightboxImage.src = ((_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.children[1]).src;
        });
    }
    for (var i = 0; i < productItemContact.length; i++) {
        var contactItem = productItemContact[i];
        contactItem === null || contactItem === void 0 ? void 0 : contactItem.addEventListener("click", function () {
            document.location.href =
                "mailto:dozermailjd@gmail.com?subject=First Contact - Megabyte Magicians&body=Hej Megabyte Magicians! Jeg er interesseret i et møde med jer, hvordan passer det jer ...";
        });
    }
})();
