/* --- FUNCTION FOR THE CLOCK --- */

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    if (h > 12) {
        var apm = "PM";
    }
    else {
        var apm = "AM";
    }
    
    if (h > 12) {
        h-=12;
    }
    
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s + " " + apm;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}



