/* import Scrollbar from 'smooth-scrollbar';

// Apply the smooth scroll effect to the entire page
Scrollbar.init(document.querySelector('body'), {
    damping: 0.1,  // Adjusts smoothness; lower value = smoother
    renderByPixels: true
});
 */
//  COLLAPSING THE NAV MENU WHEN A LINK IS CLICKED
const navbarCollapse = document.getElementById('navbarSupportedContent');
const navlink = document.querySelectorAll('.nav-link')

navlink.forEach(link => {
    link.addEventListener('click', () => {
        // Collapse the navbar if it is expanded
        const bootstrapCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false // Prevent toggling if it's already collapsed
        });
        bootstrapCollapse.hide();
    });
});


/* FIX FOR show class not being removed*/
window.addEventListener("resize", function () {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (window.innerWidth >= 768) {
      navbarCollapse.classList.remove("show");
    }
  });



/*--------------------------------------------------------------------------------------------CHANGING COLOR OF THE NAVBAR--------------------------------------------------*/

const navigationbar = document.querySelectorAll('.navbar')[0]
const contactbar = document.querySelectorAll('.contact')[0]
window.addEventListener("scroll", () =>{
    
    const section = document.querySelector('#section1')
    const photosection = document.querySelector('#photos')

    if(window.scrollY>=70){
        navigationbar.classList.remove("topbar_start")
        navigationbar.classList.add("topbar_")
    }else if(window.scrollY<70){
        navigationbar.classList.remove("topbar_");
        navigationbar.classList.add("topbar_start")
    }  

    if( (window.scrollY>=section.offsetHeight - 200) && (window.scrollY < (section.offsetHeight + photosection.offsetHeight - 400)))
    {
        navigationbar.classList.remove("topbar_")
        navigationbar.classList.add("topbar_photos")
        /* contactbaricon.forEach(icon => {
            icon.offsetHeight;
            icon.classList.add("gobelow")
        }) */
        contactbar.classList.add("gobelow")
    }else{
        navigationbar.classList.remove("topbar_photos")
       /*  contactbaricon.forEach(icon => {
            icon.classList.remove("gobelow")
        }) */
        contactbar.classList.remove("gobelow")
        /* navigationbar.classList.add("topbar_") */ /* if uncommented this code would keep adding topbar_ thus in the start of page also it would be added despite of us wanting to remove it */
    }
   
})

/* The HTMLElement.offsetTop read-only property returns the distance from the outer border of the current element (including its margin) to the top padding edge of the offsetParent, the closest positioned ancestor element. */


/*-----------------------------------------------------------------------SO MUCH CODE JUST TO HIGHLIGHT THE CURRENT SECTION LINK---------------------------------------------------------------------*/
const navLinks = document.querySelectorAll(".navbar-nav .nav-link")
console.log(navLinks.length)

window.addEventListener("scroll", () =>{
    
    const section = document.querySelector('#section1')
    const photosection = document.querySelector('#photos')
    const theatresection = document.querySelector('#theatre')
    const devsection = document.querySelector('#dev')
    const filmsection = document.querySelector('#filmmaking')
    const travelsection = document.querySelector('#travel')

    let where = ""

    if(window.scrollY >= section.offsetHeight && window.scrollY < (section.offsetHeight + photosection.offsetHeight - 200) ){
         where="photos"
    } else if(window.scrollY >= (section.offsetHeight + photosection.offsetHeight - 200) && window.scrollY < (section.offsetHeight + photosection.offsetHeight + theatresection.offsetHeight - 200)){
         where="theatre"
    } else if(window.scrollY >= (section.offsetHeight + photosection.offsetHeight + theatresection.offsetHeight - 200) && window.scrollY < (section.offsetHeight + photosection.offsetHeight + theatresection.offsetHeight + filmsection.offsetHeight - 200)){
         where="filmmaking"
    } else if(window.scrollY >= (section.offsetHeight + photosection.offsetHeight + theatresection.offsetHeight + filmsection.offsetHeight - 200) && window.scrollY < (section.offsetHeight + photosection.offsetHeight + theatresection.offsetHeight + filmsection.offsetHeight + devsection.offsetHeight - 200)){
         where="dev"
    } else if(window.scrollY >= (section.offsetHeight + photosection.offsetHeight + theatresection.offsetHeight + filmsection.offsetHeight + devsection.offsetHeight - 200)){
        where="travel"
    } else{
        where=""
    }

   console.log(where)

    navLinks.forEach((link) => {
        link.classList.remove("active"); // Remove active class from all links
        if (link.getAttribute("href") === `#${where}`) {
            link.classList.add("active"); // Add active class to the current section's link
        }
    })

})




