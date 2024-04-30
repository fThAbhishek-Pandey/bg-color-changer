const button = document.querySelectorAll('.button')
const body = document.querySelector("body")
button.forEach(function (button)
{
  console.log(button)
  button.addEventListener('click', function(colour){
    body.style.backgroundColor= colour.target.id;
  })
}
)