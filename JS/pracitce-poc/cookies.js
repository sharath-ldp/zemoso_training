
document.cookie = "name=sharath;";

function showCookies() {
  const output = document.getElementById("cookies");
  output.textContent = ` ${document.cookie}`;
}

function clearOutputCookies() {
  const output = document.getElementById("cookies");
  output.textContent = "";
}
