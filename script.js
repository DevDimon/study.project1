document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("timeDisplay");
  button.addEventListener('click', () => {
    let date = new Date();
    let time = date.toLocaleTimeString();
    button.innerHTML = time;
  })
});