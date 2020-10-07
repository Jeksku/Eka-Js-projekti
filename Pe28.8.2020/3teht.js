function muutaTaulukoksi(){  
  var numerot = [[2, 3, 4, 5][8, 5, 2, 1][9, 6, 4, 3][8, 4, 2, 6][2, 7, 3, 7]];
  var taulukko = '<table border="1">';
  
  for(var i = 0; i < numerot.length; i++){
    taulukko += '<tr>';
    
    for(var t = 0; t < numerot[i].length; t++){
      taulukko+='<td>' + numerot[i][t] + '</td>';
    }
    taulukko+='</tr>';
  }
  taulukko+='</table>';
  document.getElementById('rivi').innerHTML = taulukko;
}