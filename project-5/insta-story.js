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
    src: "images/deer.webp",
    story: "images/deer.webp",
  },
  {
    src: "images/model.webp",
    story: "images/model.webp",
  },
  {
    src: "images/building.webp",
    story: "images/building.webp",
  },
  {
    src: "images/cars.webp",
    story: "images/cars.webp",
  },
  {
    src: "images/flower.webp",
    story: "images/flower.webp",
  },
  {
    src: "images/mac.webp",
    story: "images/mac.webp",
  },
  {
    src: "images/swan.webp",
    story: "images/swan.webp",
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
