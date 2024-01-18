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
    let total = parseInt(git) + parseInt(slack)  + parseInt(github);

    if (total <= 10){
        
        document.getElementById("alert").className ="alert alert-success"
        document.getElementById("alert").innerHTML = "Llevas " + total + " Stickers"
    } else{
        document.getElementById("alert").className ="alert alert-danger"
        document.getElementById("alert").innerHTML = "Llevas demasiados Stickers"
    }
  }