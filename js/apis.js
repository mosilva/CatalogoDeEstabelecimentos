const url = 'http://estabelecimentos.letscode.dev.netuno.org:25390/services';

const uidGroup = '837c74f0-609f-44ef-a2c1-53c8df8993c4';

window.catalogEstablishments = async function() {
  const promise = await fetch(`${url}/category/list`, {   
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "text": "",
    "group": {
      "uid": uidGroup
    }
  })
})

if(!promise){
  return []
}

return promise.json();
};

window.catalogEstablishmentsByName = async function(nameCategory) {
  const promise = await fetch(`${url}/establishment/list`, {   
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "text": `${nameCategory}`,
    "group": {
      "uid": uidGroup
    }
  })
  }).catch((error) => {
  console.log("Erro na comunicação:", error);
  });
}

window.listEstablishments = async function (){
  const promise = await fetch(`${url}/establishment/list`, {   
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "text": "",
      "group": {
        "uid": uidGroup
      }
    })
  })

  if(!promise){
    return []
  }
  return promise.json();
}

window.createCategory = async function (codeCategory, nameCategory) {

  const promise = await fetch(`${url}/category`, {   
  method: 'POST',
  headers: {
    "Content-Type": "application/json"
},
body: JSON.stringify({
  "code": `${codeCategory}`,
  "name": `${nameCategory}`,
  "group": {
    "uid": "837c74f0-609f-44ef-a2c1-53c8df8993c4"
  }
})
}).catch((error) => {
console.log("Erro na comunicação:", error);
});


if(!promise){
return []
}

return promise.json();
};

window.listCategories = async function () {
  const promise = await fetch(`${url}/category/list`, {     
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "text": "",
    "group": {
      "uid": uidGroup
    }
  })
})

if(!promise){
  return []
}

return promise.json();
};

window.deleteCategories = async function (idCategory) {

  const promise = await fetch(`${url}/category`, {   
  method: 'DELETE',
  headers: {
    "Content-Type": "application/json"
},
body: JSON.stringify({
  "uid": `${idCategory}`,
  "group": {
    "uid": uidGroup
  }
})
}).catch((error) => {
console.log("Erro na comunicação:", error);
});


if(!promise){
return []
}

return promise.json();
};

window.listCategoriesByName = async function (nameCategory) {

const promise = await fetch(`${url}/category/list`, {   
method: 'POST',
headers: {
  "Content-Type": "application/json"
},
body: JSON.stringify({
"text": `${nameCategory}`,
"group": {
  "uid": uidGroup
}
})
}).catch((error) => {
console.log("Erro na comunicação:", error);
});


if(!promise){
return []
}

return promise.json();
};


window.deleteEstablishment = async function (idEstab) {

  console.log(idEstab);
  const promise = await fetch(`${url}//establishment`, {   
  method: 'DELETE',
  headers: {
    "Content-Type": "application/json"
},
body: JSON.stringify({
  "uid": `${idEstab}`,
  "group": {
    "uid": uidGroup
  }
})
}).catch((error) => {
console.log("Erro na comunicação:", error);
});


if(!promise){
return []
}

return promise.json();
};



