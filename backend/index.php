<?php
$action = $_GET['action'] ?? '';

switch ($action) {

    // --- Produits ---
    case 'products':
        require_once './controllers/ProductController.php';
        (new ProductController())->listJSON();
        break;

    // --- Inscription utilisateur ---
    case 'register':
        require_once './controllers/UserController.php';
        (new UserController())->register();
        break;

    // --- Connexion utilisateur ---
    case 'signIn':
        require_once './controllers/UserController.php';
        (new UserController())->signIn();
        break;

    // --- Créer une commande ---
    case 'order':
        require_once './controllers/OrderController.php';
        (new OrderController())->create();
        break;

    // --- Lister les commandes ---
    case 'orders':
        require_once './controllers/OrderController.php';
        (new OrderController())->listByUser();
        break;

    // --- Action inconnue ---
    default:
        header("Content-Type: application/json");
        echo json_encode(["error" => "action inconnue"]);
        break;
}
