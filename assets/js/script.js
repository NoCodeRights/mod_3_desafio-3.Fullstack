//el código en comentario es el código original

//function pintar(){
//  ele.style.backgroundColor = 'yellow'
//}

//const ele = document.getElementById("ele1")
//ele.addEventListener("click", pintar);

var pintar = document.querySelector('#ele1')


pintar.addEventListener('click', function(){ //aquí se crea una función anónima por requerimiento del ejercicio
    if (pintar.style.backgroundColor=='yellow'){
        pintar.style.backgroundColor='green';
    }else{pintar.style.backgroundColor='yellow'}
    
});