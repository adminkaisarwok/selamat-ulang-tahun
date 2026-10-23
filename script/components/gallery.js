(function () {
  window.Components = window.Components || {};

  window.Components.gallery = {
    render(container, section) {
      const div = document.createElement("div");
      div.className = "section section-gallery";
      const photos = section.photos || [];
      div.innerHTML = `
        ${section.title ? `<h3 class="gallery-title">${section.title}</h3>` : ""}
        <div class="gallery-stack">
          ${photos
            .map(
              (p, i) => `
            <figure class="polaroid" style="--tilt:${i % 2 ? 4 : -4}deg">
              <img src="${p.src}" alt="${p.caption || "foto"}" />
              ${p.caption ? `<figcaption>${p.caption}</figcaption>` : ""}
            </figure>`
            )
            .join("")}
        </div>
      `;
      container.appendChild(div);
      return div;
    },

    animate(tl, el, config) {
      const hold = (config.sections.find((s) => s.type === "gallery") || {}).hold || 2.6;
      const title = el.querySelector(".gallery-title");
      const cards = el.querySelectorAll(".polaroid");

      if (title) {
        tl.from(title, { duration: 0.6, opacity: 0, y: -20 });
      }

      // Each photo drops onto the stack, then the previous ones stay underneath
      cards.forEach((card, i) => {
        tl.from(card, {
          duration: 0.9, opacity: 0, y: -120, scale: 1.25,
          rotation: i % 2 ? 18 : -18, ease: "back.out(1.3)",
        }, i === 0 ? "+=0.2" : `+=${hold}`);
      });

      tl.to({}, { duration: hold });
    },

    exit(tl, el) {
      tl.to(el, { duration: 0.7, opacity: 0, scale: 0.92 });
    },
  };
})();
