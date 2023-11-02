import * as PIXI from "pixi.js";
import gsap from "gsap";

const init = (images, setActiveIndex = () => {}) => {
  var sliderIndex = 0;
  const mainElement = document.querySelector("main");
  const imageContainer = document.querySelector(".car-image");
  var prevSliderIndex = sliderIndex;
  var slideImages;
  var isPlaying = false;

  const renderer = new PIXI.autoDetectRenderer({
    transparent: true,
    height: window.innerHeight * 0.75,
    width: window.innerWidth * 0.75,
  });
  const stage = new PIXI.Container();
  const slidesContainer = new PIXI.Container();

  const displacementSprite = PIXI.Sprite.from(
    "https://thumbs.dreamstime.com/b/seamless-geometric-pattern-grayscale-background-vector-63275851.jpg"
  );
  displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;

  const displacementFilter = new PIXI.DisplacementFilter(displacementSprite);
  displacementFilter.scale.x = 0;
  displacementFilter.scale.y = 0;

  function loadImages() {
    let carImageElement = document.querySelector(".car-image");

    if (!carImageElement.hasChildNodes()) {
      carImageElement.appendChild(renderer.view);
    }
    stage.addChild(slidesContainer);
    stage.filters = [displacementFilter];

    for (let i of images) {
      const texture = PIXI.Texture.from(i, {
        width: 150,
      });
      const img = new PIXI.Sprite(texture);
      img.anchor.set(0.5);
      img.x = renderer.width / 2;
      img.y = 2500;

      slidesContainer.addChild(img);
    }
    slidesContainer.children[0].alpha = 1;
    slidesContainer.children[0].y = renderer.height / 2;
    slideImages = slidesContainer.children;
  }

  function updateImagesOnCanvas() {
    if (isPlaying) {
      return;
    }
    isPlaying = true;
    const timeline = new gsap.timeline({
      onComplete: () => {
        isPlaying = false;
      },
    });

    timeline
      .to(displacementFilter.scale, 1.2, { x: 0, y: 200 })
      .to(slideImages[prevSliderIndex], 1.5, { y: -1000 }, "-=.9")
      .to(slideImages[prevSliderIndex], 0, { y: 2500 })
      .to(slideImages[sliderIndex], 1, { y: renderer.height / 2 }, "-=1.7")
      .to(displacementFilter.scale, 0.5, { x: 0, y: 0 }, "-=1.1");
  }

  function renderLoop() {
    renderer.render(stage);
    requestAnimationFrame(renderLoop);
  }

  function updateText() {
    document.querySelector(
      `input[type="radio"][value="${sliderIndex}"]`
    ).checked = true;

    imageContainer.style["margin-top"] = `${20 * Math.abs(sliderIndex)}px`;
  }

  let carImageElement = document.querySelector(".car-image");

  if (!carImageElement.hasChildNodes()) {
    let listEl = mainElement.querySelectorAll(`li`);

    console.log("listEl", listEl);
    listEl.forEach((listElement, index) => {
      listElement.addEventListener("click", (event) => {
        if (isPlaying) {
          return;
        }
        prevSliderIndex = sliderIndex;
        sliderIndex = index;

        if (prevSliderIndex !== sliderIndex) {
          if (sliderIndex < 0) {
            sliderIndex = images.length - 1;
          }
          updateText();
          updateImagesOnCanvas();
          setActiveIndex(sliderIndex);
        }
      });
    });
  }

  loadImages();
  renderLoop();
};

export default init;