/* // Select the section element
const photobackground = document.querySelector('.photobackground');

// Function to handle the zoom effect on page load
function applyZoomEffect() {
    // Apply zoom effect immediately on page load by increasing background-size
    photobackground.style.backgroundSize = 'cover, 120%';  // Start zoomed in (second background zoomed)

    // After a short delay (to trigger the effect), reset to normal size (zoom out)
    setTimeout(() => {
        photobackground.style.backgroundSize = 'cover, cover';  // Final background size back to normal
    }, 100); // Short delay to apply zoom-in first
}

// Apply the zoom effect on page load
window.addEventListener('load', applyZoomEffect); */




 /*-----------------------------------------------------------------IMPLEMENTATION OF SCROLL ON PROJECT TILES--------------------------------------------------------------------*/
const scrollContainer = document.querySelector('.projectTiles');
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');

const scrollAmount = 400; // Adjust scroll amount as needed

function updateButtons() {
    leftBtn.style.display = scrollContainer.scrollLeft === 0 ? "none" : "block";
    rightBtn.style.display =
    scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth
        ? "none"
        : "block";
  }

// Scroll Left
leftBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

// Scroll Right
rightBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

scrollContainer.addEventListener("scroll", updateButtons);



/* -------------------------------------LOCKING SCROLL BEHIND OVERLAY AND OPENING AND CLOSING OVERLAY ----------------------------*/

const headerNavbar = document.querySelector("header")
const devsec = document.getElementById('dev')

let scrollPosition = window.scrollY;
let clickListenerFn;
/* to open and close view all projects overlay */
function openOverlay() {
    clearTimeout;
    document.getElementById("fulloverlay").classList.add("active");
    scrollPosition = window.scrollY

    document.documentElement.classList.add('customlock');
    headerNavbar.classList.add('pointereventslock')
    devsec.classList.add('pointereventslock')
    /* mainsection.classList.add("customlock"); */

    /* document.body.classList.add('customlock'); */

    console.log("scroll locked")
    setTimeout(() => {
        clickListenerFn =  clicklistener()
     }, 10);
}

function closeOverlay() {
    document.getElementById("fulloverlay").classList.remove("active");

    document.documentElement.classList.remove('customlock');
    headerNavbar.classList.remove('pointereventslock')
    devsec.classList.remove('pointereventslock')
/*     mainsection.classList.remove("customlock"); */
    
/*     document.body.classList.remove('customlock'); */

    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, scrollPosition);
    document.documentElement.style.scrollBehavior = 'smooth';

    console.log("scroll lock opened")
    document.removeEventListener("click", clickListenerFn);
}

function clicklistener(){
    const overlay = document.getElementById("fulloverlay");
    // Define the listener function that you want to remove later
    const listener = (event) => {
       if (!overlay.contains(event.target)) {
          console.log("Clicked outside overlay!");
          closeOverlay(); // Close overlay if clicked outside
       }
    };
 
    // Add the listener
    document.addEventListener("click", listener);
 
    // Return the function reference to be used for removal
    return listener;
}
/*-------------------------------------------------------------------------CODE FOR IMPLEMENTATION OF IMAGE SLIDER-----------------------------------------------------------------*/
const track = document.getElementById("imagetrack");

window.onpointerdown = e => {
   track.dataset.mouseDownAt = e.clientX;
}

window.onpointerup = () => {
   track.dataset.mouseDownAt = "0";
   track.dataset.prevPercentage = track.dataset.percentage;
}

window.onpointermove = e => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    track.dataset.percentage = nextPercentage;

    console.log(nextPercentage)

    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
    }, { duration: 1200, fill: "forwards" });


    for (const image of track.getElementsByClassName("sliderimage")) {
        image.animate({
            objectPosition: `${100 + nextPercentage}% center`
        }, { duration: 1200, fill: "forwards" });
    }
}

// ---------------------------------------SO MUCH CODE FOR JUST SCROLLING LOL THINGS I DO FOR PERFECTION 
let scrolltimeout;
let wheelListenerAdded = false; // Track if wheel listener is active

track.addEventListener("mouseenter", () => {
  console.log("Mouse entered the target section");

  if (!wheelListenerAdded) {
    window.addEventListener("wheel", handleWheel, { passive: false });
    wheelListenerAdded = true;
  }
});

track.addEventListener("mouseleave", () => {
  console.log("Mouse left the target section");

  if (wheelListenerAdded) {
    window.removeEventListener("wheel", handleWheel);
    wheelListenerAdded = false;
  }
});

function handleWheel(e) {
  e.preventDefault(); // Lock scrolling for the entire webpage

  clearTimeout(scrolltimeout);
  let x = e.deltaY > 0 ? 80 : -80;

  scrolltimeout = setTimeout(() => {
    const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) - x;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
    track.dataset.percentage = nextPercentage;

    track.animate(
      {
        transform: `translate(${nextPercentage}%, -50%)`,
      },
      { duration: 2000, fill: "forwards" }
    );

    for (const image of track.getElementsByClassName("sliderimage")) {
      image.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 2000, fill: "forwards" }
      );
    }

    console.log("Image track scrolled");
  }, 20);
}

