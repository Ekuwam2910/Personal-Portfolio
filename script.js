const desktopPhrases = [
    "Software Developer | Digital Literacy Facilitator | Cohort Lead",     
    "Image Annotator | Tech Explorer | Problem Solver",
    "AI Prompt Engineer | Creative Thinker | Lifelong Learner"
];
const mobilePhrases = [
  "Software Developer",     
  "Digital Facilitator",
  "AI Prompt Engineer"
];

const phrases = window.innerWidth <= 768 ? mobilePhrases : desktopPhrases;

let i = 0; // phrase index
let j = 0; // letter index
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
    isEnd = false;
    const typing = document.getElementById('typing');

    typing.innerHTML = currentPhrase.join('');

    if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j]);
            j++;
            typing.innerHTML = currentPhrase.join('');
        }

        if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop();
            j--;
            typing.innerHTML = currentPhrase.join('');
        }

        if (j === phrases[i].length) {
            isEnd = true;
            isDeleting = true;
            setTimeout(loop, 2000); // pause before deleting
            return;
        }

        if (isDeleting && j === 0) {
            currentPhrase = [];
            isDeleting = false;
            i++;
            if (i === phrases.length) {
                i = 0;
            }
        }
    }

    const speed = isEnd ? 200 : isDeleting ? 50 : 100;
    setTimeout(loop, speed);
}

loop();


// Typing effect for name
const names = ["Nicodemus", "Ekuwam", "Namaya"];
let nameIndex = 0;
let letterIndex = 0;
let currentName = [];
let isDeletingName = false;
let isEndName = false;

function typeName() {
    isEndName = false;
    const nameSpan = document.getElementById("name");
    nameSpan.innerHTML = currentName.join('');

    if (!isDeletingName && letterIndex <= names[nameIndex].length) {
        currentName.push(names[nameIndex][letterIndex]);
        letterIndex++;
        nameSpan.innerHTML = currentName.join('');
    }

    if (isDeletingName && letterIndex <= names[nameIndex].length) {
        currentName.pop();
        letterIndex--;
        nameSpan.innerHTML = currentName.join('');
    }

    if (letterIndex === names[nameIndex].length) {
        isEndName = true;
        isDeletingName = true;
        setTimeout(typeName, 1500); // pause before deleting
        return;
    }

    if (isDeletingName && letterIndex === 0) {
        currentName = [];
        isDeletingName = false;
        nameIndex++;
        if (nameIndex === names.length) {
            nameIndex = 0;
        }
    }

    const speed = isEndName ? 200 : isDeletingName ? 50 : 120;
    setTimeout(typeName, speed);
}

typeName();

// Scroll-triggered reveal
const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // Uncomment below if you want animation to run only once
            // observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 }); // Trigger when 20% of section is visible

hiddenElements.forEach(el => observer.observe(el));

// Animate skill progress bars on scroll
const progressBars = document.querySelectorAll('.progress');

const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const width = entry.target.style.width;
      entry.target.style.width = 0; // reset
      setTimeout(() => {
        entry.target.style.width = width; // animate fill
      }, 100);
      progressObserver.unobserve(entry.target); // run once
    }
  });
}, { threshold: 0.3 });

progressBars.forEach(bar => progressObserver.observe(bar));

