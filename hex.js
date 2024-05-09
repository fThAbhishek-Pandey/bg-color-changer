const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const color = document.querySelector('.color');
const btn= document.querySelector('#btn');
btn.addEventListener('click',function(){
   
    let pickcolor = '#';
    for (let i=0;i<6;i++){
        const randomNumber = Math.floor(Math.random()*hex.length);
        pickcolor += hex[randomNumber];
    }
    document.body.style.backgroundColor = pickcolor;
    color.innerHTML= pickcolor;

})
