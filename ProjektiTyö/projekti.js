function kellonAika(){
    var aika = new Date();//määrittää ajan
    var t = aika.getHours();//0-23 tuntia
    var m = aika.getMinutes();//0-59 minuuttia
    var s = aika.getSeconds();//0-59 sekuntia

    var kello = t + ":" + m + ":" + s;//Kertoo mitkä kaikki osat pitää näyttää
    document.getElementById('kellonAlue').innerText = kello;
    document.getElementById('kellonAlue').textContent = kello;
    
    setTimeout(kellonAika, 1000);//Näyttää uuden ajan 1 sekunnin välein
}