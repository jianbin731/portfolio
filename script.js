const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

const video = document.getElementById("header-video");

// Function to play the video
function playVideo() {
  video.play();
}

// Function to pause the video
function pauseVideo() {
  video.pause();
}

function expandVideo() {
  video.style.transform = "scale(1.1)";
}

function resetVideoSize() {
  video.style.transform = "scale(1)";
}

video.addEventListener("mouseenter", expandVideo);
video.addEventListener("mouseleave", resetVideoSize);

// Event listener for mouse enter or click
document
  .querySelector(".video-container")
  .addEventListener("mouseenter", playVideo);

document.querySelector(".video-container").addEventListener("click", playVideo);

// Event listener for mouse leave
document
  .querySelector(".video-container")
  .addEventListener("mouseleave", pauseVideo);
