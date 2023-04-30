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
DROP DATABASE IF EXISTS `shoeswing_db`;
CREATE DATABASE IF NOT EXISTS `shoeswing_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `shoeswing_db`;

-- Dumping structure for table shoeswing_db.categories
DROP TABLE IF EXISTS `categories`;
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
DROP TABLE IF EXISTS `colors`;
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
DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL DEFAULT '0',
  `description` varchar(500) NOT NULL DEFAULT '0',
  `price` decimal(12,2) NOT NULL DEFAULT 0.00,
  `image` varchar(50) NOT NULL DEFAULT '0',
  `discount` int(11) NOT NULL DEFAULT 0,
  `category_id` int(11) NOT NULL DEFAULT 0,
  `type` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `FK_products_categories` (`category_id`),
  CONSTRAINT `FK_products_categories` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table shoeswing_db.products: ~10 rows (approximately)
INSERT INTO `products` (`id`, `name`, `description`, `price`, `image`, `discount`, `category_id`, `type`) VALUES
	(1, 'Campera Fila Energy', 'La Campera Hombre Fila Energy es de manga raglán con tejido plano ligero de mezcla de poliéster con elastano, cremallera frontal en color combinación, acabado en el bajo con elástico personalizado.', 16700.00, 'campera_fila.jpg', 10, 1, 'ropa'),
	(2, 'Botines Puma Future Z 4.1 FG/AG', '-Perfil de caña baja\r\n-Empeine de diseño suave y flexible para mejorar la sensación en el pie\r\n-Suela exterior con Dynamic Motion System, que brinda libertad de movimiento y sujeción para los cambios de movimiento dinámicos\r\n-Configuración de remaches avanzada para mejorar la tracción multidireccional\r\n-Empeine texturizado para proporcionar un tacto superior en las zonas de contacto clave durante las jugadas de pases y dribbling\r\n-Talonera integrada para una sujeción y cierre excelentes\r\n-FG/AG:', 25800.00, 'botines_puma.jpg', 10, 2, 'zapatilla'),
	(3, 'Short Fútbol adidas Argentina Entrenamiento', 'En el año en que Argentina se coronó campeona del mundo, tus hijos piden el Short Fútbol adidas Argentina Entrenamiento Tiro 23 para Niños. Una prenda que los llena de pasión en cada entrenamiento o partido, cómoda hecha con un poliester de calidad que podrás lavar después de cada juego para usar por mucho tiempo. La tecnología AEROREADY los mantiene secos en todo momento ya que absorbe la transpiración y la aleja de su cuerpo. ', 15400.00, 'short-arg.JPG', 10, 2, 'ropa'),
	(4, 'Zapatillas Nike Air Max Excee', 'Lucí con estilo en tus entrenamientos o en tu día a día gracias a las Zapatillas Nike Air Max Excee, su tecnología Air max te brinda mejores y amortiguadas pisadas que te harán sentir seguro y confiado en cualquier momento que las lleves puestas.', 49999.00, 'zapatilla_nike.jpg', 15, 1, 'zapatilla'),
	(5, 'Remera Wilson ATP', '• Remera manga corta.  • Cuello redondo. • Estampa Wilson delantera.', 10900.00, 'remera_wilson.jpg', 5, 1, 'ropa'),
	(6, 'Camiseta Adidas AFA 3 Estrellas Campeones del Mundo', 'VESTITE COMO CAMPEÓN DEL MUNDO. La tercera estrella sobre el escudo AFA y el detalle de Campeones del Mundo en la espalda celebran una victoria memorable.A lo largo de la historia del fútbol, la Albiceleste ha representado un juego y un compromiso incomparables. Diseñada para hinchas, ofrece comodidad en todo momento gracias a su tejido suave con tecnología de absorción AEROREADY. Realizada con una materiales reciclados y renovables. ', 23999.00, 'remera-arg.jpg', 10, 2, 'ropa'),
	(7, 'Remera Nike Keep It Clean De Hombre', 'SIEMPRE IMPECABLE. SIEMPRE CÓMODO.Hecha con nuestro corte clásico y una tela de algodón para todos los días, la playera Nike Sportswear Keep It Clean tiene una sensación suave y familiar perfecta para el uso diario. Inspirado en el estilo espumoso de los envases retro de detergente, el estampado ofrece un look fresco para un nuevo atuendo.', 13099.00, 'remera_nike.jpg', 5, 1, 'ropa'),
	(8, 'Botines adidas Predator Edge.4 Fxg', 'Lucí como una estrella con los Botines adidas Predator Edge.4 Fxg. Este calzado abunda en tecnología deportiva. Cuenta con una nueva y estratégica colocación del ZONE SKIN a lo largo de todo el calzado para tener un mejor contacto con la pelota. La construcción Primeknit ofrece un ajuste personalizado para brindar comodidad en el juego. Además, la suela está hecha con tacos en forma de diamante para optimizar la tracción en giros, las frenadas, arrancar y trotar. No importa cuál sea tu posición ', 25699.00, 'botines-adidas.jpg', 10, 2, 'zapatilla'),
	(9, 'Zapatillas adidas Duramo Sl 2.0', 'Las Zapatillas adidas Duramo Sl 2.0 presentan un diseño moderno y urbano, ideal para los runners que aman la moda. Su exterior de malla aporta transpirabilidad y resistencia, mientras que la suela de caucho aporta tracción en diversas superficies. La amortiguación LIGHTMOTION mejora tus pasos y te brinda la comodidad que necesitas para superar todas tus marcas. ', 31999.00, 'zap-adidas.jpg', 10, 1, 'zapatilla'),
	(10, 'Botines Nike Jr. Mercurial Superfly 8 Academy Mg', 'Los más chicos se sentirán como uno de sus jugadores favoritos con los Botines Nike Jr. Mercurial Superfly Academy Mg y creerán estar volando! Cuentan con unos tacos que se adaptan fácilmente al campo natural o artificial dándoles tracción y eficiencia en el cambio de ritmo. Su cuello Dynamic Fit crea un soporte seguro para sus tobillos y para hacerlos ver como unas verdaderas estrellas del fútbol. ', 29499.00, 'botines-nike.jpg', 10, 2, 'zapatilla');

-- Dumping structure for table shoeswing_db.products_features
DROP TABLE IF EXISTS `products_features`;
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
DROP TABLE IF EXISTS `sizes`;
CREATE TABLE IF NOT EXISTS `sizes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `size` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table shoeswing_db.sizes: ~12 rows (approximately)
INSERT INTO `sizes` (`id`, `size`) VALUES
	(1, 'xs'),
	(2, 's'),
	(3, 'm'),
	(4, 'l'),
	(5, 'xl'),
	(6, '38'),
	(7, '39'),
	(8, '40'),
	(9, '41'),
	(10, '42'),
	(11, '43'),
	(12, '44');

