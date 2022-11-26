function Pi() {
    var n = parseInt(document.getElementById("n").value);
    var a = (2 / Math.PI);
    m = 1;
    s = Math.sqrt(0);
    for (i = 1; i <= n; i++) {

        m = m * (Math.sqrt(2 + Math.sqrt(s))) / 2
        s = Math.sqrt(2)

    }
    document.getElementById('ab').innerHTML = "Se muestra la aproximacion de pi en la igualdad" + " <br>" + a.toFixed(6) + " = " + a.toFixed(4) + 5 + 9;
}