function Karkausvuosi(){
    var luku1;
    luku1 = document.getElementById('joku').value;

    if (luku1%4 == 0 && luku1%100 != 0){
        document.write('Luku on karkausvuosi.')
    }
    else if (luku1%400 == 0){
        document.write('Luku on karkausvuosi.')
    }
    else{
        document.write('Luku ei ole karkausvuosi.')
    }
}