/////////////////
// NAV BAR /////
///////////////

let pagePath = window.location.pathname;
let homePath;
if (pagePath.includes("blog/")) {
  homePath = "..";
} else homePath = ".";

const menuBar = document.getElementById("menuBar");
const menuIcon = document.getElementById("menuIcon");
const bizLogo = document.getElementById("bizLogo");
const bizName = document.getElementById("bizName");
const tagLine = document.getElementById("tagLine");

let screenWidth = window.screen.width;

const onResize = function () {
  screenWidth = window.screen.width;
  if (screenWidth < 500) {
    bizName.style.fontSize = "1.4rem";
    bizLogo.style.height = "30px";
    bizLogo.style.width = "30px";
    menuBar.style.display = "none";
    menuBar.style.borderRadius = "0 0 12px 12px";
    menuBar.style.boxShadow = "0 2px 4px rgb(var(--white-smoke))";
    menuIcon.style.display = "flex";
    tagLine.style.fontSize = ".8rem";
  } else {
    bizName.style.fontSize = "2rem";
    bizLogo.style.height = "50px";
    bizLogo.style.width = "50px";
    menuBar.style.display = "flex";
    menuBar.style.borderRadius = "0";
    menuBar.style.boxShadow = "none";
    menuIcon.style.display = "none";
    tagLine.style.fontSize = "1rem";
  }
};

const closeMenuBar = function () {
  menuBar.style.display = "none";
  menuBar.style.flexDirection = "row";
  menuBar.style.alignItems = "flex-end";
  menuBar.style.position = "static";
  menuBar.style.top = "0px";
  menuBar.style.left = "0px";
  menuBar.style.backgroundColor = "inherit";
  menuBar.style.width = "";
  menuBar.style.padding = "0";
  menuBar.style.paddingLeft = "24px";
  menuIcon.setAttribute("src", `${homePath}/icons/menu.svg`);
  menuIcon.addEventListener("click", openMenuBar);
  menuIcon.removeEventListener("click", closeMenuBar);
  document.removeEventListener("click", outsideClickListener);
};

const openMenuBar = function () {
  menuBar.style.display = "flex";
  menuBar.style.flexDirection = "column";
  menuBar.style.alignItems = "center";
  menuBar.style.position = "absolute";
  menuBar.style.top = "0px";
  menuBar.style.left = "0px";
  menuBar.style.backgroundColor = "rgb(var(--charcoal))";
  menuBar.style.width = "100vw";
  menuBar.style.padding = "3rem";
  menuIcon.style.zIndex = "5";
  menuIcon.setAttribute("src", `${homePath}/icons/close.svg`);
  menuIcon.addEventListener("click", closeMenuBar);
  menuIcon.removeEventListener("click", openMenuBar);
  document.addEventListener("click", outsideClickListener);
};

const outsideClickListener = (event) => {
  if (event.target.id == "menuIcon") {
    return;
  }
  if (
    !menuBar.contains(event.target) &&
    event.target.closest("#menuBar") === null
  ) {
    closeMenuBar();
  }
};

window.addEventListener("resize", onResize);
menuIcon.addEventListener("click", openMenuBar);
onResize();

///////////////////////
// SCROLL-TO-TOP /////
/////////////////////

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const scrollToTopButton = document.getElementById("scrollToTopButton");
const screenHeightScrollDistance = screen.height * 2;
window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (
    document.body.scrollTop > screenHeightScrollDistance ||
    document.documentElement.scrollTop > screenHeightScrollDistance
  ) {
    scrollToTopButton.classList.remove("hidden");
    scrollToTopButton.classList.remove("fadeOut");
    scrollToTopButton.classList.add("fadeIn");
    scrollToTopButton.disabled = false;
    if (menuBar.style.flexDirection === "column") {
      closeMenuBar();
    }
  } else {
    scrollToTopButton.classList.remove("fadeIn");
    scrollToTopButton.classList.add("fadeOut");
    scrollToTopButton.disabled = true;
  }
};

///////////////////
// HOME PAGE /////
/////////////////

const testimonials = document.getElementById("testimonials");
const slideNumber = document.getElementById("slideNumber");
const slideText = document.getElementById("slideText");
const clientPhoto = document.getElementById("clientPhoto");
const clientName = document.getElementById("clientName");
const clientText = document.getElementById("clientTestimonial");
let currentSlide = Math.floor(Math.random() * 20);

