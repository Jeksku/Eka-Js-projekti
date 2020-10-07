function hipHeijjaa(){
var luvut = '';

for(var i = 1; i <= 100; i++){

    if(i % 3 == 0){
        luvut += 'Hip ';
    }

    else if(i % 5 == 0){
        luvut += 'Heijjaa ';
    }

    else if (i % 3 == 0 && i % 5 == 0){
        luvut += 'Hip Heijjaa ';
    }

    else{
    luvut += i + ' ';
    }
document.getElementById('rivi').innerHTML = luvut;
}

}