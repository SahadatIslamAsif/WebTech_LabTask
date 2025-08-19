document.getElementById("applyBtn").addEventListener("click", changeColor);

function changeColor() {
  const color = document.getElementById('colorInput').value;
  document.getElementById('textBox').style.color = color;
}
