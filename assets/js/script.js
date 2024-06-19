function openNav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflowhidden")
    document.querySelector(".iconbox").classList.toggle("cross")
}

$(document).ready(function () {
    $('.travel__linelink').on('click', function () {
        $('.travel__linelink').removeClass('active');
        $(this).addClass('active');
    })
});


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

// scroll-to -top-button////
const mybutton = document.querySelector(".topBtn");
const show = document.querySelector(".show")

window.addEventListener("scroll", function () {
    if (window.scrollY > 600) {
        mybutton.classList.add("show")
    }
    else {
        mybutton.classList.remove("show")
    }
})
mybutton.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;

});


$('.responsive1').slick({
    dots: true,
    infinite: true,
    speed: 200,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: ".next-arrow",
    prevArrow: ".prew-arrow",
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },

        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,

            }

        },

    ]
});
$('.responsive2').slick({
    dots: true,
    infinite: true,
    speed: 200,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: ".next1-arrow",
    prevArrow: ".prew1-arrow",
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },

        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,

            }

        },

    ]
});

AOS.init({
    duration: 1200,
    once: true
})