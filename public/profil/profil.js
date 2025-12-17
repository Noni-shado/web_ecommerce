/* =========================
   AUTH CHECK
========================= */
const user = JSON.parse(localStorage.getItem('user'));

if (!user) {
  window.location.href = '../signUp/signUp.html';
}

/* =========================
   LOAD PROFILE
========================= */
document.getElementById('profile-name').textContent =
  user.username || 'Utilisateur';

document.getElementById('profile-email').textContent = user.email || '—';

/* =========================
   LOGOUT
========================= */
document.getElementById('logout-btn').addEventListener('click', () => {
  localStorage.clear();
  window.location.href = '../signUp/signUp.html';
});
