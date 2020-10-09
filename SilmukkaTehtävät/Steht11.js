function joku(){
    var eka = parseInt(document.getElementById('eka').value);
    var toka = document.getElementById('toka').value;
    var pariluvut='';
    var paritonluvut='';
    var parisumma=0;
    var paritonsumma=0;
    var parialku, paritonalku;

    if(eka %2 == 0){
        parialku = eka;
    }
    else{
        parialku = eka+1;
    }

    for(var i = parialku; i <=toka; i++){
        pariluvut += i + ' ';
        parisumma += i;
    }
    if(eka%2 == 0){
        paritonalku = eka+1;
    }
    else{
        paritonalku = eka;
    }

    for(var j = paritonalku; j<= toka; j+=2){
        paritonluvut += j + ' ';
        paritonsumma += j;
    }
    document.getElementById('rivi').innerHTML = "<p>Parilliset luvut: " + parisumma + '</p>' + '<p>Parittomat luvut: ' + paritonsumma + '</p>'
}