function Viikonpaiva(){
    var vluku;
    vluku = document.getElementById('vkp').value;

    if (vluku == 1){
        document.write ("Maanantai");
    }

    else if (vluku == 2){
        document.write ("Tiistai");
    }

    else if (vluku == 3){
        document.write ("Keskiviikko");
    }

    else if (vluku == 4){
        document.write ("Torstai");
    }

    else if (vluku == 5){
        document.write ("Perjantai");
    }

    else if (vluku == 6){
        document.write ("Lauantai");
    }

    else if (vluku == 7){
        document.write ("Sunnuntai");
    }

    else {
        document.write ("Viikossa on vain 7 päivää.")
    }
}