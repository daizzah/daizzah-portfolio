document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".title-container");
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
});

document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in");

  fadeElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("visible");
    }, index * 200);
  });
});
