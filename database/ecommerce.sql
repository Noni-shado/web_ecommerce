-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 17 déc. 2025 à 04:23
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `ecommerce`
--

-- --------------------------------------------------------

--
-- Structure de la table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `total`, `created_at`) VALUES
(1, 1, 49.99, '2025-12-17 02:40:41'),
(2, 1, 194.97, '2025-12-17 04:11:20'),
(3, 1, 74.99, '2025-12-17 04:14:28');

-- --------------------------------------------------------

--
-- Structure de la table `order_items`
--

CREATE TABLE `order_items` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `order_items`
--

INSERT INTO `order_items` (`id`, `order_id`, `product_id`, `product_name`, `price`) VALUES
(1, 1, 1, 'Chaussures', 49.99),
(2, 2, 4, 'Chaussures sport', 49.99),
(3, 2, 2, 'T-shirt', 19.99),
(4, 2, 3, 'Casquette', 12.50),
(5, 2, 3, 'Casquette', 12.50),
(6, 2, 3, 'Casquette', 12.50),
(7, 2, 3, 'Casquette', 12.50),
(8, 2, 3, 'Casquette', 12.50),
(9, 2, 3, 'Casquette', 12.50),
(10, 2, 4, 'Chaussures sport', 49.99),
(11, 3, 4, 'Chaussures sport', 49.99),
(12, 3, 3, 'Casquette', 12.50),
(13, 3, 3, 'Casquette', 12.50);

-- --------------------------------------------------------

--
-- Structure de la table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `image`) VALUES
(1, 'Chaussures', 49.99, 'chaussures/photo-1542291026-7eec264c27ff.jpg'),
(2, 'T-shirt', 19.99, 'vetements/photo-1542060748-10c28b62716f.jpg'),
(3, 'Casquette', 12.5, 'vetements/photo-1489987707025-afc232f7ea0f.jpg'),
(4, 'Chaussures sport', 49.99, 'chaussures/photo-1542291026-7eec264c27ff.jpg'),
(5, 'Chaussures running', 59.99, 'chaussures/photo-1525966222134-fcfa99b8ae77.jpg'),
(6, 'Chaussures casual', 45, 'chaussures/photo-1600185365483-26d7a4cc7519.jpg'),
(7, 'Chaussures urbaines', 55, 'chaussures/photo-1603808033192-082d6919d3e1.jpg'),
(8, 'Lunettes soleil', 19.99, 'lunettes/photo-1511499767150-a48a237f0083.jpg'),
(9, 'Montre classique', 89.99, 'montres/photo-1523275335684-37898b6baf30.jpg'),
(10, 'Sac cuir', 69.99, 'sacs/photo-1548036328-c9fa89d128fa.jpg'),
(11, 'Sac voyage', 79.99, 'sacs/photo-1584917865442-de89df76afd3.jpg'),
(12, 'T-shirt blanc', 19.99, 'vetements/photo-1542060748-10c28b62716f.jpg'),
(13, 'T-shirt noir', 18.99, 'vetements/photo-1489987707025-afc232f7ea0f.jpg'),
(14, 'Pull coton', 29.99, 'vetements/photo-1503341455253-b2e723bb3dbb.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES
(1, 'nouha', 'nohaelabrouki@gmail.com', '$2y$10$8FQ33H4/WoFaHpMQXsSKhepE4JTi5mVl6JIX1xOHHU70T1vwEzZBm'),
(2, 'toto', 'toto@gmail.com', '$2y$10$MbNMn384byWR..Wgd3BKS.9ZX3TObESmZ.sMpL9u6R0LjMdWRNE/.'),
(3, 'nana', 'nana@hotmail.fr', '$2y$10$xtwzWMHQHTEc1shd8xuJ0e7d9WsDhmWE5R5wYnfVRpVNkOOfhd8BK'),
(4, 'test', 'test@gmail.com', '$2y$10$C.aBdfq0715iGqWJ0b1rWehfofVbhqAP6Nzg0Ie9nJzrhK1mCw.9O');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`);

--
-- Index pour la table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT pour la table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
