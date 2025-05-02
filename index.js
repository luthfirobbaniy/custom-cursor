const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.transform = `
    translate(${e.clientX - 12}px, ${e.clientY - 12}px)
  `;
  cursor.style.opacity = "100";
});
