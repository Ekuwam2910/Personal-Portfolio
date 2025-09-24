// Typing effect for role phrases
const phrases = [
  "Software Developer | Digital Literacy Facilitator | Cohort Lead",
  "Image Annotator | Tech Explorer | Problem Solver",
  "AI Prompt Engineer | Creative Thinker | Lifelong Learner"
];

let phraseIndex = 0;
let letterIndex = 0;
let currentPhrase = [];
let isDeleting = false;

function loopPhrases() {
  const typing = document.getElementById("typing");

  if (phraseIndex >= phrases.length) phraseIndex = 0;

  typing.innerHTML = currentPhrase.join("");

  if (!isDeleting && letterIndex < phrases[phraseIndex].length) {
    currentPhrase.push(phrases[phraseIndex][letterIndex]);
    letterIndex++;
  } else if (isDeleting && letterIndex > 0) {
    currentPhrase.pop();
    letterIndex--;
  }

  if (letterIndex === phrases[phraseIndex].length) {
    isDeleting = true;
    setTimeout(loopPhrases, 2000); // pause before deleting
    return;
  }

  if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    phraseIndex++;
    currentPhrase = [];
  }

  const speed = isDeleting ? 50 : 100;
  setTimeout(loopPhrases, speed);
}

loopPhrases();

// Typing effect for Name

const names = ["Nicodemus", "Ekuwam", "Namaya"];
let nameIndex = 0;
let nameLetterIndex = 0;
let currentName = [];
let deletingName = false;

function loopNames() {
  const nameSpan = document.getElementById("name");

  if (nameIndex >= names.length) nameIndex = 0;

  nameSpan.innerHTML = currentName.join("");

  if (!deletingName && nameLetterIndex < names[nameIndex].length) {
    currentName.push(names[nameIndex][nameLetterIndex]);
    nameLetterIndex++;
  } else if (deletingName && nameLetterIndex > 0) {
    currentName.pop();
    nameLetterIndex--;
  }

  if (nameLetterIndex === names[nameIndex].length) {
    deletingName = true;
    setTimeout(loopNames, 1500);
    return;
  }

  if (deletingName && nameLetterIndex === 0) {
    deletingName = false;
    nameIndex++;
    currentName = [];
  }

  const speed = deletingName ? 50 : 120;
  setTimeout(loopNames, speed);
}

loopNames();



// Scroll-triggered reveal

const hiddenElements = document.querySelectorAll(".hidden");

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // run once
      }
    });
  },
  { threshold: 0.2 }
);

hiddenElements.forEach((el) => revealObserver.observe(el));



// Animate skill progress bars

const progressBars = document.querySelectorAll(".progress");

const barObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const width = target.getAttribute("data-width");
        target.style.width = width;
        observer.unobserve(target); // animate only once
      }
    });
  },
  { threshold: 0.3 }
);

progressBars.forEach((bar) => {
  const width = bar.style.width;
  bar.setAttribute("data-width", width);
  bar.style.width = 0; // reset before animation
  barObserver.observe(bar);
});

// Mobile Nav Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
