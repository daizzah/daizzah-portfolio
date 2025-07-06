document.addEventListener("DOMContentLoaded", () => {
  // animate title letters one by one
  const container = document.querySelector(".title-container");
  if (container) {
    const elements = container.querySelectorAll("p, h1");
    let totalDelay = 0;

    elements.forEach((element) => {
      const text = element.textContent;
      const letters = [...text];

      element.innerHTML = letters
        .map((letter) => {
          const char = letter === " " ? "&nbsp;" : letter;
          const span = `<span style="animation-delay: ${totalDelay}s">${char}</span>`;
          totalDelay += 0.05;
          return span;
        })
        .join("");
    });
  }

  // fade-in animations
  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("visible");
    }, index * 200);
  });
});

// toggle tech stack visibility
function toggleExtraStack() {
  const extra = document.getElementById("extraStack");
  extra.classList.toggle("hidden-stack");
}
