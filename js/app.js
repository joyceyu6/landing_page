/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

let sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

   
// Scroll to anchor ID using scrollTO event
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    // console.log(window.pageYOffset)
    const activeSection = document.getElementsByClassName('active-section')[0];
    for (let i = 0; i < sections.length; i++){
        const currentSection = sections[i];
        if (currentSection.offsetTop > window.pageYOffset - 40 && currentSection.offsetTop < window.pageYOffset + 200){
            if (activeSection === currentSection){
                return;
            }
            activeSection.classList.remove('active-section');
            currentSection.classList.add('active-section');

            const menuItems = document.querySelectorAll("#navbar__list li");
            const currentItem = menuItems[i];

            document.getElementsByClassName('active-menu')[0].classList.remove('active-menu');
            currentItem.classList.add("active-menu");
        }
        // console.log(`section ${i+1}`);
        // console.log(currentSection.offsetTop);
    }

}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build the nav menu 

for (let i = 0; i < sections.length; i++){
    let currentSection = sections[i];
    if (i == 0) {
        document.getElementById("navbar__list").innerHTML += `<li class="active-menu" data-sectionid="section${i+1}">${currentSection.dataset.nav}</li>`;
        continue;
    }

    document.getElementById("navbar__list").innerHTML += `<li data-sectionid="section${i+1}">${currentSection.dataset.nav}</li>`;
}

// Scroll to section on link click

document.getElementById('navbar__list').addEventListener('click', performAction);
function performAction(e){
    const currentSection = e.target;

    // currentSection.classList.remove("your-active-class");// Remove old active section
    const sectionElement = document.getElementById(currentSection.dataset.sectionid);
    sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' }); 
    // Set newly selected section as active'
    document.getElementsByClassName('active-section')[0].classList.remove('active-section');
    sectionElement.classList.add('active-section');
}






