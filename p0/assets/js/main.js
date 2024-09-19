/**
* Template Name: Mentor
* Template URL: https://bootstrapmade.com/mentor-free-education-bootstrap-theme/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

})();










// This is Number.html
const numbers = [...Array(10).keys()].map(n => n + 1); // Numbers 1 to 10
const pairs = [...numbers, ...numbers]; // Create pairs
const shuffledPairs = pairs.sort(() => 0.5 - Math.random()); // Shuffle pairs

const gameContainer = document.querySelector('.game-container');
let firstCard = null;
let secondCard = null;
let matches = 0;

// Create cards dynamically
shuffledPairs.forEach(number => {
  const card = document.createElement('div');
  card.classList.add('card', 'hidden', 'border', 'rounded');
  card.textContent = number;

  card.addEventListener('click', () => {
    if (!firstCard || !secondCard) {
      card.classList.remove('hidden');
      card.classList.add('flipped');

      if (!firstCard) {
        firstCard = card;
      } else if (!secondCard && card !== firstCard) {
        secondCard = card;
        checkMatch();
      }
    }
  });

  gameContainer.appendChild(card);
});

// Check if the two flipped cards match
function checkMatch() {
  if (firstCard.textContent === secondCard.textContent) {
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    matches++;
    resetCards();

    if (matches === numbers.length) {
      document.getElementById('message').textContent = "Congratulations! You've matched all the numbers!";
    }
  } else {
    setTimeout(() => {
      firstCard.classList.add('hidden');
      secondCard.classList.add('hidden');
      resetCards();
    }, 1000);
  }
}

// Reset card selections
function resetCards() {
  firstCard = null;
  secondCard = null;
}

//**************************************/
//**************************************/



// **** phonic js*****

  // const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  //   let currentLetter = '';
  //   let score = 0;

  //   const letterDisplay = document.getElementById('letterDisplay');
  //   const scoreDisplay = document.getElementById('score');
  //   const restartBtn = document.getElementById('restartBtn');

  //   // Function to pick a random letter
  //   function generateRandomLetter() {
  //     const randomIndex = Math.floor(Math.random() * alphabet.length);
  //     currentLetter = alphabet[randomIndex];
  //     letterDisplay.textContent = currentLetter;
  //   }

  //   // Function to handle key press
  //   function handleKeyPress(event) {
  //     const pressedKey = event.key.toUpperCase();
  //     if (pressedKey === currentLetter) {
  //       score++;
  //       scoreDisplay.textContent = score;
  //       generateRandomLetter();
  //     }
  //   }

  //   // Restart the game
  //   restartBtn.addEventListener('click', () => {
  //     score = 0;
  //     scoreDisplay.textContent = score;
  //     generateRandomLetter();
  //   });

  //   // Initialize the game
  //   generateRandomLetter();

  //   // Listen for key presses
  //   document.addEventListener('keydown', handleKeyPress);