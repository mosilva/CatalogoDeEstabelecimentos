const url = 'http://estabelecimentos.letscode.dev.netuno.org:25390/services';

window.listCategories = async function () {
    const promise = await fetch(`${url}/category/list`, {   
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "text": "",
      "group": {
        "uid": "837c74f0-609f-44ef-a2c1-53c8df8993c4"
      }
    })
  })
  
  if(!promise){
    return []
  }

  return promise.json();
};


async function listEstablishments(){
  const promise = await fetch(`${url}/establishment/list`, {   
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "text": "",
      "group": {
        "uid": "837c74f0-609f-44ef-a2c1-53c8df8993c4"
      }
    })
  })

  if(!promise){
    return []
  }
  return promise.json();
}