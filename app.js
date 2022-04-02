const btn = document.querySelector(".btn");
const changeColor = document.querySelector(".div_color");

 const colors = ["red", "green", "blue", "yellow"];
 let i = 0;

btn.onclick = function () {

    changeColor.style.backgroundColor = colors[i];
    i++;
    if(i == 4) {
        i = 0;
    }
}