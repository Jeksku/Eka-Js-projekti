function Kertotaulu(){
    var luku, taulukko='';
    luku = document.getElementById('luku').value;
    
    taulukko += luku + ' x 0 =' + luku*0 + '<br/>';
    taulukko += luku + ' x 1 =' + luku*1 + '<br/>';
    taulukko += luku + ' x 2 =' + luku*2 + '<br/>';
    taulukko += luku + ' x 3 =' + luku*3 + '<br/>';
    taulukko += luku + ' x 4 =' + luku*4 + '<br/>';
    taulukko += luku + ' x 5 =' + luku*5 + '<br/>';
    taulukko += luku + ' x 6 =' + luku*6 + '<br/>';
    taulukko += luku + ' x 7 =' + luku*7 + '<br/>';
    taulukko += luku + ' x 8 =' + luku*8 + '<br/>';
    taulukko += luku + ' x 9 =' + luku*9 + '<br/>';
    taulukko += luku + ' x 10 = ' + luku*10 + '<br/>';

    document.getElementById('Rivi').innerHTML = taulukko;
}