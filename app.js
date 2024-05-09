const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const colorName = document.querySelector(".color");
const btn = document.querySelector("#btn");
btn.addEventListener('click',function (){
    const randomNumber = Math.floor(Math.random()*colors.length);
    document.body.style.background= colors[randomNumber];
    colorName.innerHTML= colors[randomNumber];
})