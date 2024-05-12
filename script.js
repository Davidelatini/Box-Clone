// Impostazione dell'URL base per le richieste all'API
const BASE_URL = "https://striveschool-api.herokuapp.com/api/product/";

// Funzione che viene eseguita quando la pagina è completamente caricata
window.onload = async () => {
  // Effettua una chiamata GET per ottenere la lista dei prodotti
  const res = await fetch(BASE_URL, {
    headers: {
      // Usa un token di autorizzazione per accedere all'API
      authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMWQ1OTBiM2IyNTAwMTUxYjU0MmQiLCJpYXQiOjE3MTUxMTE2NDYsImV4cCI6MTcxNjMyMTI0Nn0.QXzThBi3CG3NxUwdoNLKXh2xQId86fiQOOZbncIfDoY"
    },
  });

  // Converte la risposta JSON in un oggetto JavaScript
  const products = await res.json();

  // Seleziona l'elemento HTML dove verranno visualizzati i prodotti
  const row = document.querySelector("#products");

  // Itera su ciascun prodotto ricevuto dall'API
  products.forEach((prod) => {
    // Aggiunge HTML dinamicamente per ciascun prodotto nella griglia
    row.innerHTML += `
    <div class='col col-3 col-lg-3 col-md-4 col-sm-6 col-sm-12 mb-4'>
      <div class="card justify-content-between">
        <img src="${prod.imageUrl}" class="card-img-top" alt="${prod._id}_${prod.name}">
        <div class="card-body">
          <h5 class="card-title">${prod.name}</h5>
          <a href="./backoffice.html?id=${prod._id}" class="btn btn-primary bg-dark">Modifica</a>
          <a href="./product-details.html?id=${prod._id}" class="btn btn-primary bg-dark" onclick="showProductDetails('${prod._id}')">Dettaglio</a>
        </div>
      </div>
    </div>`
  });
}

