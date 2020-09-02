function EtsiSuurin(){
    var luku1, luku2, luku3, luku4, luku5;
    luku1 = document.getElementById('eka').value;
    luku2 = document.getElementById('toka').value;
    luku3 = document.getElementById('kolmas').value;
    luku4 = document.getElementById('neljas').value;
    luku5 = document.getElementById('viides').value;

    if (luku1 > luku2 && luku3 && luku4 && luku5 ) {
        document.write (luku1)
    }

    else if (luku2 > luku3 && luku4 && luku5 ) {
        document.write (luku2)
    }

    else if (luku3 > luku4 && luku5 ) {
        document.write (luku3)
    }

    else if (luku4 > luku5 ) {
        document.write (luku4)
    }

    else {
        document.write (luku5)
    }
}