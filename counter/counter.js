let btncounter = document.getElementById("#btncounter");
let btnreset = document.getElementById("#btnreset");
let btnsubract = document.getElementById("#btnsubract");

let counter = 0;




btncounter.addEventListener('click', count)
btnsubract.addEventListener('click', subract)
btnreset.addEventListener('click', reset)


function count() {
    counter++
    document.getElementById("count").innerHTML = counter;

    if (counter > 0) {
        document.getElementById("count").style.color = "green";

    }


};

function subract() {
    counter--;
    document.getElementById("count").innerHTML = counter;


    if (counter < 0) {
        document.getElementById("count").style.color = "red";

    };

};

function reset() {
    counter = 0;
    document.getElementById("count").innerHTML = 0;
    if (counter === 0) {
        document.getElementById("count").style.color = "black";

    }

};





 