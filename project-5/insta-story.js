let images = [
  {
    src: "images/peacock.webp",
  },
  {
    src: "images/eagle.webp",
  },
  {
    src: "images/lion.webp",
  },
  {
    src: "images/deer.webp",
  },
  {
    src: "images/model.webp",
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
