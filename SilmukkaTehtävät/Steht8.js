function laske(){
    var luku = document.getElementById('luku').value;
    var potenssi = document.getElementById('potenssi').value;
    var yhteensa = luku;

    for(var i = 1; i < potenssi; i++){
        yhteensa *= luku;
    }
    document.getElementById('rivi').innerHTML = yhteensa;
}