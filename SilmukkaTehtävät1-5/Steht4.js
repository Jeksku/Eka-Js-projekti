function Kertoma(){
    var  kerrottava, tulos;
    kerrottava = document.getElementById('Kluku').value;
    tulos = 1;
    for(var z = 1; z <= kerrottava; z++){
    tulos*=z;
  }
    document.getElementById('rivi'). innerHTML ='<p>Luvun ' + kerrottava + ' kertoma on '+tulos + '</p>';
}