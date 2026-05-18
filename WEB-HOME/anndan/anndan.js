const readBtn = document.getElementById("readBtn");
const moreText = document.getElementById("moreText");

readBtn.addEventListener("click", () => {

  moreText.classList.toggle("show");

  if(moreText.classList.contains("show")){
    readBtn.innerHTML = "Read Less";
  } else {
    readBtn.innerHTML = "Read More";
  }

});