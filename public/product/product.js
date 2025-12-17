// Récupérer id depuis URL
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

async function loadProduct() {
  const res = await fetch(
    '../../backend/index.php?action=products&page=1&limit=1000'
  );
  const data = await res.json();

  // Compatible pagination / non pagination
  const products = Array.isArray(data) ? data : data.items || [];

  const p = products.find((item) => String(item.id) === String(id));
  const div = document.getElementById('product-detail');

  if (!p) {
    div.innerHTML = '<p>Produit introuvable.</p>';
    return;
  }

  div.innerHTML = `
  <div class="product-detail-card">
    <img 
      src="${p.image}"
      alt="${p.name}"
      class="detail-img"
      loading="lazy"
      onerror="this.onerror=null; this.src='../assets/images/no-image.png';"
    >

    <div class="product-info">
      <h2>${p.name}</h2>
      <p>${Number(p.price).toFixed(2)} €</p>

      <button id="add-to-pannier">
        Ajouter au panier 🛒
      </button>
    </div>
  </div>
`;

  // AJOUT AU PANIER PROPRE (PAS DE ONCLICK HTML)
  document.getElementById('add-to-pannier').addEventListener('click', () => {
    addToPannier(p);
  });
}

function addToPannier(product) {
  const pannier = JSON.parse(localStorage.getItem('pannier')) || [];

  pannier.push({
    id: product.id,
    name: product.name,
    price: Number(product.price),
    image: product.image
  });

  localStorage.setItem('pannier', JSON.stringify(pannier));
  alert('Ajouté au panier 🛒');
}

loadProduct();
