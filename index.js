var productItemContact = document.getElementsByClassName("contact");
var lightbox = document.getElementsByClassName("lightbox")[0];
var lightboxContent = document.getElementsByClassName("lightbox-content")[0];
var lightboxTitle = document.getElementsByClassName("lightbox-title")[0];
var lightboxText = document.getElementsByClassName("lightbox-text")[0];
var lightboxExternal = document.getElementsByClassName("lightbox-external")[0];
var lightboxImageContent = document.getElementsByClassName("lightbox-image-content")[0];
var workCasesContainer = document.getElementById("workCases");
var createProductItem = function (workCase) {
    var productItem = document.createElement("div");
    var productItemInner = document.createElement("div");
    var productItemInnerTitle = document.createElement("p");
    var productItemInnerBody = document.createElement("p");
    var productItemImage = document.createElement("img");
    productItem.appendChild(productItemInner);
    productItem.appendChild(productItemImage);
    productItemInner.appendChild(productItemInnerTitle);
    productItemInner.appendChild(productItemInnerBody);
    productItem.classList.add("product-item");
    productItemInnerTitle.textContent = workCase.title;
    productItemInnerBody.textContent = workCase.body;
    productItemImage.src = workCase.featureImageUrl;
    return productItem;
};
var createLightboxMedia = function (url) {
    var media = undefined;
    var isVideo = url.substring(url.length - 3) == "mp4";
    if (isVideo) {
        var video = document.createElement("video");
        var source = document.createElement("source");
        source.src = url;
        video.controls = true;
        video.muted = true;
        video.defaultMuted = true;
        video.playsInline = true;
        video.setAttribute("type", "video/mp4");
        video.appendChild(source);
        media = video;
    }
    else {
        var image = document.createElement("img");
        image.src = url;
        image.addEventListener("click", function () { return open(url); });
        media = image;
    }
    return media;
};
var createExpandableProductItem = function (workCase) {
    var productItem = createProductItem(workCase);
    productItem.classList.add("expandable");
    productItem.addEventListener("click", function () {
        var _a;
        lightbox.classList.add("active");
        lightboxTitle.textContent = workCase.title;
        lightboxExternal.textContent = workCase.externalLinkDescription || "";
        lightboxExternal.href = workCase.externalLink || "";
        if (workCase.externalLink) {
            lightboxExternal.classList.add("active");
        }
        else {
            lightboxExternal.classList.remove("active");
        }
        lightboxText.textContent = workCase.body;
        var media = [createLightboxMedia(workCase.featureImageUrl)];
        var additionalMedia = (_a = workCase.additionalMediaUrls) === null || _a === void 0 ? void 0 : _a.map(function (url) {
            return createLightboxMedia(url);
        });
        if (additionalMedia) {
            media.push.apply(media, additionalMedia);
        }
        lightboxImageContent.replaceChildren.apply(lightboxImageContent, media);
    });
    return productItem;
};
// Entry
(function () {
    lightboxContent.addEventListener("click", function (ev) { return ev.stopPropagation(); });
    lightbox.addEventListener("click", function () { return lightbox.classList.remove("active"); });
    fetch("res/cases.json").then(function (casesFile) {
        casesFile.json().then(function (uncastCasesRoot) {
            var casesRoot = uncastCasesRoot;
            for (var i = 0; i < casesRoot.cases.length; i++) {
                var workCase = casesRoot.cases[i];
                workCasesContainer.appendChild(createExpandableProductItem(workCase));
            }
        });
    });
    for (var i = 0; i < productItemContact.length; i++) {
        var contactItem = productItemContact[i];
        contactItem === null || contactItem === void 0 ? void 0 : contactItem.addEventListener("click", function () {
            document.location.href =
                "mailto:dozermailjd@gmail.com?subject=First Contact - Megabyte Magicians&body=Hej Megabyte Magicians! Jeg er interesseret i et møde med jer, hvordan passer det jer ...";
        });
    }
})();