const clients = [
  {
    name: "Katherine C.",
    photo: "./testimonials/katherine.jpg",
    testimony: `Matt has given me the tools to be confident and effective while working out on my own at home or at the gym.`,
  },
  {
    name: "Seth N.",
    photo: "./testimonials/seth.jpg",
    testimony: `I started training as a fellow fitness coach looking to improve my existing athleticism. I have not had a serious exercise related injury since.`,
  },
  {
    name: "Ashish B.",
    photo: "./testimonials/ashish.jpg",
    testimony: `Matt was like my personal trainer + physical therapist. He fixed my broken back; within a couple of years I was able to deadlift 275 pounds.`,
  },
  {
    name: "Jessica E.",
    photo: "./testimonials/jessica.jpg",
    testimony: `I honestly thought I knew everything I needed to know about fitness. I was immediately impressed by Matt's knowledge and intelligence.`,
  },
  {
    name: "Justin W.",
    photo: "./testimonials/justin.jpg",
    testimony: `Matt and I have worked together for 3+ years, his experience and knowledge of lifting as well as of how the body works has been invaluable.`,
  },
  {
    name: "Jon P.",
    photo: "./testimonials/jon.jpg",
    testimony: `Thank you for teaching me how to workout without a gym, whether outside, rucking or with body weight movements in my living room.`,
  },
  {
    name: "Wonsun S.",
    photo: "./testimonials/wonsun.jpg",
    testimony: `I was gravely mistaken in categorizing myself as pretty fit. Now, I am stronger than I ever was and I'm even a better runner.`,
  },
  {
    name: "Deborah A.",
    photo: "./testimonials/deborah.jpg",
    testimony: `This is the first time in my LIFE that my HDL has been in the normal range.  Even in my 20's it was never normal. This is so huge.`,
  },
  {
    name: "Brian G.",
    photo: "./testimonials/brian.jpg",
    testimony: `My losing streak officially ended last night; my muscle endurance and stamina ultimately helped me to out-play my opponent.`,
  },
  {
    name: "Malloree T.",
    photo: "./testimonials/mal.jpg",
    testimony: `Not only did the training shape my body, but Matt's focus on mindset changed the way I thought about my body, as well.`,
  },
  {
    name: "Allyson H.",
    photo: "./testimonials/allyson.jpg",
    testimony: `My balance has improved greatly; I can conquer any hill in Seattle. I feel and look more solid and possess body confidence for the first time.`,
  },
  {
    name: "Tom A.",
    photo: "./testimonials/tom.jpg",
    testimony: `How fortunate I was to have you as a trainer, role model and caring friend that instilled confidence in me I didn't have prior.`,
  },
  {
    name: "Mark P.",
    photo: "./testimonials/mark.jpg",
    testimony: `I've learned a TON from you in a very brief time and it took me about 10 minutes to realize how knowledgeable you are.`,
  },
  {
    name: "Rosanna S.",
    photo: "./testimonials/rosanna.jpg",
    testimony: `The biggest victory of all is that working out is not intimidating for me anymore! Thank you again for teaching me to push myself.`,
  },
  {
    name: "Luis L.",
    photo: "./testimonials/luis.jpg",
    testimony: `It wasn't the first time I had a personal trainer, but it was the first time I had a good one. I've never been in this great of shape.`,
  },
  {
    name: "Cathy G.",
    photo: "./testimonials/cathy.jpg",
    testimony: `I love the exercises Matt recommended. I appreciate being able to stay fit without risking injury or stress.`,
  },
  {
    name: "Barbara R.",
    photo: "./testimonials/barbara.jpg",
    testimony: `I never got bored. In fact, I actually became addicted to exercising. Matt encouraged me to trust myself and push harder.`,
  },
  {
    name: "Venu K.",
    photo: "./testimonials/venu.jpg",
    testimony: `Matt is the “injury specialist”. My earlier trainer had no inkling of what the reasons for my pain were, so we would ignore then aggravate it.`,
  },
  {
    name: "Joel H.",
    photo: "./testimonials/joel.jpg",
    testimony: `I feel like my posture is getting better, my mobility is improving and I am naturally standing straighter and feeling stable in my back.`,
  },
];

const nextSlide = () => {
  if (currentSlide == 18) {
    currentSlide = 0;
  } else currentSlide += 1;
  updateSlide();
};

