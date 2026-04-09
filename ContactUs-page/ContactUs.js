const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});
/* open slidebar function*/
function openSidebar() {
    document.getElementById("mySidebar").style.width = "250px";
  }

/* close slidebar function*/
function closeSidebar() {
    document.getElementById("mySidebar").style.width = "0";
  }
/* signin button function*/
function goto() {
    window.location.href="../Sign-page/sign.html";
  }