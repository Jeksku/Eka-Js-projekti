function salasana(){
    var annettu = '';
    annettu = document.getElementById('sana').value;
    var kirjaimet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'å', 'ä', 'ö',];
    var eka, toka;
    var temp = [];
    var salis='';

    for(var i = 0; i < annettu.length; i++){
        eka = annettu[i];
        temp.push(eka);
        var lisa = Math.floor(Math.random()*kirjaimet.length);
        toka = kirjaimet[lisa];
        temp.push(toka);
}
    salis = temp.join('');
    document.getElementById('rivi').innerHTML = salis;
}