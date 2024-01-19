bandera = 0;
function bordeRojo() {
    if (bandera == 0){
        document.getElementById("uno").
        className = "borderojo img-fluid";
        bandera = 1
    }else if(bandera == 1){
        document.getElementById("uno").
        className = " img-fluid";
        bandera = 0;
    }
  }

  function calcular(){

    let git= document.getElementById("git").value;
    let slack= document.getElementById("slack").value;
    let github= document.getElementById("github").value;

    if(parseInt(git) <= 0){
        git = 0
        } else if(parseInt(slack) <= 0){
            slack = 0
            }else if(parseInt(github) <= 0){
                github = 0
                }

    let total = parseInt(git) + parseInt(slack)  + parseInt(github);
    totalNumero = Number(total);
    console.log(totalNumero);
    let alert = document.getElementById("alert");

    if (totalNumero <= 10 && totalNumero > 0){
        
        alert.className ="alert alert-success"
        alert.innerHTML = "Llevas " + total + " Stickers en total"
    }else if(totalNumero > 10){
        alert.className ="alert alert-danger"
        alert.innerHTML = "Llevas demasiados Stickers ("+ totalNumero + ")"
    }
  }

  function password(){

    let uno= document.getElementById("uno").value;
    let dos= document.getElementById("dos").value;
    let tres= document.getElementById("tres").value;

    let alert = document.getElementById("alertpassword");

    if (uno == 9 && dos == 1 && tres == 1){
        
        alert.className ="alert alert-success"
        alert.innerHTML = "<p>password <b>1</b> correcto</p>"
    } else if(uno == 7 && dos == 1 && tres == 4){
        alert.className ="alert alert-success"
        alert.innerHTML = "<p>password <b>2</b> correcto</p>"
    }else{
        alert.className ="alert alert-danger"
        alert.innerHTML = "password incorrecto"
    }
  }