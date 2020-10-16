let colors=['blue','green','red','black','violet','yellow'];
let button = document.getElementById('button');

button.addEventListener('click',function(){
var randomColorIndex=parseInt(Math.random()*colors.length);
let container=document.getElementById('container');
container.style.backgroundColor= colors[randomColorIndex];
})

