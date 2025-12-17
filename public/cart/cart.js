// ---------- Récupérer le panier ----------
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// ---------- Afficher le panier ----------
function loadCart() {
  const container = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');

  container.innerHTML = '';
  let total = 0;

  if (cart.length === 0) {
    container.innerHTML = '<p>Votre panier est vide.</p>';
    totalElement.textContent = '0.00';
    return;
  }

  cart.forEach((p, index) => {
    total += p.price;

    container.innerHTML += `
    <div class="card">
        <img 
            src="${p.image}" 
            alt="${p.name}"
            class="cart-img"
             loading="lazy"
            onerror="this.onerror=null; this.src='../assets/images/no-image.png';"
        >

        <h3>${p.name}</h3>
        <p>${p.price} €</p>

        <button onclick="removeFromCart(${index})">
            Supprimer
        </button>
    </div>
`;
  });

  totalElement.textContent = total.toFixed(2);
}

// ---------- Supprimer du panier ----------
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  loadCart();
}

// ---------- Initialisation ----------
loadCart();

//----passer une commande
document.getElementById('order-btn').addEventListener('click', async () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (!user || cart.length === 0) {
    alert('Panier vide ou utilisateur non connecté');
    return;
  }

  const res = await fetch('../backend/index.php?action=order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user_id: user.id,
      cart: cart
    })
  });

  const data = await res.json();

  if (data.success) {
    alert('Commande validée ! 🎉');
    localStorage.removeItem('cart');
    window.location.href = '../orders/orders.html';
  } else {
    alert('Erreur lors de la commande');
  }
});
