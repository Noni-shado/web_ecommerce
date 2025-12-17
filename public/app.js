/* =========================
   AUTH CHECK
========================= */
const user = JSON.parse(localStorage.getItem('user'));
if (!user) {
  window.location.href = 'signUp/signUp.html';
}

/* =========================
   PANIER
========================= */
let pannier = JSON.parse(localStorage.getItem('pannier')) || [];

function updateCartCount() {
  const cartCount = document.getElementById('cart-count');
  if (cartCount) {
    cartCount.textContent = pannier.length;
  }
}

updateCartCount();

/* =========================
   PAGINATION
========================= */
let currentPage = 1;
const limit = 6;
let totalPages = 1;

async function loadProducts() {
  const container = document.getElementById('products');
  const pagination = document.getElementById('pagination');

  pagination.style.visibility = 'hidden';
  container.innerHTML = '';

  // skeleton loading
  for (let i = 0; i < limit; i++) {
    container.innerHTML += `
      <div class="card">
        <div class="img-wrapper"></div>
        <h3>Chargement...</h3>
        <p>...</p>
      </div>
    `;
  }

  const res = await fetch(
    `../backend/index.php?action=products&page=${currentPage}&limit=${limit}`
  );
  const data = await res.json();

  const products = data.items || [];
  const total = data.total || 0;
  totalPages = Math.max(1, Math.ceil(total / limit));

  container.innerHTML = '';

  products.forEach((p) => {
    container.innerHTML += `
      <div class="card">
        <div class="img-wrapper">
          <img
            src="${p.image}"
            alt="${p.name}"
            class="product-img"
            onerror="this.src='assets/images/no-image.png'"
          >
        </div>

        <h3>${p.name}</h3>
        <p>${p.price} €</p>

        <button onclick="addTopannier(${p.id}, '${p.name}', ${p.price})">
          Ajouter au panier 🛒
        </button>

        <a href="product/product.html?id=${p.id}">Voir détails</a>
      </div>
    `;
  });

  document.getElementById(
    'page-number'
  ).textContent = `${currentPage} / ${totalPages}`;

  document.getElementById('prev').disabled = currentPage === 1;
  document.getElementById('next').disabled = currentPage >= totalPages;

  pagination.style.visibility = 'visible';
}

/* =========================
   ADD TO CART
========================= */
function addTopannier(id, name, price) {
  pannier.push({ id, name, price });
  localStorage.setItem('pannier', JSON.stringify(pannier));

  updateCartCount(); // 🔥 mise à jour immédiate

  // feedback utilisateur (optionnel)
  const btn = event?.target;
  if (btn) {
    btn.textContent = 'Ajouté ✓';
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = 'Ajouter au panier 🛒';
      btn.disabled = false;
    }, 800);
  }
}

/* =========================
   USER MENU
========================= */
document.addEventListener('DOMContentLoaded', () => {
  const userBtn = document.getElementById('user-btn');
  const dropdown = document.getElementById('user-dropdown');
  const logoutBtn = document.getElementById('logout-btn');

  if (!userBtn || !dropdown) return;

  userBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('show');
    dropdown.classList.toggle('hidden');
  });

  document.addEventListener('click', () => {
    dropdown.classList.remove('show');
    dropdown.classList.add('hidden');
  });

  logoutBtn.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = 'signUp/signUp.html';
  });

  document.getElementById('next').addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      loadProducts();
    }
  });

  document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      loadProducts();
    }
  });

  loadProducts();
});
