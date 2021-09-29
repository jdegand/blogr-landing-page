function disableScroll() {
    document.body.classList.add("stop-scrolling");
  }
  
  function enableScroll() {
    document.body.classList.remove("stop-scrolling");
  }
  
  document.getElementById("hamburger").addEventListener("click", ()=> {
    
    let hamburgerIcon = document.getElementById("hamburger");
    
    const nav = document.querySelector(".nav");

    const mobileNav = document.querySelector(".left-and-right-nav-container");

    const leftNav = document.querySelector(".left-nav");
    const rightNav = document.querySelector(".right-nav");
    
    nav.classList.toggle("open");
  
    if(nav.classList.contains("open")){
        hamburgerIcon.src = "images/icon-close.svg";
        mobileNav.classList.add("mobile-nav-open");
        leftNav.classList.add('block');
        rightNav.classList.add('block');
        disableScroll();
    } else {
        nav.classList.remove("open");
        mobileNav.classList.remove("mobile-nav-open");
        leftNav.classList.remove('block');
        rightNav.classList.remove('block');
        hamburgerIcon.src = "images/icon-hamburger.svg";
        enableScroll();
    }
  })


// If put inside the hamburger click handler, you get double the amount of events 

document.querySelectorAll('.dark').forEach(arrow => arrow.addEventListener('click', darkArrowOpen))
document.querySelectorAll('.light').forEach(arrow => arrow.addEventListener('click', lightArrowOpen))

function darkArrowOpen(event) {
  // Using nextElementSibling allows you to avoid using indexes in the forEach
  // Using toggle avoids, checking the classList with contains
  event.target.classList.toggle('rotate');
  event.target.nextElementSibling.classList.toggle('arrow-menu-open');
}

function lightArrowOpen(event){
  // Add another nextElementSibling since I duplicated arrows in the html
  event.target.classList.toggle('rotate');
  event.target.nextElementSibling.nextElementSibling.classList.toggle('arrow-menu-open');
}

//This approach works fine on the mobile version but on desktop you can get overlapping - styled around this
// vs scrapping it.