function ArvoNumerot(){
    var lottonro = [];
    var joku;

    for(var lotto = 0; lotto < 7; lotto++){
        joku= Math.floor(Math.random()*40)+1
        lottonro[lotto] = joku;

        lottonro.sort(function(a, b){return a-b});
    }
document.getElementById('Rivi').innerHTML = '<p>' + lottonro + '</p>';
}


    
  