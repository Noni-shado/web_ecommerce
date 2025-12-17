async function signIn() {
  const data = {
    email: document.getElementById('email').value,
    password: document.getElementById('password').value
  };

  const res = await fetch('../../backend/index.php?action=signIn', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  const result = await res.json();
  const msg = document.getElementById('msg');

  if (result.success) {
    // enregister le user dans le localStorage
    localStorage.setItem(
      'user',
      JSON.stringify({
        username: result.user.username,
        email: result.user.email,
        id: result.user.id
      })
    );

    // Afficher message succès
    msg.style.color = 'green';
    msg.textContent = '🎉 Connexion réussie ! Redirection ...';

    // Redirection après 1 secondes
    setTimeout(() => {
      window.location.href = '../index.html';
    }, 1000);
  } else {
    document.getElementById('msg').textContent = 'Erreur ❌';
  }
}
