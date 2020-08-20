function PariVaiPariton(){
    var Joku;
    joku = document.getElementById('luku').value;

    if (joku%2 == 0) {
        document.write ("Antamasi luku on parillinen");
    }

    else {
        document.write ("Antamasi luku on pariton");
    }
}