<?php
require_once __DIR__ . '/../models/product.php';

class ProductController {

    public function listJSON() {
        header("Content-Type: application/json");

        $page = isset($_GET["page"]) ? (int)$_GET["page"] : 1;
        $limit = isset($_GET["limit"]) ? (int)$_GET["limit"] : 6;

        if ($page < 1) $page = 1;
        if ($limit < 1) $limit = 6;

        $p = new Product();

        $total = $p->countAll();
        $items = $p->getPaginated($page, $limit);

        echo json_encode([
            "items" => $items,
            "total" => $total,
            "page"  => $page,
            "limit" => $limit
        ]);
    }
}
