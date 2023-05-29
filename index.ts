const productItemContact = document.getElementsByClassName("contact");
const productItemExpandable = document.getElementsByClassName("expandable");
const lightbox = document.getElementsByClassName(
  "lightbox"
)[0] as HTMLDivElement;
const lightboxTitle = document.getElementsByClassName(
  "lightbox-title"
)[0] as HTMLDivElement;
const lightboxText = document.getElementsByClassName(
  "lightbox-text"
)[0] as HTMLDivElement;
const lightboxImage = document.getElementsByClassName(
  "lightbox-image"
)[0] as HTMLImageElement;

// Entry
(() => {
  // Don't ever do this
  lightbox.children[0].addEventListener("click", (ev) => {
    ev.stopPropagation();
  });
  lightbox.addEventListener("click", (ev) => {
    lightbox.classList.remove("active");
  });

  for (let i = 0; i < productItemExpandable.length; i++) {
    const expandableItem = productItemExpandable[i];

    expandableItem?.addEventListener("click", (ev) => {
      const target = ev.target as HTMLDivElement;

      lightbox.classList.add("active");
      lightboxTitle.textContent = target.children[0].textContent;
      lightboxText.textContent = target.children[1].textContent;

      // Bad practise
      lightboxImage.src = (
        target.parentElement?.children[1] as HTMLImageElement
      ).src;
    });
  }

  for (let i = 0; i < productItemContact.length; i++) {
    const contactItem = productItemContact[i];

    contactItem?.addEventListener("click", () => {
      document.location.href =
        "mailto:dozermailjd@gmail.com?subject=First Contact - Megabyte Magicians&body=Hej Megabyte Magicians! Jeg er interesseret i et møde med jer, hvordan passer det jer ...";
    });
  }
})();
