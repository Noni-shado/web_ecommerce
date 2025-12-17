<?php
require_once __DIR__ . '/../models/User.php';

class UserController {

    public function register() {
        header('Content-Type: application/json');

        $data = json_decode(file_get_contents("php://input"), true);

        $username = $data['username'];
        $email = $data['email'];
        $password = password_hash($data['password'], PASSWORD_DEFAULT);

        $u = new User();
        $success = $u->register($username, $email, $password);

        echo json_encode(["success" => $success]);
    }

        public function signIn() {
        header('Content-Type: application/json');

        $data = json_decode(file_get_contents("php://input"), true);

        $email = $data['email'];
        $password = $data['password']; 
        $u = new User();
        $user = $u->signIn($email, $password);

        
    if ($user) {
        echo json_encode([
            "success" => true,
            "user" => [
                "username" => $user['username'],
                "email" => $user['email'],
                 "id" => $user['id'],
            ]
        ]);
    } else {
        echo json_encode(["success" => false]);
    }

    }
}
