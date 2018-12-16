-- phpMyAdmin SQL Dump
-- version 4.4.15.7
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1:3306
-- Время создания: Дек 13 2018 г., 00:36
-- Версия сервера: 5.6.31
-- Версия PHP: 5.6.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `node_site`
--

-- --------------------------------------------------------

--
-- Структура таблицы `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'man'),
(2, 'women'),
(3, 'kids');

-- --------------------------------------------------------

--
-- Структура таблицы `currency`
--

CREATE TABLE IF NOT EXISTS `currency` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `code` varchar(100) DEFAULT NULL,
  `symbol` varchar(100) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=114 DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `currency`
--

INSERT INTO `currency` (`id`, `name`, `code`, `symbol`) VALUES
(1, 'Leke', 'ALL', 'Lek'),
(3, 'Dollars', 'USD', '$'),
(4, 'Afghanis', 'AFN', '؋'),
(5, 'Pesos', 'ARS', '$'),
(6, 'Guilders', 'AWG', 'ƒ'),
(7, 'Dollars', 'AUD', '$'),
(8, 'New Manats', 'AZN', 'ман'),
(9, 'Dollars', 'BSD', '$'),
(10, 'Dollars', 'BBD', '$'),
(11, 'Rubles', 'BYR', 'p.'),
(12, 'Euro', 'EUR', '€'),
(13, 'Dollars', 'BZD', 'BZ$'),
(14, 'Dollars', 'BMD', '$'),
(15, 'Bolivianos', 'BOB', '$b'),
(16, 'Convertible Marka', 'BAM', 'KM'),
(17, 'Pula', 'BWP', 'P'),
(18, 'Leva', 'BGN', 'лв'),
(19, 'Reais', 'BRL', 'R$'),
(20, 'Pounds', 'GBP', '£'),
(21, 'Dollars', 'BND', '$'),
(22, 'Riels', 'KHR', '៛'),
(23, 'Dollars', 'CAD', '$'),
(24, 'Dollars', 'KYD', '$'),
(25, 'Pesos', 'CLP', '$'),
(26, 'Yuan Renminbi', 'CNY', '¥'),
(27, 'Pesos', 'COP', '$'),
(28, 'Colón', 'CRC', '₡'),
(29, 'Kuna', 'HRK', 'kn'),
(30, 'Pesos', 'CUP', '₱'),
(31, 'Koruny', 'CZK', 'Kč'),
(32, 'Kroner', 'DKK', 'kr'),
(33, 'Pesos', 'DOP ', 'RD$'),
(34, 'Dollars', 'XCD', '$'),
(35, 'Pounds', 'EGP', '£'),
(36, 'Colones', 'SVC', '$'),
(37, 'Pounds', 'FKP', '£'),
(38, 'Dollars', 'FJD', '$'),
(39, 'Cedis', 'GHC', '¢'),
(40, 'Pounds', 'GIP', '£'),
(41, 'Quetzales', 'GTQ', 'Q'),
(42, 'Pounds', 'GGP', '£'),
(43, 'Dollars', 'GYD', '$'),
(44, 'Lempiras', 'HNL', 'L'),
(45, 'Dollars', 'HKD', '$'),
(46, 'Forint', 'HUF', 'Ft'),
(47, 'Kronur', 'ISK', 'kr'),
(48, 'Rupees', 'INR', 'Rp'),
(49, 'Rupiahs', 'IDR', 'Rp'),
(50, 'Rials', 'IRR', '﷼'),
(51, 'Pounds', 'IMP', '£'),
(52, 'New Shekels', 'ILS', '₪'),
(53, 'Dollars', 'JMD', 'J$'),
(54, 'Yen', 'JPY', '¥'),
(55, 'Pounds', 'JEP', '£'),
(56, 'Tenge', 'KZT', 'лв'),
(57, 'Won', 'KPW', '₩'),
(58, 'Won', 'KRW', '₩'),
(59, 'Soms', 'KGS', 'лв'),
(60, 'Kips', 'LAK', '₭'),
(61, 'Lati', 'LVL', 'Ls'),
(62, 'Pounds', 'LBP', '£'),
(63, 'Dollars', 'LRD', '$'),
(64, 'Switzerland Francs', 'CHF', 'CHF'),
(65, 'Litai', 'LTL', 'Lt'),
(66, 'Denars', 'MKD', 'ден'),
(67, 'Ringgits', 'MYR', 'RM'),
(68, 'Rupees', 'MUR', '₨'),
(69, 'Pesos', 'MXN', '$'),
(70, 'Tugriks', 'MNT', '₮'),
(71, 'Meticais', 'MZN', 'MT'),
(72, 'Dollars', 'NAD', '$'),
(73, 'Rupees', 'NPR', '₨'),
(74, 'Guilders', 'ANG', 'ƒ'),
(75, 'Dollars', 'NZD', '$'),
(76, 'Cordobas', 'NIO', 'C$'),
(77, 'Nairas', 'NGN', '₦'),
(78, 'Krone', 'NOK', 'kr'),
(79, 'Rials', 'OMR', '﷼'),
(80, 'Rupees', 'PKR', '₨'),
(81, 'Balboa', 'PAB', 'B/.'),
(82, 'Guarani', 'PYG', 'Gs'),
(83, 'Nuevos Soles', 'PEN', 'S/.'),
(84, 'Pesos', 'PHP', 'Php'),
(85, 'Zlotych', 'PLN', 'zł'),
(86, 'Rials', 'QAR', '﷼'),
(87, 'New Lei', 'RON', 'lei'),
(88, 'Rubles', 'RUB', 'руб'),
(89, 'Pounds', 'SHP', '£'),
(90, 'Riyals', 'SAR', '﷼'),
(91, 'Dinars', 'RSD', 'Дин.'),
(92, 'Rupees', 'SCR', '₨'),
(93, 'Dollars', 'SGD', '$'),
(94, 'Dollars', 'SBD', '$'),
(95, 'Shillings', 'SOS', 'S'),
(96, 'Rand', 'ZAR', 'R'),
(97, 'Rupees', 'LKR', '₨'),
(98, 'Kronor', 'SEK', 'kr'),
(99, 'Dollars', 'SRD', '$'),
(100, 'Pounds', 'SYP', '£'),
(101, 'New Dollars', 'TWD', 'NT$'),
(102, 'Baht', 'THB', '฿'),
(103, 'Dollars', 'TTD', 'TT$'),
(104, 'Lira', 'TRY', 'TL'),
(105, 'Liras', 'TRL', '£'),
(106, 'Dollars', 'TVD', '$'),
(107, 'Hryvnia', 'UAH', '₴'),
(108, 'Pesos', 'UYU', '$U'),
(109, 'Sums', 'UZS', 'лв'),
(110, 'Bolivares Fuertes', 'VEF', 'Bs'),
(111, 'Dong', 'VND', '₫'),
(112, 'Rials', 'YER', '﷼'),
(113, 'Zimbabwe Dollars', 'ZWD', 'Z$');

-- --------------------------------------------------------

--
-- Структура таблицы `images`
--

CREATE TABLE IF NOT EXISTS `images` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `description` text,
  `default_image` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `currency_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `gender` enum('female','male') NOT NULL DEFAULT 'female',
  `birthdate` date DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `avatar_img` int(11) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `gender`, `birthdate`, `password`, `avatar_img`) VALUES
