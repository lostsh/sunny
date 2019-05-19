/*By Y.V check https://github.com/lostsh
*More informations on this project https://github.com/lostsh/sunny
*
*This code may display the current houre
*and modifi the background and the header in function of the current houre
*/

//Horloge
function horloge(){ //Horloge dans le header
  const champAfficheur = document.getElementById('horloge');
  var touteLaDate = Date();//on recupere toute les informations sur la date et l'heure
  var HeureMinutesSecondes = '';//variable string qui contient la date et l'heure
  for(var i=16; i<=23; i++){
    HeureMinutesSecondes+=touteLaDate[i];//on trie pour recuperer que les heures minutes secondes
  }
  champAfficheur.innerHTML='<p><b>'+HeureMinutesSecondes+'</b></p>';

  setTimeout("horloge()", 1000);//rafraichir toutes les secondes
}
horloge();

//Fond qui change selon l'heure
function changerFond(){
  const elementBody = document.body;
  const elementHead = document.getElementById('header');
  var heure = '';
  heure = Date()[16]+Date()[17];//on recupere seulement les deux chiffres des heures
  setTimeout("changerFond()", 120000);
  //la fonction est actualisee toutes les deux minutes
  //donc au maximum on aura deux minutes de retard sur les transitions

  //Changement des images
  if( 6 <= heure && heure < 9 ){
    elementBody.className = 'matin'; // background
    elementHead.className = 'headMatin'; //dessin soleil
  }else if ( 9 <= heure && heure < 12 ){
    elementBody.className = 'mimatin';
    elementHead.className = 'headMiMatin';
  }else if ( 12 <= heure && heure < 15 ){
    elementBody.className = 'midi';
    elementHead.className = 'headMidi';
  }else if ( 15 <= heure && heure < 18 ){
    elementBody.className = 'aprem';
    elementHead.className = 'headAprem';
  }else if ( 18 <= heure && heure < 20 ){
    elementBody.className = 'soir';
    elementHead.className = 'headSoir';
  }else if ( 20 >= heure || heure > 6 ){
    elementBody.className = 'nuit';
    elementHead.className = 'headNuit';
  }
}
changerFond();

/*
to display the background modifications this use the body caracteristics
to diplay the current time we use some html element with the id="horloge"
to display the differents posistions of the sun on the header we use the id="header"
<div id="header"></div>
<div id="horloge"></div>
*/
