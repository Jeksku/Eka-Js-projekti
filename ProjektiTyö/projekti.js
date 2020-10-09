function kellonAika(){
    var maat = document.getElementById('maat').value;
    var aika = new Date();//määrittää ajan

    var t = aika.getHours();//0-23 tuntia
    var m = aika.getMinutes();//0-59 minuuttia
    var s = aika.getSeconds();//0-59 sekuntia

    var utcT = aika.getUTCHours();
    var utcM = aika.getUTCMinutes();
    var utcS = aika.getUTCSeconds();

    if(maat == "Suomi"){
        var suomi = t + ":" + m + ":" + s;//Kertoo mitkä kaikki osat pitää näyttää
        document.getElementById('kellonAlue').innerText = suomi;
        document.getElementById('kellonAlue').textContent = suomi;
        setTimeout(kellonAika, 1000);//Näyttää uuden ajan 1 sekunnin välein
        return false;
    }

    else if (maat == "Islanti"){
        var islanti = utcT + ':' + utcM + ":" + utcS;
        document.getElementById('kellonAlue').innerText = islanti;
        document.getElementById('kellonAlue').textContent = islanti;
        setTimeout(kellonAika, 1000);//Näyttää uuden ajan 1 sekunnin välein
        return false;
    }
}