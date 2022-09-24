var y = Math.floor(Math.random() * 10 );
var x = document.querySelector("#guess");
var sub = document.querySelector('#submit')

sub.onclick = function () {
    if (x === y) {
        alert("CONGRATULATIONS!!!");
    }
    else if (x > y) {
        guess++;
        alert("OOPS SORRY!! Try a smaller number");
    }
    else {
        guess++;
        alert("OOPS SORRY!! Try a greater number")
    }
}