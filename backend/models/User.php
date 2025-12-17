<?php
require_once __DIR__ . '/../core/Database.php';

class User {
    private $conn;

    public function __construct() {
        $this->conn = (new Database())->connect();
    }

    public function register($username, $email, $password) {
        $stmt = $this->conn->prepare("INSERT INTO users(username, email, password) VALUES (?, ?, ?)");
        return $stmt->execute([$username, $email, $password]);
    }

    public function signIn($email, $password) {
            $stmt = $this->conn->prepare("SELECT * FROM users WHERE email = ?");
            $stmt->execute([$email]);
            $user = $stmt->fetch(PDO::FETCH_ASSOC);

            // Si l'utilisateur existe et le mot de passe est correct
            if ($user && password_verify($password, $user['password'])) {
                return $user; // Retourner toutes les infos utiles
                }
            return false; // Echec connexion

    }
}
