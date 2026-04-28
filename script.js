window.onload = () => window.scrollTo(0, 0);

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    const offset = 80;
const top = target.offsetTop - offset;

window.scrollTo({
  top: top,
  behavior: "smooth"
});

    resetAnimations(target);
  });
});

function scrollToSection(id) {
  const section = document.getElementById(id);

  if (section) {
    const offset = 80; // navbar height adjustment
    const top = section.offsetTop - offset;

    window.scrollTo({
      top: top,
      behavior: "smooth"
    });
  }
}

const text = ["Frontend Developer", "Data Science Enthusiast", "Problem Solver"];
let i = 0, j = 0, current = "", deleting = false;

function type() {
  current = text[i];

  if (!deleting) {
    document.querySelector(".typing").textContent = current.substring(0, j++);
    if (j > current.length) {
      deleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    document.querySelector(".typing").textContent = current.substring(0, j--);
    if (j === 0) {
      deleting = false;
      i = (i + 1) % text.length;
    }
  }

  setTimeout(type, deleting ? 50 : 100);
}
type();

window.addEventListener("scroll", () => {
  document.querySelectorAll(".progress-bar").forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      bar.style.width = bar.getAttribute("data-width");
    }
  });
});

function resetAnimations(section) {
  section.querySelectorAll(".progress-bar").forEach(bar => {
    bar.style.width = "0";
  });

  setTimeout(() => {
    section.querySelectorAll(".progress-bar").forEach(bar => {
      bar.style.width = bar.getAttribute("data-width");
    });
  }, 300);
}