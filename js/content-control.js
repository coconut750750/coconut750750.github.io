var MIN_SIZE = 496;
var class_pairs = null;
var bio = null
var bio_margin = null
var name_elem = null
var name_margin = null
var links = null

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

function setup() {
    bio = document.getElementById("bio");
    bio_margin = document.getElementById("bio-margin");
    name_elem = document.getElementById("name");
    name_margin = document.getElementById("name-margin");
    links = document.getElementsByClassName("link");

    // element, desktop class, mobile class
    class_pairs = [[bio, "col-5", "col-10"], 
                   [bio, "mt-0", "mt-4"],
                   [bio_margin, "col-6", "col-1"],
                   [name_elem, "mr-5", "mr-0"],
                   [name_elem, "col-3", "col-10"],
                   [name_elem, "text-right", "text-center"],
                   [name_margin, "col-3", "col-1"]];

    adjust_main();
}

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

function toggle_class(elem, on, off) {
    elem.classList.remove(off)
    elem.classList.add(on)
}

window.onload = setup;
window.onresize = adjust_main;