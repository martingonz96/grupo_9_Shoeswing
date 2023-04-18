-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-04-2023 a las 18:48:14
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `shoeswing_db`
--
CREATE DATABASE IF NOT EXISTS `shoeswing_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `shoeswing_db`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `category` varchar(50) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `category`) VALUES
(1, 'En oferta'),
(2, 'Ultimos visitados');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colors`
--

DROP TABLE IF EXISTS `colors`;
CREATE TABLE `colors` (
  `id` int(11) NOT NULL,
  `color` varchar(50) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `colors`
--

INSERT INTO `colors` (`id`, `color`) VALUES
(1, 'rojo'),
(2, 'blanco');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL DEFAULT '0',
  `description` varchar(500) NOT NULL DEFAULT '0',
  `price` decimal(12,2) NOT NULL DEFAULT 0.00,
  `image` varchar(50) NOT NULL DEFAULT '0',
  `discount` int(11) NOT NULL DEFAULT 0,
  `category_id` int(11) NOT NULL DEFAULT 0,
  `type` varchar(50) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `image`, `discount`, `category_id`, `type`) VALUES
(1, 'Campera Fila Energy', 'La Campera Hombre Fila Energy es de manga raglán con tejido plano ligero de mezcla de poliéster con elastano, cremallera frontal en color combinación, acabado en el bajo con elástico personalizado.', '16700.00', 'campera_fila.jpg', 10, 1, 'ropa'),
(2, 'Botines Puma Future Z 4.1 FG/AG', '-Perfil de caña baja\r\n-Empeine de diseño suave y flexible para mejorar la sensación en el pie\r\n-Suela exterior con Dynamic Motion System, que brinda libertad de movimiento y sujeción para los cambios de movimiento dinámicos\r\n-Configuración de remaches avanzada para mejorar la tracción multidireccional\r\n-Empeine texturizado para proporcionar un tacto superior en las zonas de contacto clave durante las jugadas de pases y dribbling\r\n-Talonera integrada para una sujeción y cierre excelentes\r\n-FG/AG:', '25800.00', 'botines_puma.jpg', 10, 2, 'zapatilla'),
(3, 'Short Fútbol adidas Argentina Entrenamiento', 'En el año en que Argentina se coronó campeona del mundo, tus hijos piden el Short Fútbol adidas Argentina Entrenamiento Tiro 23 para Niños. Una prenda que los llena de pasión en cada entrenamiento o partido, cómoda hecha con un poliester de calidad que podrás lavar después de cada juego para usar por mucho tiempo. La tecnología AEROREADY los mantiene secos en todo momento ya que absorbe la transpiración y la aleja de su cuerpo. ', '15400.00', 'short-arg.JPG', 10, 2, 'ropa'),
(4, 'Zapatillas Nike Air Max Excee', 'Lucí con estilo en tus entrenamientos o en tu día a día gracias a las Zapatillas Nike Air Max Excee, su tecnología Air max te brinda mejores y amortiguadas pisadas que te harán sentir seguro y confiado en cualquier momento que las lleves puestas.', '49999.00', 'zapatilla_nike.jpg', 15, 1, 'zapatilla'),
(5, 'Remera Wilson ATP', '• Remera manga corta.  • Cuello redondo. • Estampa Wilson delantera.', '10900.00', 'remera_wilson.jpg', 5, 1, 'ropa'),
(6, 'Camiseta Adidas AFA 3 Estrellas Campeones del Mundo', 'VESTITE COMO CAMPEÓN DEL MUNDO. La tercera estrella sobre el escudo AFA y el detalle de Campeones del Mundo en la espalda celebran una victoria memorable.A lo largo de la historia del fútbol, la Albiceleste ha representado un juego y un compromiso incomparables. Diseñada para hinchas, ofrece comodidad en todo momento gracias a su tejido suave con tecnología de absorción AEROREADY. Realizada con una materiales reciclados y renovables. ', '23999.00', 'remera-arg.jpg', 10, 2, 'ropa'),
(7, 'Remera Nike Keep It Clean De Hombre', 'SIEMPRE IMPECABLE. SIEMPRE CÓMODO.Hecha con nuestro corte clásico y una tela de algodón para todos los días, la playera Nike Sportswear Keep It Clean tiene una sensación suave y familiar perfecta para el uso diario. Inspirado en el estilo espumoso de los envases retro de detergente, el estampado ofrece un look fresco para un nuevo atuendo.', '13099.00', 'remera_nike.jpg', 5, 1, 'ropa'),
(8, 'Botines adidas Predator Edge.4 Fxg', 'Lucí como una estrella con los Botines adidas Predator Edge.4 Fxg. Este calzado abunda en tecnología deportiva. Cuenta con una nueva y estratégica colocación del ZONE SKIN a lo largo de todo el calzado para tener un mejor contacto con la pelota. La construcción Primeknit ofrece un ajuste personalizado para brindar comodidad en el juego. Además, la suela está hecha con tacos en forma de diamante para optimizar la tracción en giros, las frenadas, arrancar y trotar. No importa cuál sea tu posición ', '25699.00', 'botines-adidas.jpg', 10, 2, 'zapatilla'),
(9, 'Zapatillas adidas Duramo Sl 2.0', 'Las Zapatillas adidas Duramo Sl 2.0 presentan un diseño moderno y urbano, ideal para los runners que aman la moda. Su exterior de malla aporta transpirabilidad y resistencia, mientras que la suela de caucho aporta tracción en diversas superficies. La amortiguación LIGHTMOTION mejora tus pasos y te brinda la comodidad que necesitas para superar todas tus marcas. ', '31999.00', 'zap-adidas.jpg', 10, 1, 'zapatilla'),
(10, 'Botines Nike Jr. Mercurial Superfly 8 Academy Mg', 'Los más chicos se sentirán como uno de sus jugadores favoritos con los Botines Nike Jr. Mercurial Superfly Academy Mg y creerán estar volando! Cuentan con unos tacos que se adaptan fácilmente al campo natural o artificial dándoles tracción y eficiencia en el cambio de ritmo. Su cuello Dynamic Fit crea un soporte seguro para sus tobillos y para hacerlos ver como unas verdaderas estrellas del fútbol. ', '29499.00', 'botines-nike.jpg', 10, 2, 'zapatilla');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products_features`
--

DROP TABLE IF EXISTS `products_features`;
CREATE TABLE `products_features` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL DEFAULT 0,
  `color_id` int(11) NOT NULL DEFAULT 0,
  `size_id` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products_features`
