# 🛒 Application Web E-commerce

## 📑 Table des matières

## Table des matières

- [Présentation](#presentation)
- [Architecture du projet](#architecture-du-projet)
- [Technologies utilisées](#technologies-utilisees)
- [Installation](#installation)
- [Configuration de la base de données](#configuration-de-la-base-de-donnees)
- [Lancement du projet](#lancement-du-projet)

---

## 📌 Description

Cette application est une **boutique en ligne** développée en **HTML, CSS, JavaScript, PHP et MySQL**.  
Elle permet à un utilisateur de :

- consulter des produit

## 📌 Description

Cette application est une **boutique en ligne** développée en **HTML, CSS, JavaScript, PHP et MySQL**.  
Elle permet à un utilisateur de :

- consulter des produits
- s’inscrire / se connecter
- gérer un panier
- passer des commandes
- consulter son profil et l’historique de ses commandes

Le projet suit une **architecture MVC simplifiée** (Model – Controller – View).

---

## 🏗️ Architecture du projet

TP/
├── backend/
│ ├── controllers/
│ │ ├── UserController.php
│ │ ├── ProductController.php
│ │ └── OrderController.php
│ ├── models/
│ │ ├── Database.php
│ │ ├── User.php
│ │ ├── Product.php
│ │ └── Order.php
│ └── index.php # Point d’entrée de l’API
│
├── public/
│ ├── assets/
│ ├── pannier/
│ ├── product/
│ ├── profil/
│ ├── signin/
│ ├── signUp/
│ ├── orders/
│ ├── uploads/
│ │ └── images/
│ │ └── products/
│ │ ├── chaussures/
│ │ ├── vetements/
│ │ ├── sacs/
│ │ ├── montres/
│ │ └── lunettes/
│ ├── index.html
│ ├── app.js
│ └── style.css
│
├── database/
│ └── ecommerce.sql # Base de données exportée
│
└── README.md

---

## ⚙️ Technologies utilisées

- **Front-end** : HTML, CSS, JavaScript (Vanilla)
- **Back-end** : PHP (PDO)
- **Base de données** : MySQL
- **Serveur local** : XAMPP / WAMP / MAMP

---

## 🗄️ Base de données

La base de données a été **exportée** et se trouve dans le dossier :

/database/ecommerce.sql

### Tables principales

- `users`
- `products`
- `orders`
- `order_items`

📸 Les images des produits **ne sont pas stockées en base**, mais dans :

public/uploads/images/products/

La base de données contient uniquement **le chemin vers l’image**.

---

## ▶️ Installation & Lancement

### 1️⃣ Installer un serveur local

Installer **XAMPP** (ou équivalent) avec :

- Apache
- MySQL

---

### 2️⃣ Placer le projet

Copier le dossier `TP` dans : C:\xampp\htdocs\

---

### 3️⃣ Importer la base de données

1. Ouvrir **phpMyAdmin**
2. Créer une base de données nommée : ecommerce
3. Importer le fichier : database/ecommerce.sql

---

### 4️⃣ Configuration de la base de données

Dans le fichier : backend/models/Database.php

Vérifier les paramètres de connexion :

```php
private $host = "localhost";
private $db   = "ecommerce";
private $user = "root";
private $pass = "";

5️⃣ Lancer l’application

Ouvrir un navigateur et accéder à : http://localhost/TP/public/index.html

🔐 Authentification

L’authentification est gérée côté front-end via localStorage

Les pages profil, panier et commandes sont protégées

Redirection automatique vers l’inscription si l’utilisateur n’est pas connecté

🔁 Fonctionnement du Back-end (API)

Le front-end communique avec le back-end via fetch

Toutes les routes passent par : backend/index.php

Exemple d’actions API :
?action=products
?action=login
?action=register
?action=order

Rôle des composants

Controllers : exposent les endpoints API, valident les données et retournent des réponses JSON

Models : contiennent les classes métier et interagissent avec la base de données via PDO

📦 Fonctionnalités principales

✔ Inscription / Connexion
✔ Consultation des produits
✔ Gestion du panier
✔ Passage de commande
✔ Profil utilisateur
✔ Historique des commandes

👩‍💻 Auteur

Nouha
Licence Informatique – L3
Année universitaire 2024–2025

```
