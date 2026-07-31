(() => {
  "use strict";

  const dialog = document.querySelector("#evidence-lightbox");
  const galleryLinks = Array.from(document.querySelectorAll("#evidence .evidence-link"));

  if (!dialog || galleryLinks.length === 0 || typeof dialog.showModal !== "function") {
    return;
  }

  const lightboxImage = dialog.querySelector("[data-lightbox-image]");
  const lightboxCaption = dialog.querySelector("[data-lightbox-caption]");
  const lightboxPosition = dialog.querySelector("[data-lightbox-position]");
  const previousButton = dialog.querySelector("[data-lightbox-previous]");
  const nextButton = dialog.querySelector("[data-lightbox-next]");
  const closeButton = dialog.querySelector("[data-lightbox-close]");

  const items = galleryLinks.map((link) => {
    const image = link.querySelector("img");
    const caption = link.closest("figure")?.querySelector("figcaption")?.cloneNode(true);
    caption?.querySelector("span")?.remove();

    return {
      source: link.getAttribute("href"),
      alt: image?.getAttribute("alt") || "",
      caption: caption?.textContent.trim() || ""
    };
  });

  let currentIndex = 0;
  let openingLink = null;

  const renderItem = (index) => {
    currentIndex = (index + items.length) % items.length;
    const item = items[currentIndex];

    lightboxImage.setAttribute("src", item.source);
    lightboxImage.setAttribute("alt", item.alt);
    lightboxCaption.textContent = item.caption;
    lightboxPosition.textContent = `${currentIndex + 1} / ${items.length}`;
  };

  const openLightbox = (index, link) => {
    openingLink = link;
    renderItem(index);
    dialog.showModal();
    closeButton.focus();
  };

  galleryLinks.forEach((link, index) => {
    link.addEventListener("click", (event) => {
      const modifiedClick = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;

      if (event.defaultPrevented || event.button !== 0 || modifiedClick) {
        return;
      }

      event.preventDefault();
      openLightbox(index, link);
    });
  });

  previousButton.addEventListener("click", () => renderItem(currentIndex - 1));
  nextButton.addEventListener("click", () => renderItem(currentIndex + 1));
  closeButton.addEventListener("click", () => dialog.close());

  dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    dialog.close();
  });

  dialog.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      renderItem(currentIndex - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      renderItem(currentIndex + 1);
    }
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  dialog.addEventListener("close", () => {
    const focusTarget = openingLink;
    openingLink = null;
    lightboxImage.removeAttribute("src");
    focusTarget?.focus();
  });
})();
