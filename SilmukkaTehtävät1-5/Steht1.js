function ParillinenLuku(){
    var kArvo = parseInt(document.getElementById('Pluku').value);
    var jono = "<p>";
        for(var i = 2; i <= kArvo; i= i+2){
            jono+=i;
            jono+=" ";
        }
    jono+="</p>"
    document.getElementById('Jono').innerHTML = jono;
}