const previousSlide = () => {
  if (currentSlide == 0) {
    currentSlide = 18;
  } else currentSlide -= 1;
  updateSlide();
};

const updateSlide = () => {
  clientPhoto.className = "slidePic";
  requestAnimationFrame((time) => {
    requestAnimationFrame((time) => {
      clientPhoto.className = "slidePic fadeIn";
      clientPhoto.style.backgroundImage = `url(${clients[currentSlide].photo})`;
      clientName.innerHTML = clients[currentSlide].name;
      clientText.innerHTML = clients[currentSlide].testimony;
      slideNumber.innerHTML = `${currentSlide + 1}/19`;
    });
  });
};

if (pagePath == "/index.html") {
  testimonials.addEventListener("touchstart", handleTouchStart, false);
  testimonials.addEventListener("touchmove", handleTouchMove, false);
}

let xDown = null;
let yDown = null;

function getTouches(event) {
  return event.touches;
}

function handleTouchStart(event) {
  const firstTouch = getTouches(event)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

function handleTouchMove(event) {
  if (!xDown || !yDown) {
    return;
  }

  let xUp = event.touches[0].clientX;
  let yUp = event.touches[0].clientY;

  let xDiff = xDown - xUp;
  let yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      //right swipe
      nextSlide();
    } else {
      //left swipe
      previousSlide();
    }
  } else {
    if (yDiff > 0) {
      //down swipe
    } else {
      // up swipe
    }
  }
  // reset values
  xDown = null;
  yDown = null;
}

///////////////////
// SIGN UP PAGE //
/////////////////

const formEmailLabel = document.getElementById("labelEmail");
const formEmail2Label = document.getElementById("labelEmail2");
const formEmail = document.getElementById("formEmail");
const formEmail2 = document.getElementById("formEmail2");
let emailConfirmed = false;

if (formEmail) {
  formEmail.addEventListener("input", () => {
    console.log("Checking");
    if (formEmail.checkValidity()) {
      formEmail2.disabled = false;
      formEmailLabel.setAttribute("class", "formLabel valid");
    } else {
      formEmail2.value = "";
      formEmail2.disabled = true;
      formEmailLabel.setAttribute("class", "formLabel");
    }
    validateEmails();
  });
  formEmail2.addEventListener("input", () => {
    validateEmails();
  });
}

const validateEmails = function () {
  if (formEmail.checkValidity() && formEmail.value == formEmail2.value) {
    formEmailLabel.setAttribute("class", "formLabel valid");
    formEmail2Label.setAttribute("class", "formLabel valid");
    emailConfirmed = true;
  } else {
    formEmail2Label.setAttribute("class", "formLabel");
    emailConfirmed = false;
  }
};

const onSubmit = function (event) {
  if (emailConfirmed) {
    console.log("Form submitted!");
    return true;
  } else {
    console.log("Form failed to submit.");
    formEmail2.focus();
    alert("Emails do not match");
    return false;
  }
};

////////////////
// BLOG PAGE //
//////////////

const closeExpandingText = (element) => {
  element.target.style.transform = "rotate(0deg)";
  element.target.removeEventListener("click", closeExpandingText);
  element.target.addEventListener("click", openExpandingText);

  let hiddenText = element.target.parentNode.nextElementSibling;
  hiddenText.classList.add("hidden");
};

const openExpandingText = (element) => {
  element.target.style.transform = "rotate(90deg)";
  element.target.removeEventListener("click", openExpandingText);
  element.target.addEventListener("click", closeExpandingText);

  let hiddenText = element.target.parentNode.nextElementSibling;
  hiddenText.classList.remove("hidden");
};

// EXPANDING TEXT CONTAINERS

let expandingTextIcons = document.querySelectorAll(".expandingTextIcon");

if (expandingTextIcons) {
  for (let i = 0; i < expandingTextIcons.length; i++) {
    expandingTextIcons[i].addEventListener("click", openExpandingText);
  }
}

///////////////////

// Initial function calls 

// Updates slide to randomly selected currentSlide 
if(clientPhoto){
  updateSlide();
}

console.log(`Hello! 

If you have any comments about my website design or the code, especially if you notice any bugs or suboptimal design, I'd love to hear from you.

    Matt Talley
    info@theliftingschool.com`);
