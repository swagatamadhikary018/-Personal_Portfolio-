var typed = new Typed('#text', {
    strings: ['FrontEnd Developer', 'Full Stack Developer', 'Web Developer'],
    typeSpeed: 60,
    backSpeed: 50,
    backDelay: 600,
    loop: true,
})
var typed = new Typed('#text2', {
    strings: ['FrontEnd Developer', 'Full Stack Developer', 'Web Developer'],
    typeSpeed: 60,
    backSpeed: 50,
    backDelay: 600,
    loop: true,
})

const readmorebtn = document.querySelector('.readmorebtn');
const text = document.querySelector('.text');
const showmore = document.querySelector('.readmoretext');


const media = window.matchMedia('(max-width: 500px)');
const media1 = window.matchMedia('(max-width: 650px)');
const media2 = window.matchMedia('(max-width: 900px)');
const media3 = window.matchMedia('(max-width: 1075px)');
const media4 = window.matchMedia('(max-width: 1300px)');

readmorebtn.addEventListener('click', (e) => {
    text.classList.toggle('show-more');

    if (media.matches && readmorebtn.innerText === 'Read More...') {
        readmorebtn.innerText = 'Read Less';
        showmore.style.display = 'inline';

        // document.querySelectorAll('.about-text')[0].style.height = "150vh";
        document.querySelectorAll('.about-text')[0].style.height = "100%";
        document.querySelectorAll('.container')[0].style.padding = "9vh 30px";
        // document.querySelectorAll('.subtitle2')[0].style.padding = "70px 0px 0px 0px";
    } else if (media1.matches && readmorebtn.innerText === 'Read More...') {
        readmorebtn.innerText = 'Read Less';
        showmore.style.display = 'inline';

        document.querySelectorAll('.about-text')[0].style.height = "170vh";
        // document.querySelectorAll('.container')[0].style.padding = "13% 5%";
    } else if (media2.matches && readmorebtn.innerText === 'Read More...') {
        showmore.style.display = 'inline';

        readmorebtn.innerText = 'Read Less';

        document.querySelectorAll('.about-text')[0].style.height = "150vh";

        // document.querySelectorAll('.container')[0].style.padding = "7% 5%";

    } else if (media3.matches && readmorebtn.innerText === 'Read More...') {
        showmore.style.display = 'inline';

        readmorebtn.innerText = 'Read Less';
        document.querySelectorAll('.about-text')[0].style.height = "161vh";
        document.querySelectorAll('.container')[0].style.padding = "10vh 5vw";

    } else if (media4.matches && readmorebtn.innerText === 'Read More...') {
        showmore.style.display = 'inline';

        readmorebtn.innerText = 'Read Less';

        document.querySelectorAll('.about-text')[0].style.height = "160vh";
        document.querySelectorAll('.container')[0].style.padding = "10vh 5vw";
    } else if (!media4.matches && readmorebtn.innerText === 'Read More...') {
        showmore.style.display = 'inline';

        readmorebtn.innerText = 'Read Less';

        document.querySelectorAll('.about-text')[0].style.height = "100%";
        document.querySelectorAll('.container')[0].style.padding = "0vh 5vw";
    } else {

        if (media.matches && readmorebtn.innerText === 'Read Less') {
            showmore.style.display = 'none';
            readmorebtn.innerText = 'Read More...';

            //  document.querySelectorAll('.about-text')[0].style.height = "110vh";
            document.querySelectorAll('.about-text')[0].style.height = "100%";
            document.querySelectorAll('.container')[0].style.padding = "9vh 30px";
        } else if (media1.matches && readmorebtn.innerText === 'Read Less') {
            showmore.style.display = 'none';
            readmorebtn.innerText = 'Read More...';

            document.querySelectorAll('.about-text')[0].style.height = "110vh";
            document.querySelectorAll('.container')[0].style.padding = "65px 30px";
        } else if (media2.matches && readmorebtn.innerText === 'Read Less') {
            showmore.style.display = 'none';
            readmorebtn.innerText = 'Read More...';

            document.querySelectorAll('.about-text')[0].style.height = "110vh";
            document.querySelectorAll('.container')[0].style.padding = "65px 30px";
        } else if (media3.matches && readmorebtn.innerText === 'Read Less') {
            showmore.style.display = 'none';
            readmorebtn.innerText = 'Read More...';

            document.querySelectorAll('.about-text')[0].style.height = "100vh";
            document.querySelectorAll('.container')[0].style.padding = "15vh 5vw 5vh 5vw";
        } else if (media4.matches && readmorebtn.innerText === 'Read Less') {
            showmore.style.display = 'none';
            readmorebtn.innerText = 'Read More...';

            document.querySelectorAll('.about-text')[0].style.height = "100vh";
            document.querySelectorAll('.container')[0].style.padding = "15vh 5vw 5vh 5vw";
        } else {
            // Full Screen

            readmorebtn.innerText = 'Read More...';
            showmore.style.display = 'none';

            document.querySelectorAll('.about-text')[0].style.height = "100%";
        }

    }
})


var tablinks = document.getElementsByClassName("tablinks");
var tabcontents = document.getElementsByClassName("tabcontents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("activelink");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("activetab");
    }
    event.currentTarget.classList.add("activelink");
    document.getElementById(tabname).classList.add("activetab");
}


function openmenu() {
    document.querySelectorAll('.navbar')[0].style.right = "0px";
    document.querySelectorAll('.bx')[0].style.display = "none";
}

function closemenu() {
    document.querySelectorAll('.navbar')[0].style.right = "-200px";
    document.querySelectorAll('.bx')[0].style.display = "block";

}

window.addEventListener('scroll', () => {
    const scrollingDiv = document.getElementById('scrollingDiv');
    if (window.scrollY > 0) {
        scrollingDiv.style.opacity = '1'; // Make the div visible
        scrollingDiv.style.visibility = 'visible'; // Make the div visible
    } else {
        scrollingDiv.style.opacity = '0'; // Hide the div
        scrollingDiv.style.visibility = 'hidden'; // Hide the div
    }
});


// document.addEventListener('DOMContentLoaded', function() {
//     const colors = ['rgb(30, 201, 30)', '#1E90FF', '#FF8C00', '#ff004f', '#F4B400', '#00e1ff']; 
//     const div = document.getElementById('scrollingDiv');
//     let colorIndex = 0;

//     function changeBackgroundColor() {
//         div.style.backgroundColor = colors[colorIndex];
//         colorIndex = (colorIndex + 1) % colors.length; 
//     }

//     setInterval(changeBackgroundColor, 2000); 
// });


const colors = ['rgb(30, 201, 30)', '#1E90FF', '#FF8C00', '#ff004f', '#F4B400', '#00e1ff'];
const div = document.getElementById('change');

let colorIndex = 0;

function changeBackgroundColor() {
    div.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}
setInterval(changeBackgroundColor, 2000);