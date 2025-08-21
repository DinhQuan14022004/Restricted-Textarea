const input = document.getElementById("input");
const numWord = document.getElementById("num-word");

input.addEventListener("input", (e) => {
  let text = e.target.value;

  if (text.length >= 250) {
    text = text.substring(0, 250);
    input.value = text;
    input.classList.add("err");
    numWord.classList.add("errNum");
  }
  else {
    input.classList.remove("err");
    numWord.classList.remove("errNum");
  }


  numWord.innerHTML = text.length + "/250";
});
