function show_portfolio() {
    toggle_content("portfolio-main", "home-main")
}

function show_home() {
    toggle_content("home-main", "portfolio-main");
}

function toggle_content(on, off) {
    document.getElementById(off).style.display = "none";
    document.getElementById(on).style.display = "";
}

var bio = document.getElementById("bio");
var bio_margin = document.getElementById("bio-margin");
var name_elem = document.getElementById("name");
var name_margin = document.getElementById("name-margin");
var links = document.getElementsByClassName("link");

// element, desktop class, mobile class
var class_pairs = [[bio, "col-5", "col-10"], 
                   [bio, "mt-0", "mt-4"],
                   [bio_margin, "col-6", "col-1"],
                   [name_elem, "mr-5", "mr-0"],
                   [name_elem, "col-3", "col-10"],
                   [name_elem, "text-right", "text-center"],
                   [name_margin, "col-3", "col-1"]];

var MIN_SIZE = 496;

function adjust_main() {
    if (window.innerWidth <= MIN_SIZE) {
        for (let pair of class_pairs) {
            toggle_class(pair[0], pair[2], pair[1]);
        }
        for (let item of links) {
            toggle_class(item, "col-2", "col-1");
        }
    } else {
        for (let pair of class_pairs) {
            toggle_class(pair[0], pair[1], pair[2]);
        }
        for (let item of links) {
            toggle_class(item, "col-1", "col-2");
        }
    }
}

window.onload = adjust_main;
window.onresize = adjust_main;

function toggle_class(elem, on, off) {
    elem.classList.remove(off)
    elem.classList.add(on)
}