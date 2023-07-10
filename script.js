function temperature(){
var cel = document.getElementById("c").value;
var far =(cel * 9/5) + 32
document.getElementById("f").value = far

}

function weight(){
    var kil = document.getElementById("kg").value;
    var pou =(kil * 2.2)
    document.getElementById("lbs").value = pou
    
    }
function distance(){
        var km = document.getElementById("km").value;
        var m = km * 0.62137
        document.getElementById("miles").value = m
    }