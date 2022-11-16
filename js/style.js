function styleSpanError(tag) {
    Object.assign(tag.style, {
      margin: "0 0 0 1vw",
      fontSize: "1.2em",
      padding: "0 0 1vw 0",
      marginBottom: "1vw",
      color: "red"
    });
  }

function styleSpace(tag) {
    Object.assign(tag.style, {
      padding: "1vw"
    });
  }


function deleteEstab(tag) {
    Object.assign(tag.style, {
      opacity: "0",
      transition: "0.5s"
    });
  }

function filterEstab(tag) {
    Object.assign(tag.style, {
      width: "16em",
      height: "2em",
      marginBottom: "1em",
      display: "flex"
    });
  }


  function invisibleEstab(tag) 
  {
    Object.assign(tag.style, 
    {
      display: "none"
    });
  }

  function visibleEstab(tag) 
  {
    Object.assign(tag.style, 
    {
        display: ""
    });
  }
