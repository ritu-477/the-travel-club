function openNav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflowhidden")
    document.querySelector(".iconbox").classList.toggle("cross")
}

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
let currentDate = new Date(2024, 5, 29);
function updateDate() {
    const monthName = months[currentDate.getMonth()];
    const day = currentDate.getDate();
    document.getElementById("date").textContent = monthName + " " + day;
}
document.getElementById("prew").addEventListener("click", function () {
    currentDate.setDate(currentDate.getDate() + 1);
    updateDate();
});
document.getElementById("next").addEventListener("click", function () {
    currentDate.setDate(currentDate.getDate() - 1);
    updateDate();
});

updateDate();
