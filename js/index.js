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

  let git= document.getElementById("git").value;
  let slack= document.getElementById("slack").value;
  let github= document.getElementById("github").value;
  document.getElementById("alert").innerHTML='Párrafo de texto';
  