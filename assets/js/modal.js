document.addEventListener("DOMContentLoaded", function () {
  // Select all project items that open the modal
  const portfolioItems = document.querySelectorAll(".rn-portfolio");

  // Select modal elements
  const modalImage = document.querySelector("#exampleModalCenter .portfolio-popup-thumbnail img");
  const modalTitle = document.querySelector("#exampleModalCenter .text-content h3");
  const modalCategory = document.querySelector("#exampleModalCenter .text-content h3 span");
  const modalDescription = document.querySelector("#exampleModalCenter .text-content p.mb--30");

  // Loop through each portfolio item
  portfolioItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Get the project image, title, category, and description
      const img = item.querySelector(".thumbnail img");
      const title = item.querySelector(".content h4.title a")?.textContent.trim();
      const category = item.querySelector(".category-list a")?.textContent.trim();
      const description = item.querySelector(".description")?.textContent.trim();

      // Update modal image
      if (img && modalImage) {
        modalImage.src = img.src;
        modalImage.alt = img.alt || "Portfolio image";
      }

      // Update modal title and category
      if (modalTitle) {
        modalTitle.innerHTML = `<span>${category || "Project"}</span> ${title || "Untitled Project"}`;
      }

      // Update modal description
      if (modalDescription) {
        modalDescription.textContent = description || "Description coming soon...";
      }
    });
  });
});
