var corpo = document.body.style.backgroundColor;
var hora = new Date().getHours();
var mensagem = document.getElementById("greetings");
switch(hora){
    case hora < 7:
        corpo = "blue";
        mensagem.innerHTML = "Boa madrugada!";
        break;
    case 7 <= hora <=12:
        corpo = "yellow";
        mensagem.innerHTML = "Bom dia!";
        break;
    case 12 < hora <= 17:
        corpo = "orange";
        mensagem.innerHTML = "Boa tarde!";
        break;
}