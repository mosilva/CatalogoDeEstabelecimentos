(() => {
  const homeStyle = document.createElement("script");
  homeStyle.setAttribute("src", "js/styles/homeStyle.js");
  document.body.appendChild(homeStyle);
})();

for (const files of [
  "./js/common/functions.js",
  "./js/styles/general-styles.js",
  "./js/style.js",
  "./js/apis.js",
  "./js/header.js",
  "./js/establishments.js",
  "./js/category.js",
  "./js/footer.js",
]) {
  const script = document.createElement("script");
  script.setAttribute("src", `${files}`);
  document.head.appendChild(script);
}

function carouselGenerate() {
  const home = document.createElement("section");
  home.classList.add("homeContainer");

  const main = document.querySelector("main");
  if (main) {
    main.appendChild(home);
  } else {
    const main = document.createElement("main");
    document.body.appendChild(main);
    main.appendChild(home);
  }

  const title = document.createElement("h1");
  title.textContent = "Últimos estabelecimentos adicionados";
  home.appendChild(title);
  const firstDiv = document.createElement("div");
  home.appendChild(firstDiv);

  const firstImg = document.createElement("img");
  firstDiv.appendChild(firstImg);
  const secondImg = document.createElement("img");
  firstDiv.appendChild(secondImg);
  const thirdImg = document.createElement("img");
  firstDiv.appendChild(thirdImg);

  function setAttributesHome() {
    title.setAttribute("class", "title");
    firstImg.setAttribute("src", "../img/mcDonalds.jpg");
    firstImg.setAttribute("class", "carouselImg");
    firstDiv.setAttribute("class", "container");
    secondImg.setAttribute("src", "../img/palacioDeTangara.jpg");
    secondImg.setAttribute("class", "carouselImg");
    thirdImg.setAttribute("src", "../img/dalvaEDito.jpg");
    thirdImg.setAttribute("class", "carouselImg");
  }
  setAttributesHome();
}

carouselGenerate();

let interval = 0;
let maxImgs = document.querySelectorAll(".carouselImg").length - 1;

function carouselAction() {
  let img = document.querySelectorAll(".carouselImg");

  setInterval(function () {
    img[interval].style.display = "none";
    interval++;
    if (interval > maxImgs) {
      interval = 0;
    }
    img[interval].style.display = "block";
  }, 1500);
}

carouselAction();
