-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Мар 15 2023 г., 19:23
-- Версия сервера: 10.3.13-MariaDB-log
-- Версия PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `calendary`
--

-- --------------------------------------------------------

--
-- Структура таблицы `date`
--

CREATE TABLE `date` (
  `id` int(11) NOT NULL,
  `text` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `date`
--

INSERT INTO `date` (`id`, `text`, `date`) VALUES
(25, 'Сходить на учёбу!!!', '2023-03-05'),
(26, 'Сходить на учёбу!!!', '2023-03-12'),
(27, 'gds', '2023-03-11'),
(28, 'gds', '2023-03-04'),
(29, 'asd', '2023-04-07'),
(30, 'asd', '2023-04-14'),
(31, 'Да', '2023-03-05'),
(32, 'пваы', '2023-03-09'),
(33, 'asf', '2023-02-09'),
(34, 'asf', '2023-02-02'),
(35, 'pol', '2023-07-02'),
(36, 'asfgdags', '2024-03-02'),
(37, 'asfgdags', '2024-03-09'),
(38, 'gfdrsgsd', '2024-02-08'),
(39, 'gfdrsgsd', '2024-02-01'),
(40, 'asd', '2024-02-29'),
(41, 'ДА', '2023-03-17'),
(42, 'павы', '2023-03-06'),
(43, '', '2023-03-30'),
(44, '', '2023-03-29'),
(45, '', '2023-03-17'),
(46, '', '2023-03-18'),
(47, '', '2023-03-31');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `date`
--
ALTER TABLE `date`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `date`
--
ALTER TABLE `date`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
