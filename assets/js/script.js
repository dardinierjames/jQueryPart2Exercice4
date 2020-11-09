$(document).ready(function(){

    $('#green').click(function(){
        $('#text').css('color','#00ff00')
    });
    $('#red').click(function(){
        $('#text').css('color','#ff0000')
    });
    $('#blue').click(function(){
        $('#text').css('color','#0000ff')
    });
    $('#black').click(function(){
        $('#text').css('color','#000000')
    });
// pour chacune des fonctions, je cible dans un premier temps les id de couleur placés sur mes boutons avec le gestionnaire d'évènement "click", (au click sur la cible) et je déclare une fonction anonyme qui cible mon id "texte" avec le gestionnaire d'évènement "css" qui cible le paragraphe et change le style css que je lui détermine ('propriétéCSS','valeur')

});