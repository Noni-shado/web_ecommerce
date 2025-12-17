<?php
require_once __DIR__ . '/../core/Database.php';

class Order {
    private $db;

    public function __construct() {
        $this->db = (new Database())->connect();
    }

    public function create($userId, $pannier) {
        $this->db->beginTransaction();

        $total = 0;
        foreach ($pannier as $item) {
            $total += $item['price'];
        }

        // Insert order
        $stmt = $this->db->prepare(
            "INSERT INTO orders (user_id, total) VALUES (:user_id, :total)"
        );
        $stmt->execute([
            'user_id' => $userId,
            'total' => $total
        ]);

        $orderId = $this->db->lastInsertId();

        // Insert items
        $stmtItem = $this->db->prepare(
            "INSERT INTO order_items (order_id, product_id, product_name, price)
             VALUES (:order_id, :product_id, :product_name, :price)"
        );

        foreach ($pannier as $item) {
            $stmtItem->execute([
                'order_id' => $orderId,
                'product_id' => $item['id'],
                'product_name' => $item['name'],
                'price' => $item['price']
            ]);
        }

        $this->db->commit();
        return $orderId;
    }

    public function getByUser($userId) {
    $stmt = $this->db->prepare(
        "SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC"
    );
    $stmt->execute([$userId]);
    $orders = $stmt->fetchAll(PDO::FETCH_ASSOC);

    foreach ($orders as &$order) {
$stmtItems = $this->db->prepare(
    "SELECT 
        p.name,
        oi.price
     FROM order_items oi
     JOIN products p ON p.id = oi.product_id
     WHERE oi.order_id = ?"
);


        $stmtItems->execute([$order['id']]);
        $order['items'] = $stmtItems->fetchAll(PDO::FETCH_ASSOC);
    }

    return $orders;
}
}
