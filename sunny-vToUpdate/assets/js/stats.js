/*
function coucou(mou){
  const baliseResult = document.getElementById("results")
  //document.write("fuck You !");
  baliseResult.innerHTML = '<p>coucou</p>';
  prompt("salut ~");
  if (mou == 0) {
    baliseResult.style.display = 'none';
  }else{
    baliseResult.style.display = 'block';
  }
}
*/
/*
*afficher un popup avec demande de 'ok' ou 'annuler'
*confirm("coucou");
*/

function coucou(mou){
  const balise = document.getElementById("results");
  if(mou == 0){
    balise.style.display = 'none';
  }else{
    balise.style.display = 'block';
  }
  var txt = prompt("Quelque chose a dire ?");
  balise.innerHTML = "<p>"+txt+"</p>"
}
