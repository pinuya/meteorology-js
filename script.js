document.querySelector(".busca").addEventListener("submit", (event) => {
  event.preventDefault();

  let input = document.querySelector("#searchInput").value;

  if (input !== "") {
    showWarning("Carregando...");

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
      input
    )}&appid=e940b3b011483c9924dfddc5dfd2f56e`;
  }
});

function showWarning(msg) {
  document.querySelector(".aviso").innerHTML = msg;
}
