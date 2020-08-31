function JarjestaLuvut(){
    var luku1, luku2, luku3;
    luku1 = document.getElementById('eka').value;
    luku2 = document.getElementById('toka').value;
    luku3 = document.getElementById('kolmas').value;

    if (luku1 > luku2 && luku1 >luku3){
       
        if (luku2 > luku3){
            document.write("Lukujen järjestys on " + luku1 + ' ' + luku2 + ' ' + luku3);
        }
        else {
        document.write("Lukujen järjestys on " + luku1 + ' ' + luku3 + ' ' + luku2);
        }
    }
    else if (luku2 > luku1 && luku2 > luku3){
        
        if (luku1 >luku3){
        document.write("Lukujen järjestys on " + luku2 + ' ' + luku1 + ' ' + luku3);
        }
        else {
        document.write("Lukujen järjestys on " + luku2 + ' ' + luku3 + ' ' + luku1);
        }
    }
    else if (luku3 > luku1 && luku3 > luku2){
        
        if (luku1 >luku2){
        document.write("Lukujen järjestys on " + luku3 + ' ' + luku1 + ' ' + luku2);
        }
        else {
        document.write("Lukujen järjestys on " + luku3 + ' ' + luku2 + ' ' + luku1);
        }
    }
    
}