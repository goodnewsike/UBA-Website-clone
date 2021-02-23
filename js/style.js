/* STYLES JS */

// The debounce function receives our function as a parameter
const debounce = (fn) => {

  // This holds the requestAnimationFrame reference, so we can cancel it if we wish
  let frame;

  // The debounce function returns a new function that can receive a variable number of arguments
  return (...params) => {
    
    // If the frame variable has been defined, clear it now, and queue for next frame
    if (frame) { 
      cancelAnimationFrame(frame);
    }

    // Queue our function call for the next frame
    frame = requestAnimationFrame(() => {
      
      // Call our function and pass any params we received
      fn(...params);
    });

  } 
};


// Reads out the scroll position and stores it in the data attribute
// so we can use it in our stylesheets
const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
}

// Listen for new scroll events, here we debounce our `storeScroll` function
document.addEventListener('scroll', debounce(storeScroll), { passive: true });

// Update scroll position for first time
storeScroll();





// // SOCIAL PANEL JS
// const floating_btn = document.querySelector(".floating-btn");
// const close_btn = document.querySelector(".close-btn");
// const social_panel_container = document.querySelector(".social-panel-container");

// floating_btn.addEventListener("click", () => {
//   social_panel_container.classList.toggle("visible")
// });

// close_btn.addEventListener("click", () => {
//   social_panel_container.classList.remove("visible")
// });



/* Toggler 
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('ul.navbar-nav');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });
}

navSlide();
*/