--

INSERT INTO `products_features` (`id`, `product_id`, `color_id`, `size_id`) VALUES
(1, 1, 2, 2),
(2, 1, 1, 1),
(3, 1, 2, 1),
(4, 1, 2, 3),
(5, 1, 2, 4),
(6, 1, 2, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sizes`
--

DROP TABLE IF EXISTS `sizes`;
CREATE TABLE `sizes` (
  `id` int(11) NOT NULL,
  `size` varchar(50) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `sizes`
--

INSERT INTO `sizes` (`id`, `size`) VALUES
(1, 'xs'),
(2, 's'),
(3, 'm'),
(4, 'l'),
(5, 'xl');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL DEFAULT '0',
  `last_name` varchar(50) NOT NULL DEFAULT '0',
  `email` varchar(50) NOT NULL DEFAULT '0',
  `password` varchar(100) DEFAULT '0',
  `user_category_id` int(11) NOT NULL,
  `user_image` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `user_category_id`, `user_image`) VALUES
(1, 'martin', 'gonzalez', 'martingonzalezachaval@gmail.com', 'Talleres20', 1, 'archivo'),
(11, ' prueba', ' prueba', 'lose@linxdigital.com', '$2b$10$QDXMtMNUrl1to8e286iS5eiragBZwQ5Ajz9u.W01rpgzAV.DmgEhy', 2, NULL),
(12, ' martin', ' prueba', 'martin@linxdigital.com', '$2b$10$yxs6L.Ld7ACGWgCIZ9gWxeBn620lsN8H2RfST0DotSu9u5Z78ludi', 1, NULL),
(13, ' Juan Pablo', 'Castellano', 'jpcastellano1990@gmail.com', '$2b$10$mE05V1k1DNZTFBy8RmGyte3ZyL/ehgq9b0e6.LjHsiNewvstLP7mK', 1, NULL),
(14, ' ', ' ', 'fasds@gmail.com', '$2b$10$9AaxDSh2s5mBLrKl9YMiAOwiO6emGRAULEfFGaCfnzvACAR7/dbw.', 2, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_categories`
--

DROP TABLE IF EXISTS `users_categories`;
CREATE TABLE `users_categories` (
  `id` int(11) NOT NULL,
  `rol` varchar(50) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users_categories`
--

INSERT INTO `users_categories` (`id`, `rol`) VALUES
(1, 'admin'),
(2, 'cliente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_products`
--

DROP TABLE IF EXISTS `users_products`;
CREATE TABLE `users_products` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL DEFAULT 0,
  `product_id` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users_products`
--

INSERT INTO `users_products` (`id`, `user_id`, `product_id`) VALUES
(1, 1, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_products_categories` (`category_id`);

--
-- Indices de la tabla `products_features`
--
ALTER TABLE `products_features`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK__products` (`product_id`),
  ADD KEY `FK__colors` (`color_id`),
  ADD KEY `FK__sizes` (`size_id`);

--
-- Indices de la tabla `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_users_users_categories` (`user_category_id`);

--
-- Indices de la tabla `users_categories`
--
ALTER TABLE `users_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users_products`
--
ALTER TABLE `users_products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_users_products_users` (`user_id`),
  ADD KEY `FK_users_products_products` (`product_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `colors`
--
ALTER TABLE `colors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `products_features`
--
ALTER TABLE `products_features`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `sizes`
--
ALTER TABLE `sizes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `users_categories`
--
ALTER TABLE `users_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users_products`
--
ALTER TABLE `users_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `FK_products_categories` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `products_features`
--
ALTER TABLE `products_features`
  ADD CONSTRAINT `FK__colors` FOREIGN KEY (`color_id`) REFERENCES `colors` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK__products` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK__sizes` FOREIGN KEY (`size_id`) REFERENCES `sizes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `FK_users_users_categories` FOREIGN KEY (`user_category_id`) REFERENCES `users_categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `users_products`
--
ALTER TABLE `users_products`
  ADD CONSTRAINT `FK_users_products_products` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_users_products_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
