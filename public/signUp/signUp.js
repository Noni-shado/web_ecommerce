async function register() {
  const data = {
    username: document.getElementById('username').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value
  };

  const res = await fetch('../../backend/index.php?action=register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  const result = await res.json();
  const msg = document.getElementById('msg');

  if (result.success) {
    localStorage.setItem(
      'user',
      JSON.stringify({
        username: result.user.username,
        email: result.user.email,
        id: result.user.id
      })
    );

    msg.style.color = 'green';
    msg.textContent = '🎉 Inscription réussie ! Redirection...';

    setTimeout(() => {
      window.location.href = '../index.html';
    }, 1000);
  } else {
    msg.style.color = 'red';
    msg.textContent = 'Erreur : utilisateur déjà existant ❌';
  }
}
