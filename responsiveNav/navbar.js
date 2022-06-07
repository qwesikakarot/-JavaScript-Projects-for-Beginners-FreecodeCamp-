let btnnav = document.getElementById("btn");


btnnav.addEventListener('click', shownav);

function myFunction(x) {
    x.classList.toggle("change");
}



function shownav() {
    let navbar = document.getElementById('nav').style.display;
    if (navbar == 'block')
        document.getElementById('nav').style.display = "none";
    else
        document.getElementById('nav').style.display = "block";
}
