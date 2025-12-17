/* =========================
   AUTH CHECK
========================= */
const user = JSON.parse(localStorage.getItem('user'));

if (!user) {
  window.location.href = '../signUp/signUp.html';
}

/* =========================
   LOAD ORDERS
========================= */
async function loadOrders() {
  const container = document.getElementById('orders');

  try {
    const res = await fetch(
      `../../backend/index.php?action=orders&user_id=${user.id}`
    );

    const orders = await res.json();
    container.innerHTML = '';

    // aucune commande
    if (!orders || orders.length === 0) {
      container.innerHTML =
        '<div class="orders-empty">Aucune commande trouvée.</div>';
      return;
    }

    orders.forEach((order) => {
      let total = 0;

      let html = `
        <div class="order-card">
          <div class="order-header">
            <h3>Commande #${order.id}</h3>
            <span class="order-date">
              ${new Date(order.created_at).toLocaleDateString('fr-FR')}
            </span>
          </div>
      `;

      order.items.forEach((item) => {
        total += Number(item.price);

        html += `
          <div class="order-item">
            <span>${item.name}</span>
            <span>${Number(item.price).toFixed(2)} €</span>
          </div>
        `;
      });

      html += `
          <div class="order-total">
            Total : ${total.toFixed(2)} €
          </div>
        </div>
      `;

      container.innerHTML += html;
    });
  } catch (error) {
    console.error(error);
    container.innerHTML =
      '<div class="orders-empty">Erreur lors du chargement des commandes.</div>';
  }
}

/* =========================
   INIT
========================= */
loadOrders();
