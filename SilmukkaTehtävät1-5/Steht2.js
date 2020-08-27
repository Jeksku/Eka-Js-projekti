function MuutaSalasanaksi(){
    var Ssana = document.getElementById('Ssana').value;
    var salasana = "<p>";
        for(var j = 0; j < Ssana.length; j++){
            salasana += Ssana[j] + 'ö'
        }
        salasana += "</p>";
        document.getElementById('salasana').innerHTML = salasana;     
}