function myFunction() {
    var x = document.getElementById("list");
    if (x.style.display === "flex") {
      x.style.display = "";
    } else {
      x.style.display = "flex";
    }
  }
// How to make the dropdown clicked and not hover like how it was used in its css
// document.getElementById("ddd").addEventListener("click", dash);
// function dash () {
//     document.getElementById("dropp").classList.toggle("active");
// }
                                // or
// var dash = document.querySelector("#ddd")
// dash.onclick = function (){
// document.getElementById("dropp").classList.toggle("active");
// }

document.getElementById("ti").innerHTML = "Welcome, "+localStorage.getItem("textvalue")

// let pman = function (x,y){
//   return x-y;
// }
// console.log(pman(6,4));

setTimeout(() => {
  const box = document.getElementById('ti');

  // 👇️ removes element from DOM
  box.style.display = 'none';

  // 👇️ hides element (still takes up space on page)
  // box.style.visibility = 'hidden';
},4000); // 👈️ time in milliseconds


const image = document.querySelectorAll(".photos");
let i = 0;
setInterval(function(){ 

if(i == 0) {
image[i].className = "fade-in-image";
} else if(i == image.length ) {
image[i - 1].className = "fade-out-image";
image[0].className = "fade-in-image";
i = 0;
} else {
image[i - 1].className = "fade-out-image";
image[i].className = "fade-in-image";
}
i++;

}, 3000);