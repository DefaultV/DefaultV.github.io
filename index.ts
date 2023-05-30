interface ICases {
  cases: ICase[];
}

interface ICase {
  id: number;
  title: string;
  body: string;
  featureImageUrl: string;
  additionalMediaUrls?: string[];
  externalLink?: string;
  externalLinkDescription?: string;
}

const productItemContact = document.getElementsByClassName("contact");
const lightbox = document.getElementsByClassName(
  "lightbox"
)[0] as HTMLDivElement;
const lightboxContent = document.getElementsByClassName(
  "lightbox-content"
)[0] as HTMLDivElement;
const lightboxTitle = document.getElementsByClassName(
  "lightbox-title"
)[0] as HTMLDivElement;
const lightboxText = document.getElementsByClassName(
  "lightbox-text"
)[0] as HTMLDivElement;
const lightboxExternal = document.getElementsByClassName(
  "lightbox-external"
)[0] as HTMLAnchorElement;
const lightboxImageContent = document.getElementsByClassName(
  "lightbox-image-content"
)[0] as HTMLDivElement;
const workCasesContainer = document.getElementById(
  "workCases"
) as HTMLDivElement;

const createProductItem = (workCase: ICase): HTMLDivElement => {
  const productItem = document.createElement("div");
  const productItemInner = document.createElement("div");
  const productItemInnerTitle = document.createElement("p");
  const productItemInnerBody = document.createElement("p");
  const productItemImage = document.createElement("img");

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

const createLightboxMedia = (
  url: string
): HTMLImageElement | HTMLVideoElement => {
  console.log(url.substring(url.length - 3));
  let media: HTMLImageElement | HTMLVideoElement | undefined = undefined;
  const isVideo = url.substring(url.length - 3) == "mp4";
  if (isVideo) {
    const video = document.createElement("video");
    const source = document.createElement("source");
    video.controls = true;
    source.src = url;
    video.appendChild(source);

    media = video;
  } else {
    const image = document.createElement("img");
    image.src = url;
    image.addEventListener("click", () => open(url));

    media = image;
  }

  return media;
};

const createExpandableProductItem = (workCase: ICase): HTMLDivElement => {
  const productItem = createProductItem(workCase);

  productItem.classList.add("expandable");
  productItem.addEventListener("click", () => {
    lightbox.classList.add("active");
    lightboxTitle.textContent = workCase.title;
    lightboxExternal.textContent = workCase.externalLinkDescription || "";
    lightboxExternal.href = workCase.externalLink || "";
    if (workCase.externalLink) {
      lightboxExternal.classList.add("active");
    } else {
      lightboxExternal.classList.remove("active");
    }
    lightboxText.textContent = workCase.body;

    const media = [createLightboxMedia(workCase.featureImageUrl)];
    const additionalMedia = workCase.additionalMediaUrls?.map((url) =>
      createLightboxMedia(url)
    );
    if (additionalMedia) {
      media.push(...additionalMedia);
    }
    lightboxImageContent.replaceChildren(...media);
  });

  return productItem;
};

// Entry
(() => {
  lightboxContent.addEventListener("click", (ev) => ev.stopPropagation());
  lightbox.addEventListener("click", () => lightbox.classList.remove("active"));

  fetch("res/cases.json").then((casesFile) => {
    casesFile.json().then((uncastCasesRoot) => {
      const casesRoot = uncastCasesRoot as ICases;
      for (let i = 0; i < casesRoot.cases.length; i++) {
        const workCase = casesRoot.cases[i];
        workCasesContainer.appendChild(createExpandableProductItem(workCase));
      }
    });
  });

  for (let i = 0; i < productItemContact.length; i++) {
    const contactItem = productItemContact[i];

    contactItem?.addEventListener("click", () => {
      document.location.href =
        "mailto:dozermailjd@gmail.com?subject=First Contact - Megabyte Magicians&body=Hej Megabyte Magicians! Jeg er interesseret i et møde med jer, hvordan passer det jer ...";
    });
  }
})();
