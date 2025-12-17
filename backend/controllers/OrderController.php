<?php
require_once __DIR__ . '/../models/Order.php';

class OrderController {

    public function create() {
        header("Content-Type: application/json");

        $data = json_decode(file_get_contents("php://input"), true);

        if (!$data || !isset($data['user_id'], $data['pannier'])) {
            http_response_code(400);
            echo json_encode(["error" => "Données invalides"]);
            return;
        }

        $order = new Order();
        $orderId = $order->create($data['user_id'], $data['pannier']);

        echo json_encode([
            "success" => true,
            "order_id" => $orderId
        ]);
    }

public function listByUser() {
    header("Content-Type: application/json");

    if (!isset($_GET['user_id'])) {
        http_response_code(400);
        echo json_encode(["error" => "user_id manquant"]);
        return;
    }

    $order = new Order();
    echo json_encode($order->getByUser($_GET['user_id']));
}


}