(1, 'Hayk', 'Margaryan', 'haykmargaryan0096@gmail.com', 'male', '1996-10-21', '@Q12e34t56u78', NULL);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categories_id_uindex` (`id`);

--
-- Индексы таблицы `currency`
--
ALTER TABLE `currency`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `images_id_uindex` (`id`),
  ADD KEY `fk_images_product_id` (`product_id`),
  ADD KEY `fk_images_users_id` (`user_id`);

--
-- Индексы таблицы `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `products_id_uindex` (`id`),
  ADD KEY `fk_prods_currency_id` (`currency_id`),
  ADD KEY `fk_prods_category_id` (`category_id`),
  ADD KEY `fk_products_images_id` (`default_image`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_id_uindex` (`id`),
  ADD KEY `fk_users_avatar_image_id` (`avatar_img`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT для таблицы `currency`
--
ALTER TABLE `currency`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=114;
--
-- AUTO_INCREMENT для таблицы `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `fk_images_product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `fk_images_users_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Ограничения внешнего ключа таблицы `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_prods_category_id` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `fk_prods_currency_id` FOREIGN KEY (`currency_id`) REFERENCES `currency` (`id`),
  ADD CONSTRAINT `fk_products_images_id` FOREIGN KEY (`default_image`) REFERENCES `images` (`id`);

--
-- Ограничения внешнего ключа таблицы `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fk_users_avatar_image_id` FOREIGN KEY (`avatar_img`) REFERENCES `images` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
