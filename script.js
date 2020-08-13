var etunimi = 'Tomas';
var sukunimi = 'Roulamo';
var ika = '17';
var postinro = '01450';
var puhelinnro = '0452033707';
var lahiosoite = 'Hirvitie 25 C A 2';
var tunnit = 10;
var minuutit = 52;
var sekunnit = 23
var minuuteiksi = tunnit * 60 + minuutit;
var sekunneiksi = tunnit * 60 + minuutit + sekunnit * 60;

alert ('Minun nimeni on' + ' ' + etunimi + ' ' + sukunimi + ' ' + 'ja ikäni on' + ' ' + ika + '.');
alert ('Minun osoitteeni on' + ' ' + lahiosoite + ' ' + postinro + '. ' + 'Ja minun puhelinnumero on' + ' ' + puhelinnro + '.')
alert ('Tänään on kulunut ' + minuuteiksi + ' minuuttia.');
alert ('Tänään on kulunut ' + sekunneiski + ' sekunttia.');
