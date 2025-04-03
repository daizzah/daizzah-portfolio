document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".title-container");
  const elements = container.querySelectorAll("p, h1");

  let totalDelay = 0;

  elements.forEach((element) => {
    const text = element.textContent;
    const letters = [...text]; // Use spread operator to handle all characters, including emojis

    element.innerHTML = letters
      .map((letter) => {
        const char = letter === " " ? "&nbsp;" : letter;
        const span = `<span style="animation-delay: ${totalDelay}s">${char}</span>`;
        totalDelay += 0.05; // Increment delay for each letter
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
