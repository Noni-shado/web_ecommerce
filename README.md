# Application Web E-commerce

## Table des matieres

- [Presentation](#presentation)
- [Architecture du projet](#architecture-du-projet)
- [Technologies utilisees](#technologies-utilisees)
- [Base de donnees](#base-de-donnees)
- [Installation](#installation)
- [Configuration de la base de donnees](#configuration-de-la-base-de-donnees)
- [Lancement de l application](#lancement-de-l-application)
- [Fonctionnement du back-end](#fonctionnement-du-back-end)
- [Fonctionnalites](#fonctionnalites)
- [Auteur](#auteur)

---

## Presentation

Cette application est une boutique en ligne developpee en HTML, CSS, JavaScript, PHP et MySQL.

Elle permet a un utilisateur de :

- consulter des produits
- s inscrire et se connecter
- gerer un panier
- passer des commandes
- consulter son profil et l historique de ses commandes

Le projet suit une architecture MVC simplifiee (Model – Controller – View).

---

## Architecture du projet

Le projet est structure en deux parties principales :

- Front-end : interface utilisateur
- Back-end : logique metier et acces a la base de donnees

---

## Technologies utilisees

- HTML
- CSS
- JavaScript (Vanilla)
- PHP (PDO)
- MySQL
- XAMPP / WAMP / MAMP
- Git / GitHub

---

## Base de donnees

La base de donnees a ete exportee et se trouve dans : /database/ecommerce.sql

Tables principales :

- users
- products
- orders
- order_items

Les images des produits sont stockees dans : public/uploads/images/products/

La base de donnees contient uniquement le chemin vers les images.

---

## Installation

1. Installer un serveur local (XAMPP ou equivalent)
2. Activer Apache et MySQL
3. Copier le dossier `TP` dans : C:\xampp\htdocs\

---

## Configuration de la base de donnees

1. Ouvrir phpMyAdmin
2. Creer une base de donnees nommee `ecommerce`
3. Importer le fichier : database/ecommerce.sql

Verifier le fichier : backend/models/Database.php

```php
private $host = "localhost";
private $db   = "ecommerce";
private $user = "root";
private $pass = "";

Lancement de l application

Ouvrir un navigateur et acceder a : http://localhost/TP/public/index.html

Fonctionnement du back-end

Le front-end communique avec le back-end via fetch.

Toutes les routes passent par : backend/index.php

Exemples d actions API :

?action=products

?action=login

?action=register

?action=order

Role des composants

Controllers : exposent les endpoints API et retournent du JSON

Models : contiennent la logique metier et interagissent avec MySQL via PDO

Fonctionnalites

Inscription et connexion

Consultation des produits

Gestion du panier

Passage de commande

Profil utilisateur

Historique des commandes

Auteur

Nouha
Licence Informatique – L3
Annee universitaire 2024–2025








```
