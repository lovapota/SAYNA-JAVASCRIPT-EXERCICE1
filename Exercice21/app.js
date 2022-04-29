const h2 = document.getElementsByTagName('h2');
const button = document.getElementsByClassName('btn');
const blue = document.getElementsByClassName('blue');

function changeColors(){
    
    if(h2[0].style.backgroundColor === ''){
        h2[0].setAttribute("class","blue");
        h2[0].style.backgroundColor = 'blue';
    }
    else if(h2[0].style.backgroundColor === 'blue'){
        h2[0].removeAttribute("class","blue");
        h2[0].style.backgroundColor = ''; 
    }
    
}
// button[0].addEventListener('click',changeColors);
//MOuvement de la souris
function logMovement(event) {
    if(`${event.movementY}` > 0){
        console.log("down");
    }
    else if(`${event.movementY}` < 0){
        console.log("up");
    }
  }
  document.addEventListener('mousemove', logMovement);

  button[0].addEventListener('mouseenter', () => {
    h2[0].setAttribute("class","blue");
  })
  button[0].addEventListener('mouseleave', () => {
    h2[0].removeAttribute("class","blue"); 
  })