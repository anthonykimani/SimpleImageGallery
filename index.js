const previousButton = document.querySelector('.previous-button');
const nextButton = document.querySelector('.next-button');
const imageLoop = document.querySelector('.image');

previousButton.addEventListener('click',()=>{
    imageLoop.style.backgroundImage =  "url('images/chapati.jpeg')";
})

nextButton.addEventListener('click',()=>{
    imageLoop.style.backgroundImage = "url('images/fish.jpg')";
})