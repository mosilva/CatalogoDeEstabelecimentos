const url = "http://estabelecimentos.letscode.dev.netuno.org:25390/services";

const uidGroup = "837c74f0-609f-44ef-a2c1-53c8df8993c4";

window.catalogEstablishments = async function () {
  try {
    const promise = await fetch(`${url}/category/list`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: "",
        group: {
          uid: uidGroup,
        },
      }),
    });
    if (!promise) {
      alert("Algo deu errado na requisição! Tente novamente!");
      return [];
    }
    return promise.json();
  } catch (error) {
    console.error("Erro na comunicação: ", error);
  }
};

window.catalogEstablishmentsByName = async function (nameCategory) {
  try {
    const promise = await fetch(`${url}/establishment/list`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: `${nameCategory}`,
        group: {
          uid: uidGroup,
        },
      }),
    });
  } catch (error) {
    console.error("Erro na comunicação: ", error);
  }
};

window.listEstablishments = async function () {
  try {
    const promise = await fetch(`${url}/establishment/list`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: "",
        group: {
          uid: uidGroup,
        },
      }),
    });
    if (!promise) {
      alert("Algo deu errado na requisição! Tente novamente!");
      return [];
    }
    const establishments = await promise.json();
    localStorage.setItem("establishments", JSON.stringify(establishments));
    return establishments;
  } catch (error) {
    console.error("Erro na comunicação: ", error);
  }
};

window.createCategory = async function (codeCategory, nameCategory) {
  try {
    const promise = await fetch(`${url}/category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: `${codeCategory}`,
        name: `${nameCategory}`,
        group: {
          uid: "837c74f0-609f-44ef-a2c1-53c8df8993c4",
        },
      }),
    });
    if (!promise) {
      alert("Algo deu errado na requisição! Tente novamente!");
      return [];
    }
    return promise.json();
  } catch (error) {
    console.error("Erro na comunicação: ", error);
  }
};

window.listCategories = async function () {
  try {
    const promise = await fetch(`${url}/category/list`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: "",
        group: {
          uid: uidGroup,
        },
      }),
    });

    if (!promise.ok) {
      return [];
    }
    const categories = await promise.json();
    localStorage.setItem("categories", JSON.stringify(categories));
    return categories;
  } catch (error) {
    console.error("Erro na comunicação: ", error);
  }
};

window.deleteCategories = async function (idCategory) {
  try {
    const promise = await fetch(`${url}/category`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid: `${idCategory}`,
        group: {
          uid: uidGroup,
        },
      }),
    });

    if (!promise) {
      return [];
    }

    return promise.json();
  } catch (error) {
    console.error("Erro na comunicação: ", error);
  }
};

window.listCategoriesByName = async function (nameCategory) {
  try {
    const promise = await fetch(`${url}/category/list`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: `${nameCategory}`,
        group: {
          uid: uidGroup,
        },
      }),
    }).catch((error) => {});

    if (!promise) {
      return [];
    }

    return promise.json();
  } catch (error) {
    console.error("Erro na comunicação: ", error);
  }
};

window.editCategories = async function (
  idCategory,
  codeCategory,
  nameCategory
) {
  try {
    const promise = await fetch(`${url}/category`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid: `${idCategory}`,
        code: `${codeCategory}`,
        name: `${nameCategory}`,
        group: {
          uid: uidGroup,
        },
      }),
    }).catch((error) => {});

    if (!promise) {
      return [];
    }
  } catch (error) {
    console.error("Erro na comunicação: ", error);
  }
};

window.deleteEstablishment = async function (idEstab) {
  try {
    const promise = await fetch(`${url}//establishment`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid: `${idEstab}`,
        group: {
          uid: uidGroup,
        },
      }),
    }).catch((error) => {});

    if (!promise) {
      alert("Algo deu errado na requisição! Tente novamente!");
      return [];
    }

    return promise.json();
  } catch (error) {
    console.error("Erro na comunicação: ", error);
  }
};

window.createEstablishment = async function (newEstablishment) {
  try {
    const promise = await fetch(`${url}/establishment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
          uid: uidGroup,
        },
      }),
    });
    if (!promise) {
      alert("Algo deu errado na requisição! Tente novamente!");
      return [];
    }

    return promise.json();
  } catch (error) {
    console.error("Erro na comunicação: ", error);
  }
};

window.editEstablishmentAll = async function (editEstablishment) {
  try {
    const promise = await fetch(`${url}/establishment`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid: editEstablishment.uid,
        address: editEstablishment.address,
        phone: editEstablishment.phone,
        name: editEstablishment.name,
        category: {
          uid: editEstablishment.category,
        },
        postal_code: editEstablishment.postal_code,
        email: editEstablishment.email,
        group: {
          uid: uidGroup,
        },
      }),
    }).catch((error) => {
      console.log("Erro na comunicação:", error);
    });

    if (!promise) {
      return [];
    }
    return promise.json();
  } catch (error) {
    console.error("Erro na comunicação: ", error);
  }
};
