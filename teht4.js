function ajoneuvo()
{
    var joku;
    joku = document.getElementById('Ika').value;
    
    if (joku == ">15") {
        document.write ("Voit liikkua polkupyörällä.")
    }

    else if (joku == ">18") {
        document.write ("Voit ajaa mopoa.")
    }

    else {
        document.write ("Voit ajaa autoa.")
    }
}