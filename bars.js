var a = document.getElementById('loader')
var currentvalue = 0
setInterval(function () {
    currentvalue = currentvalue + 10;
    if (currentvalue <= 100) {
        a.innerHTML = currentvalue + "%"
        var m = document.createElement("i")
        m.classList = "fab fa-facebook"
        a.appendChild(m)
        a.style.width = currentvalue + "%"
        console.log(m)
    }
    else {
        currentvalue = 0
    }
}, 1000)