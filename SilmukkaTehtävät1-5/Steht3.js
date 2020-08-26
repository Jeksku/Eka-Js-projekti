function Okirjain(){
    var SeSana = document.getElementById('osana').value;
    var vastaus = 'ei ole';
    for(var k= 0; k < SeSana.length; k++);{
        if (SeSana[k] == 'ö' || SeSana[k] == 'Ö') {
            vastaus = 'on';
        }
    }
    document.getElementById('hassuSana').innerHTML = '<p>' + vastaus + '</p>';
}