function SumJaKesk(){
    var luku1, luku2, luku3, luku4, luku5, summa, KA
    luku1 = parseInt(document.getElementById('eka').value);
    luku2 = parseInt(document.getElementById('toka').value);
    luku3 = parseInt(document.getElementById('kolmas').value);
    luku4 = parseInt(document.getElementById('neljäs').value);
    luku5 = parseInt(document.getElementById('viides').value);

    summa = luku1 + luku2 + luku3 + luku4 + luku5;
    KA = summa / 5;

    document.write('Antamiesi numeroiden summa on ' + summa + ' ja niiden keskiarvo on ' + KA + '.')
}