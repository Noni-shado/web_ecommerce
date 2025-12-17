<?php
require_once __DIR__ . '/../core/database.php';

class Product {

    private $db;

    public function __construct() {
        $database = new Database();
        $this->db = $database->connect();
    }

    public function countAll() {
        $stmt = $this->db->query("SELECT COUNT(*) FROM products");
        return (int) $stmt->fetchColumn();
    }

    public function getPaginated($page, $limit) {
        $offset = ($page - 1) * $limit;

        $stmt = $this->db->prepare(
            "SELECT id, name, price, image
             FROM products
             ORDER BY id DESC
             LIMIT :limit OFFSET :offset"
        );

        $stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
        $stmt->bindValue(':offset', $offset, PDO::PARAM_INT);

        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
