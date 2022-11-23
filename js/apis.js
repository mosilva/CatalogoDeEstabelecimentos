const url = 'http://estabelecimentos.letscode.dev.netuno.org:25390/services';

const uidGroup = '837c74f0-609f-44ef-a2c1-53c8df8993c4';

window.catalogEstablishments = async function() {
  try{
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
}catch(error){
  console.error("Erro na comunicação: ", error);
}
}

window.catalogEstablishmentsByName = async function(nameCategory) {
  try{
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
    })}
    catch(error){
      console.error("Erro na comunicação: ", error);
    }
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
});


if(!promise){
return []
}

return promise.json();
};


window.deleteEstablishment = async function (idEstab) {

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
});


if(!promise){
return []
}

return promise.json();
};


window.createEstablishment = async function (newEstablishment) {

  const promise = await fetch(`${url}/establishment`, {   
  method: 'POST',
  headers: {
      "Content-Type": "application/json"
},
  body: JSON.stringify({  
      address: newEstablishment.address,
      phone: newEstablishment.phone,
      name: newEstablishment.name,
      category: {
        uid: newEstablishment.category,
      },
      postal_code: newEstablishment.postal_code,
      email: newEstablishment.email,
      group: {
        uid: uidGroup
      }
})
}).catch((error) => {
});


if(!promise){
return []
}

return promise.json();
};

window.editEstablishment = async function (newEstablishment) {

  const promise = await fetch(`${url}/establishment`, {   
  method: 'POST',
  headers: {
      "Content-Type": "application/json"
},
  body: JSON.stringify({  
    
      uid: "string",
      address: "string",
      phone: "string",
      name: "string",
      category: {
        uid: "string"
      },
      postal_code: "string",
      email: "user@example.com",
      group: {
        uid: "string"
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


