let images = [
  {
    src: "images/peacock.webp",
    story: "images/peacock.webp",
  },
  {
    src: "images/eagle.webp",
    story: "images/eagle.webp",
  },
  {
    src: "images/lion.webp",
    story: "images/lion.webp",
  },
  {
    src: "images/deer.webp",
    story: "images/deer.webp",
  },
  {
    src: "images/model.webp",
    story: "images/model.webp",
  },
];

let story = "";
images.forEach((image, index) => {
  story += `<div class="story">
                  <img src="${image.src}" id=${index} alt="img" />
              </div>`;
});

let stories = document.querySelector(".stories");
stories.innerHTML = story;

stories.addEventListener("click", (dets) => {
  
  document.querySelector("#fullscreen").style.display = "block";
  document.querySelector("#fullscreen").style.backgroundImage = `url(${images[dets.target.id].story})`;

  setTimeout(() => {
    document.querySelector("#fullscreen").style.display = "none";
  }, 3000);
});
