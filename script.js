// Toggle Dark Mode
let body = document.body;
let darkMdBtn = document.querySelector(".header .dark-mode");

if(localStorage.getItem("dark-mode") == "active") {
    body.classList.add("dark-mode");
} else {
    body.classList.remove("dark-mode");
}

darkMdBtn.addEventListener('click', () => {
    if(body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        localStorage.setItem("dark-mode", "inactive");
    } else {
        body.classList.add("dark-mode");
        localStorage.setItem("dark-mode", "active");    }
})


// Toggle sidebar
let notifBell = document.querySelector("#notifications");
let closeBtn = document.querySelector("#close-btn");
let sideBar = document.querySelector("#side-bar");

notifBell.addEventListener('click', () => {
    if(sideBar.style.left == "0%") {
        sideBar.style.left = "-100%";
    } else {
        sideBar.style.left = "0%";
    } 
})

closeBtn.addEventListener('click', () => {
    sideBar.style.left = "-100%";
})

//Interactive Toggle Switches
let toggleBtns = document.querySelectorAll(".toggle-feature input");

toggleBtns.forEach(toggleSwitch)

function toggleSwitch(btn) {
    btn.addEventListener('click', () => {
        btn.classList.toggle("active");
    })
}