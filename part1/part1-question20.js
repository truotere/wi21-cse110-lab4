

var t = 0;
function printEverySec() {
    setInterval(function() {
        if (t == 100) {
            clearInterval(this);
        } else {
            var d = new Date();
            var time = d.toLocaleTimeString();
            console.log(time);
        }
    }, 1000);
}

printEverySec();