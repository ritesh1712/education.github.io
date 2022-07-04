let hamburger = document.getElementById("hamburger");
let menu = document.getElementById("menu");
let list = document.getElementById("list")
let closeBtn = document.getElementById("closeBtn");
closeBtn.style.display = "none";
// navigation bar logic
// hamburger
hamburger.addEventListener('click', function () {
    menu.style.display = "block";
    menu.style.background = "white";
    list.style.flexDirection = "column";
    closeBtn.style.display = "block";
    hamburger.style.display = "none";
})

// close button
closeBtn.addEventListener('click', function () {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    hamburger.style.display = "block";

})

// list item
list.addEventListener('click', function () {

    if (hamburger.style.display == 'none') {

        menu.style.display = "none";
        closeBtn.style.display = "none";
        hamburger.style.display = "block";

    }
})

//  Service section logic
let Services = document.getElementById("Services");
let ServicesBtn = document.getElementById("ServicesBtn");
Services.style.display = "none";

ServicesBtn.addEventListener('click', function () {

    if (Services.style.display == 'none') {
        Services.style.display = "flex";
    }
    else {
        Services.style.display = "none";
    }

})

// course section logic
let course = document.getElementById("course");
let coursesBtn = document.getElementById("coursesBtn");
course.style.display = "none";

coursesBtn.addEventListener('click', function () {

    if (course.style.display == 'none') {
        course.style.display = "block";
    }
    else {
        course.style.display = "none";
    }

})

