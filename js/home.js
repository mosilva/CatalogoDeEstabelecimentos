(() => {
    const homeStyle = document.createElement("script");
    homeStyle.setAttribute("src", "js/styles/homeStyle.js");
    document.body.appendChild(homeStyle);
  })();

function carouselGenerate(){
    const main = document.createElement("main");
    const title = document.createElement("h1");
    title.textContent = "Últimos estabelecimentos adicionados";
    main.appendChild(title);
    const firstDiv = document.createElement("div");
    main.appendChild(firstDiv);

    const firstImg = document.createElement("img");
    firstDiv.appendChild(firstImg);
    const secondImg = document.createElement("img");
    firstDiv.appendChild(secondImg);
    const thirdImg = document.createElement("img");
    firstDiv.appendChild(thirdImg);

    function setAttributesHome(){
        title.setAttribute("class", "title");
        firstImg.setAttribute("src", "../img/dalvaEDito.jpg");
        firstImg.setAttribute("class", "carouselImg");
         firstDiv.setAttribute("class", "container");
         secondImg.setAttribute("src", "../img/palacioDeTangara.jpg");
         secondImg.setAttribute("class", "carouselImg");
         thirdImg.setAttribute("src", "../img/mcDonalds.jpg");
        thirdImg.setAttribute("class", "carouselImg");
    }

    document.body.appendChild(main);
    setAttributesHome();
}

carouselGenerate();

let interval = 0;
let maxImgs = document.querySelectorAll(".carouselImg").length -1;

function carouselAction(){
    let img = document.querySelectorAll(".carouselImg");

    setInterval(function(){
        img[interval].style.display = 'none';
        interval++;
        if(interval > maxImgs){
            interval = 0;
        }
        img[interval].style.display = 'block';
    }, 1500)
}

carouselAction();