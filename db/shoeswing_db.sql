-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.27-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for shoeswing_db
CREATE DATABASE IF NOT EXISTS `shoeswing_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `shoeswing_db`;

-- Dumping structure for table shoeswing_db.categories
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table shoeswing_db.categories: ~2 rows (approximately)
INSERT INTO `categories` (`id`, `category`) VALUES
	(1, 'En oferta'),
	(2, 'Ultimos visitados');

-- Dumping structure for table shoeswing_db.colors
CREATE TABLE IF NOT EXISTS `colors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `color` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table shoeswing_db.colors: ~2 rows (approximately)
INSERT INTO `colors` (`id`, `color`) VALUES
	(1, 'rojo'),
	(2, 'blanco');

-- Dumping structure for table shoeswing_db.products
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '0',
  `description` varchar(50) NOT NULL DEFAULT '0',
  `price` decimal(12,2) NOT NULL DEFAULT 0.00,
  `image` varchar(50) NOT NULL DEFAULT '0',
  `discount` int(11) NOT NULL DEFAULT 0,
  `category_id` int(11) NOT NULL DEFAULT 0,
  `type` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `FK_products_categories` (`category_id`),
  CONSTRAINT `FK_products_categories` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table shoeswing_db.products: ~0 rows (approximately)
INSERT INTO `products` (`id`, `name`, `description`, `price`, `image`, `discount`, `category_id`, `type`) VALUES
	(1, 'Campera Adidas', 'nananana', 6000.00, 'campera_fila.jpg', 10, 1, 'ropa');

-- Dumping structure for table shoeswing_db.products_features
CREATE TABLE IF NOT EXISTS `products_features` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL DEFAULT 0,
  `color_id` int(11) NOT NULL DEFAULT 0,
  `size_id` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `FK__products` (`product_id`),
  KEY `FK__colors` (`color_id`),
  KEY `FK__sizes` (`size_id`),
  CONSTRAINT `FK__colors` FOREIGN KEY (`color_id`) REFERENCES `colors` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK__products` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK__sizes` FOREIGN KEY (`size_id`) REFERENCES `sizes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table shoeswing_db.products_features: ~6 rows (approximately)
INSERT INTO `products_features` (`id`, `product_id`, `color_id`, `size_id`) VALUES
	(1, 1, 2, 2),
	(2, 1, 1, 1),
	(3, 1, 2, 1),
	(4, 1, 2, 3),
	(5, 1, 2, 4),
	(6, 1, 2, 5);

-- Dumping structure for table shoeswing_db.sizes
CREATE TABLE IF NOT EXISTS `sizes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `size` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table shoeswing_db.sizes: ~5 rows (approximately)
INSERT INTO `sizes` (`id`, `size`) VALUES
	(1, 'xs'),
	(2, 's'),
	(3, 'm'),
	(4, 'l'),
	(5, 'xl');

-- Dumping structure for table shoeswing_db.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL DEFAULT '0',
  `last_name` varchar(50) NOT NULL DEFAULT '0',
  `email` varchar(50) NOT NULL DEFAULT '0',
  `password` varchar(100) DEFAULT '0',
  `user_category_id` int(11) NOT NULL,
  `user_image` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_users_users_categories` (`user_category_id`),
  CONSTRAINT `FK_users_users_categories` FOREIGN KEY (`user_category_id`) REFERENCES `users_categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table shoeswing_db.users: ~3 rows (approximately)
INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `user_category_id`, `user_image`) VALUES
	(1, 'martin', 'gonzalez', 'martingonzalezachaval@gmail.com', 'Talleres20', 1, 'archivo'),
	(11, ' prueba', ' prueba', 'lose@linxdigital.com', '$2b$10$QDXMtMNUrl1to8e286iS5eiragBZwQ5Ajz9u.W01rpgzAV.DmgEhy', 2, NULL),
	(12, ' martin', ' prueba', 'martin@linxdigital.com', '$2b$10$yxs6L.Ld7ACGWgCIZ9gWxeBn620lsN8H2RfST0DotSu9u5Z78ludi', 1, NULL);

-- Dumping structure for table shoeswing_db.users_categories
CREATE TABLE IF NOT EXISTS `users_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rol` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table shoeswing_db.users_categories: ~2 rows (approximately)
INSERT INTO `users_categories` (`id`, `rol`) VALUES
	(1, 'admin'),
	(2, 'cliente');

-- Dumping structure for table shoeswing_db.users_products
CREATE TABLE IF NOT EXISTS `users_products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL DEFAULT 0,
  `product_id` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `FK_users_products_users` (`user_id`),
  KEY `FK_users_products_products` (`product_id`),
  CONSTRAINT `FK_users_products_products` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_users_products_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table shoeswing_db.users_products: ~0 rows (approximately)
INSERT INTO `users_products` (`id`, `user_id`, `product_id`) VALUES
	(1, 1, 1);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