-- Dumping structure for table shoeswing_db.users
DROP TABLE IF EXISTS `users`;
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
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table shoeswing_db.users: ~5 rows (approximately)
INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `user_category_id`, `user_image`) VALUES
	(1, 'martin', 'gonzalez', 'martingonzalezachaval@gmail.com', 'Talleres20', 1, 'archivo'),
	(11, ' prueba', ' prueba', 'lose@linxdigital.com', '$2b$10$QDXMtMNUrl1to8e286iS5eiragBZwQ5Ajz9u.W01rpgzAV.DmgEhy', 2, NULL),
	(12, ' martin', ' prueba', 'martin@linxdigital.com', '$2b$10$yxs6L.Ld7ACGWgCIZ9gWxeBn620lsN8H2RfST0DotSu9u5Z78ludi', 1, NULL),
	(13, ' Juan Pablo', 'Castellano', 'jpcastellano1990@gmail.com', '$2b$10$mE05V1k1DNZTFBy8RmGyte3ZyL/ehgq9b0e6.LjHsiNewvstLP7mK', 1, NULL),
	(14, ' ', ' ', 'fasds@gmail.com', '$2b$10$9AaxDSh2s5mBLrKl9YMiAOwiO6emGRAULEfFGaCfnzvACAR7/dbw.', 2, NULL),
	(15, ' martin', 'gonzalez', 'martingonzalezachaval86@gmail.com', '$2b$10$BQMpo/5Vcpf/yfQ3IIne6.q3sqxiqTXzQiLSwWd4MimyrFIM2L.Ue', 2, NULL);

-- Dumping structure for table shoeswing_db.users_categories
DROP TABLE IF EXISTS `users_categories`;
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
DROP TABLE IF EXISTS `users_products`;
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
