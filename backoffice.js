// URL base per le chiamate API
const BASE_URL = "https://striveschool-api.herokuapp.com/api/product/";

// Ottenere l'ID del prodotto dall'URL della pagina, se esiste
let param = new URLSearchParams(window.location.search);
let id = param.get("id");

// Funzione eseguita al caricamento della pagina
window.onload = async () => {
  if (id) {
    // Se c'è un ID, carica il prodotto esistente
    const response = await fetch(BASE_URL + id, {
      headers: {
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMWQ1OTBiM2IyNTAwMTUxYjU0MmQiLCJpYXQiOjE3MTUxMTE2NDYsImV4cCI6MTcxNjMyMTI0Nn0.QXzThBi3CG3NxUwdoNLKXh2xQId86fiQOOZbncIfDoY"
      },
    });
    const product = await response.json();

    // Imposta i valori dei campi del form con i dati del prodotto
    document.querySelector("#name").value = product.name;
    document.querySelector("#description").value = product.description;
    document.querySelector("#imageUrl").value = product.imageUrl;
    document.querySelector("#brand").value = product.brand;
    document.querySelector("#price").value = product.price;

    // Nascondi il pulsante "Crea" perché non è un nuovo prodotto
    document.querySelector(".btn-success").style.display = 'none';
  } else {
    // Se non c'è un ID, significa che stiamo creando un nuovo prodotto
    document.querySelector(".btn-danger").style.display = 'none'; // Nasconde il pulsante "Elimina"
    document.querySelector(".btn-secondary").style.display = 'none'; // Nasconde il pulsante "Modifica"
  }
}

// Funzione per creare un nuovo prodotto
const createNew = async () => {
  // Raccoglie i valori dal form
  const product = {
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value,
    brand: document.querySelector("#brand").value,
    imageUrl: document.querySelector("#imageUrl").value,
    price: document.querySelector("#price").value,
  }

  // Effettua la richiesta POST per creare il prodotto
  let response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMWQ1OTBiM2IyNTAwMTUxYjU0MmQiLCJpYXQiOjE3MTUxMTE2NDYsImV4cCI6MTcxNjMyMTI0Nn0.QXzThBi3CG3NxUwdoNLKXh2xQId86fiQOOZbncIfDoY",
    },
    body: JSON.stringify(product),
  })

  // Controlla se la risposta è ok e mostra un messaggio
  if (response.ok) {
    alert("Product created");
  }
}

// Funzione per modificare un prodotto esistente
const editProduct = async () => {
  // Raccoglie i valori aggiornati dal form
  const product = {
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value,
    brand: document.querySelector("#brand").value,
    imageUrl: document.querySelector("#imageUrl").value,
    price: document.querySelector("#price").value,
  }

  // Effettua la richiesta PUT per aggiornare il prodotto
  let response = await fetch(BASE_URL + id, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMWQ1OTBiM2IyNTAwMTUxYjU0MmQiLCJpYXQiOjE3MTUxMTE2NDYsImV4cCI6MTcxNjMyMTI0Nn0.QXzThBi3CG3NxUwdoNLKXh2xQId86fiQOOZbncIfDoY",
    },
    body: JSON.stringify(product),
  })

  // Controlla se la risposta è ok e mostra un messaggio
  if (response.ok) {
    alert("Product updated"); // Modificato il messaggio da "created" a "updated"
  }
}

// Funzione per eliminare un prodotto
const deleteProduct = async () => {
  // Effettua la richiesta DELETE per eliminare il prodotto
  let response = await fetch(BASE_URL + id, {
    method: "DELETE",
    headers: {
      authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMWQ1OTBiM2IyNTAwMTUxYjU0MmQiLCJpYXQiOjE3MTUxMTE2NDYsImV4cCI6MTcxNjMyMTI0Nn0.QXzThBi3CG3NxUwdoNLKXh2xQId86fiQOOZbncIfDoY",
    },
  })

  // Controlla se la risposta è ok e mostra un messaggio
  if (response.ok) {
    alert("Product deleted");
  }
}
