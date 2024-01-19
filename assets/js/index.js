//ejercicio 1 imagen
bandera = 0;
function bordeRojo() {
    const elemento = document.getElementById("uno");
    if (bandera == 0){
        elemento.
        className = "borderojo img-fluid";
        bandera = 1
    }else if(bandera == 1){
        elemento.
        className = " img-fluid";
        bandera = 0;
    }
  }
////////////////////////////////////////////////////////////////////////////////

//ejercicio 2 cupones
  function calcular(){

    let git= document.getElementById("git").value;
    let slack= document.getElementById("slack").value;
    let github= document.getElementById("github").value;

    let alert = document.getElementById("alert");
    let alert2 = document.getElementById("alert2");

    if(parseInt(git) < 0){
        git = 0
        setTimeout(function(){
            alert2.className ="alert alert-warning";
            alert2.innerHTML = "Tienes numeros negativos, corrígelos por favor";
        }, 500);

        } else if(parseInt(slack) < 0){
            slack = 0
            setTimeout(function(){
                alert2.className ="alert alert-warning";
                alert2.innerHTML = "Tienes numeros negativos, corrígelos por favor";
            }, 500);

            }else if(parseInt(github) < 0){
                github = 0
                setTimeout(function(){
                    alert2.className ="alert alert-warning";
                    alert2.innerHTML = "Tienes numeros negativos, corrígelos por favor";
                }, 500);
                }


                if( Math.sign(parseInt(git)) === 1 ) {
                    git = parseInt(git)
                  }else{
                    git = 0
                  }

                  if( Math.sign(parseInt(slack)) === 1 ) {
                    slack = parseInt(slack)
                  }else{
                    slack = 0
                  }

                  if( Math.sign(parseInt(github)) === 1 ) {
                    github = parseInt(github)
                  }else{
                    github = 0
                  }
                  
    let total = git + slack  + github;
    totalNumero = Number(total);

    if (totalNumero <= 10 && totalNumero >= 0){
        
        alert.className ="alert alert-success"
        let gitdato = parseInt(git);
        let slackdato = parseInt(slack);
        let githubdato = parseInt(github);

        if(git <= 0){
            gitdato = "ninguno";
        } 
        if(slack <= 0){
            slackdato= "ninguno";
        } 
        if(github <= 0){
            githubdato = "ninguno";
        } 

        alert.innerHTML = "Llevas " + total + " Stickers en total, " + gitdato +" de Git, " + slackdato + " de Slack y " + githubdato  + " de Github"
        alert2.className ="";
        alert2.innerHTML = "";
    }else if(totalNumero > 10){
        alert.className ="alert alert-danger"
        alert.innerHTML = "Llevas demasiados Stickers ("+ totalNumero + ") en total, muchos..."
        alert2.className ="";
        alert2.innerHTML = "";
    }
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ejercicio 3 pasword
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