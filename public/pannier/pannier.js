// ---------- Récupérer le panier ----------
let pannier = JSON.parse(localStorage.getItem('pannier')) || [];

// ---------- Afficher le panier ----------
function loadpannier() {
  const container = document.getElementById('pannier-items');
  const totalElement = document.getElementById('total');

  container.innerHTML = '';
  let total = 0;

  if (pannier.length === 0) {
    container.innerHTML = '<p>Votre panier est vide.</p>';
    totalElement.textContent = '0.00';
    return;
  }

  pannier.forEach((p, index) => {
    total += p.price;

    container.innerHTML += `
    <div class="card">
        <img 
            src="${p.image}" 
            alt="${p.name}"
            class="pannier-img"
             loading="lazy"
            onerror="this.onerror=null; this.src='../assets/images/no-image.png';"
        >

        <h3>${p.name}</h3>
        <p>${p.price} €</p>

        <button onclick="removeFrompannier(${index})">
            Supprimer
        </button>
    </div>
`;
  });

  totalElement.textContent = total.toFixed(2);
}

// ---------- Supprimer du panier ----------
function removeFrompannier(index) {
  pannier.splice(index, 1);
  localStorage.setItem('pannier', JSON.stringify(pannier));
  loadpannier();
}

// ---------- Initialisation ----------
loadpannier();

// ---------- PASSER COMMANDE ----------
document.getElementById('order-btn').addEventListener('click', async () => {
  console.log('click');
  const user = JSON.parse(localStorage.getItem('user'));
  const pannier = JSON.parse(localStorage.getItem('pannier')) || [];

  if (!user) {
    alert('Veuillez vous connecter');
    window.location.href = '../signUp/signUp.html';
    return;
  }

  if (pannier.length === 0) {
    alert('Votre panier est vide');
    return;
  }

  const confirmOrder = confirm('Confirmer la commande ?');
  if (!confirmOrder) return;

  const res = await fetch('../../backend/index.php?action=order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user_id: user.id,
      pannier: pannier
    })
  });

  const data = await res.json();

  if (data.success) {
    alert('Commande validée 🎉');
    localStorage.removeItem('pannier');
    window.location.href = '../orders/orders.html';
  } else {
    alert('Erreur lors de la commande');
  }
});
