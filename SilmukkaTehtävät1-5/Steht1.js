function ParillinenLuku(){
    var kArvo = parseInt(document.getElementById('Pluku').value);
    var Jono = "<p>";
        for(var i = 2; i <= kArvo; i= i+2){
            Jono+=i;
            Jono+=" ";
        }
    Jono+="</p>"
    document.getElementById('Jono').innerHTML = Jono;
}