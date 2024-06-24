const caja = document.querySelector('#key');

document.addEventListener ("keydown", function (event) {
    if (event.key === "a"){
        caja.style.backgroundColor = "pink";
    }else if (event.key === "s"){
        caja.style.backgroundColor = "orange";
    }else if (event.key === "d"){
        caja.style.backgroundColor = "cyan";
    }
    
    if (event.key === "q") {
        agregarElemento("purple");
    } else if ( event.key === "w") {
        agregarElemento("gray");
    } else if (event.key === "e") {
        agregarElemento("brown");
    }
});


function agregarElemento(color) {
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = color;
    newDiv.style.border = "2px solid black";
    const parent = document.querySelector("body");
    parent.appendChild(newDiv);
  }