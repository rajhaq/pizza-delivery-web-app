-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 06, 2020 at 01:52 PM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zero_pizza`
--

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `guest_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pizza_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `size` text COLLATE utf8mb4_unicode_ci,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `note` text COLLATE utf8mb4_unicode_ci,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`id`, `user_id`, `guest_id`, `pizza_id`, `name`, `size`, `type`, `price`, `quantity`, `status`, `image`, `note`, `deleted_at`, `created_at`, `updated_at`) VALUES
(42, 0, 'cfc2644e-0233-787b-6950-210321265ef0', 3, 'asd', 'large', 'pan', 12, 2, 1, 'http://adminpizza.salwagarden.com/storage/uploads/files/k8UAWCx65gTmisqUp1K6ucmNKLUsuJuBOJWEzQAs.jpeg', NULL, '2020-05-05 10:40:47', '2020-05-04 20:11:32', '2020-05-05 10:40:47'),
(43, 0, 'cfc2644e-0233-787b-6950-210321265ef0', 3, 'asd', 'large', 'pan', 12, 2, 1, 'http://adminpizza.salwagarden.com/storage/uploads/files/k8UAWCx65gTmisqUp1K6ucmNKLUsuJuBOJWEzQAs.jpeg', NULL, '2020-05-05 10:40:47', '2020-05-04 20:11:32', '2020-05-05 10:40:47'),
(44, 0, 'cfc2644e-0233-787b-6950-210321265ef0', 4, 'Mexican Chicken', 'large', 'pan', 20, 1, 1, 'http://adminpizza.salwagarden.com/storage/uploads/files/4sTjohB7Fg7YAiumvtEvoaJl1zmBNp8Wnt6I1cwT.png', NULL, '2020-05-05 10:40:47', '2020-05-04 20:11:33', '2020-05-05 10:40:47'),
(45, 0, 'cfc2644e-0233-787b-6950-210321265ef0', 4, 'Mexican Chicken', 'large', 'pan', 20, 1, 1, 'http://adminpizza.salwagarden.com/storage/uploads/files/4sTjohB7Fg7YAiumvtEvoaJl1zmBNp8Wnt6I1cwT.png', NULL, '2020-05-05 10:40:47', '2020-05-04 20:11:33', '2020-05-05 10:40:47'),
(46, 0, 'cfc2644e-0233-787b-6950-210321265ef0', 3, 'asd', 'large', 'pan', 12, 1, 1, 'http://adminpizza.salwagarden.com/storage/uploads/files/k8UAWCx65gTmisqUp1K6ucmNKLUsuJuBOJWEzQAs.jpeg', NULL, '2020-05-05 20:38:40', '2020-05-05 10:52:15', '2020-05-05 20:38:40'),
(47, 0, 'cfc2644e-0233-787b-6950-210321265ef0', 3, 'asd', 'large', 'pan', NULL, 1, 1, 'http://adminpizza.salwagarden.com/storage/uploads/files/k8UAWCx65gTmisqUp1K6ucmNKLUsuJuBOJWEzQAs.jpeg', 'Mashroom<br/>', '2020-05-05 20:38:47', '2020-05-05 20:20:34', '2020-05-05 20:38:47'),
(48, 0, 'cfc2644e-0233-787b-6950-210321265ef0', 3, 'asd', 'medium', 'cheesy', 27, 1, 1, 'http://adminpizza.salwagarden.com/storage/uploads/files/k8UAWCx65gTmisqUp1K6ucmNKLUsuJuBOJWEzQAs.jpeg', 'Mashroom<br/>', '2020-05-06 08:51:42', '2020-05-05 20:33:13', '2020-05-06 08:51:42'),
(49, 0, 'cfc2644e-0233-787b-6950-210321265ef0', 3, 'asd', 'medium', 'cheesy', 27, 1, 1, 'http://adminpizza.salwagarden.com/storage/uploads/files/k8UAWCx65gTmisqUp1K6ucmNKLUsuJuBOJWEzQAs.jpeg', 'Mashroom<br/>', '2020-05-05 20:38:51', '2020-05-05 20:33:13', '2020-05-05 20:38:51'),
(50, 0, 'cfc2644e-0233-787b-6950-210321265ef0', 4, 'Mexican Chicken', 'large', 'pan', 21, 1, 1, 'http://adminpizza.salwagarden.com/storage/uploads/files/4sTjohB7Fg7YAiumvtEvoaJl1zmBNp8Wnt6I1cwT.png', 'Mashroom<br/>', '2020-05-06 08:51:43', '2020-05-05 20:39:33', '2020-05-06 08:51:43'),
(51, 0, 'cfc2644e-0233-787b-6950-210321265ef0', 4, 'Mexican Chicken', 'large', 'pan', 21, 1, 1, 'http://adminpizza.salwagarden.com/storage/uploads/files/4sTjohB7Fg7YAiumvtEvoaJl1zmBNp8Wnt6I1cwT.png', 'Mashroom<br/>', '2020-05-06 08:51:56', '2020-05-06 08:51:38', '2020-05-06 08:51:56'),
(52, 0, 'cfc2644e-0233-787b-6950-210321265ef0', 4, 'Mexican Chicken', 'large', 'pan', 21, 2, 1, 'http://adminpizza.salwagarden.com/storage/uploads/files/4sTjohB7Fg7YAiumvtEvoaJl1zmBNp8Wnt6I1cwT.png', 'Mashroom<br/>', '2020-05-06 08:51:56', '2020-05-06 08:51:38', '2020-05-06 08:51:56'),
(53, 0, 'cfc2644e-0233-787b-6950-210321265ef0', 3, 'RED PEPPER CHICKEN', 'small', 'cheesy', 15, 1, 1, 'http://adminpizza.salwagarden.com/storage/uploads/files/Him67OblP6zndZpsMYuuLcFwSYCrTqf6YdiG7Fca.png', NULL, '2020-05-06 10:26:41', '2020-05-06 09:30:26', '2020-05-06 10:26:41'),
(54, 0, 'cfc2644e-0233-787b-6950-210321265ef0', 4, 'Mexican Chicken', 'medium', 'thin', 21, 1, 1, 'http://adminpizza.salwagarden.com/storage/uploads/files/fRPD9qlGYGei6dBG61HJZSaVQMwV84NNj5xBl5Rh.png', 'Mashroom<br/>Green Pepper<br/>Pineapple<br/>', '2020-05-06 10:56:04', '2020-05-06 10:44:25', '2020-05-06 10:56:04'),
(55, 0, 'cfc2644e-0233-787b-6950-210321265ef0', 4, 'Mexican Chicken', 'large', 'pan', 20, 1, 1, 'http://adminpizza.salwagarden.com/storage/uploads/files/fRPD9qlGYGei6dBG61HJZSaVQMwV84NNj5xBl5Rh.png', NULL, '2020-05-06 10:56:02', '2020-05-06 10:44:57', '2020-05-06 10:56:02'),
(56, 0, 'cfc2644e-0233-787b-6950-210321265ef0', 4, 'Mexican Chicken', 'small', 'thin', 17, 1, 1, 'http://adminpizza.salwagarden.com/storage/uploads/files/fRPD9qlGYGei6dBG61HJZSaVQMwV84NNj5xBl5Rh.png', 'Mashroom<br/>Garlic<br/>', '2020-05-06 10:56:42', '2020-05-06 10:56:13', '2020-05-06 10:56:42'),
(57, 0, 'cfc2644e-0233-787b-6950-210321265ef0', 4, 'Mexican Chicken', 'small', 'thin', 14, 1, 1, 'http://adminpizza.salwagarden.com/storage/uploads/files/fRPD9qlGYGei6dBG61HJZSaVQMwV84NNj5xBl5Rh.png', NULL, '2020-05-06 10:56:35', '2020-05-06 10:56:30', '2020-05-06 10:56:35'),
(58, 0, 'cfc2644e-0233-787b-6950-210321265ef0', 8, 'CLASSIC PEPPERONI', 'large', 'pan', 20, 1, 1, 'http://adminpizza.salwagarden.com/storage/uploads/files/pdyG59ZX6IC1KVchE6fA9VPYhHqqCi0rzyeEJqri.png', NULL, '2020-05-06 11:24:46', '2020-05-06 11:09:49', '2020-05-06 11:24:46'),
(59, 0, 'cfc2644e-0233-787b-6950-210321265ef0', 8, 'CLASSIC PEPPERONI', 'small', 'thin', 16, 1, 1, 'http://adminpizza.salwagarden.com/storage/uploads/files/pdyG59ZX6IC1KVchE6fA9VPYhHqqCi0rzyeEJqri.png', 'Mashroom<br/>Garlic<br/>Green Chilly<br/>', '2020-05-06 11:24:54', '2020-05-06 11:10:39', '2020-05-06 11:24:54'),
(60, 0, 'cfc2644e-0233-787b-6950-210321265ef0', 8, 'CLASSIC PEPPERONI', 'small', 'thin', 16, 1, 1, 'http://adminpizza.salwagarden.com/storage/uploads/files/pdyG59ZX6IC1KVchE6fA9VPYhHqqCi0rzyeEJqri.png', 'Mashroom<br/>Garlic<br/>Green Chilly<br/>', '2020-05-06 11:24:55', '2020-05-06 11:10:52', '2020-05-06 11:24:55'),
(61, 0, 'cfc2644e-0233-787b-6950-210321265ef0', 8, 'CLASSIC PEPPERONI', 'large', 'pan', 20, 1, 1, 'http://adminpizza.salwagarden.com/storage/uploads/files/pdyG59ZX6IC1KVchE6fA9VPYhHqqCi0rzyeEJqri.png', NULL, '2020-05-06 11:24:57', '2020-05-06 11:11:11', '2020-05-06 11:24:57'),
(62, 0, 'cfc2644e-0233-787b-6950-210321265ef0', 8, 'CLASSIC PEPPERONI', 'large', 'pan', 20, 1, 1, 'http://adminpizza.salwagarden.com/storage/uploads/files/pdyG59ZX6IC1KVchE6fA9VPYhHqqCi0rzyeEJqri.png', NULL, '2020-05-06 11:24:58', '2020-05-06 11:12:23', '2020-05-06 11:24:58'),
(63, 0, 'cfc2644e-0233-787b-6950-210321265ef0', 8, 'CLASSIC PEPPERONI', 'large', 'pan', 20, 1, 1, 'http://adminpizza.salwagarden.com/storage/uploads/files/pdyG59ZX6IC1KVchE6fA9VPYhHqqCi0rzyeEJqri.png', NULL, '2020-05-06 11:25:00', '2020-05-06 11:12:47', '2020-05-06 11:25:00'),
(64, 0, 'cfc2644e-0233-787b-6950-210321265ef0', 8, 'CLASSIC PEPPERONI', 'large', 'pan', 20, 1, 1, 'http://adminpizza.salwagarden.com/storage/uploads/files/pdyG59ZX6IC1KVchE6fA9VPYhHqqCi0rzyeEJqri.png', NULL, '2020-05-06 11:25:01', '2020-05-06 11:13:43', '2020-05-06 11:25:01'),
(65, 0, 'cfc2644e-0233-787b-6950-210321265ef0', 8, 'CLASSIC PEPPERONI', 'medium', 'pan', 15, 1, 1, 'http://adminpizza.salwagarden.com/storage/uploads/files/pdyG59ZX6IC1KVchE6fA9VPYhHqqCi0rzyeEJqri.png', NULL, '2020-05-06 11:25:02', '2020-05-06 11:14:11', '2020-05-06 11:25:02'),
(66, 0, 'cfc2644e-0233-787b-6950-210321265ef0', 8, 'CLASSIC PEPPERONI', 'small', 'pan', 10, 1, 1, 'http://adminpizza.salwagarden.com/storage/uploads/files/pdyG59ZX6IC1KVchE6fA9VPYhHqqCi0rzyeEJqri.png', NULL, '2020-05-06 11:25:03', '2020-05-06 11:14:30', '2020-05-06 11:25:03'),
(67, 0, 'cfc2644e-0233-787b-6950-210321265ef0', 8, 'CLASSIC PEPPERONI', 'small', 'pan', 11, 1, 1, 'http://adminpizza.salwagarden.com/storage/uploads/files/pdyG59ZX6IC1KVchE6fA9VPYhHqqCi0rzyeEJqri.png', 'Mashroom<br/>', '2020-05-06 11:25:04', '2020-05-06 11:14:34', '2020-05-06 11:25:04'),
(68, 0, 'cfc2644e-0233-787b-6950-210321265ef0', 8, 'CLASSIC PEPPERONI', 'large', 'pan', 20, 1, 1, 'http://adminpizza.salwagarden.com/storage/uploads/files/pdyG59ZX6IC1KVchE6fA9VPYhHqqCi0rzyeEJqri.png', NULL, '2020-05-06 11:25:06', '2020-05-06 11:23:27', '2020-05-06 11:25:06'),
(69, 0, 'cfc2644e-0233-787b-6950-210321265ef0', 8, 'CLASSIC PEPPERONI', 'small', 'pan', 10, 1, 1, 'http://adminpizza.salwagarden.com/storage/uploads/files/pdyG59ZX6IC1KVchE6fA9VPYhHqqCi0rzyeEJqri.png', NULL, NULL, '2020-05-06 11:25:16', '2020-05-06 11:25:16'),
(70, 0, '4d5e3100-ebde-caf4-cd68-355244289cc8', 8, 'CLASSIC PEPPERONI', 'large', 'pan', 20, 1, 1, 'http://adminpizza.salwagarden.com/storage/uploads/files/pdyG59ZX6IC1KVchE6fA9VPYhHqqCi0rzyeEJqri.png', NULL, NULL, '2020-05-06 12:10:59', '2020-05-06 12:10:59');

-- --------------------------------------------------------

--
-- Table structure for table `cart_items`
--

CREATE TABLE `cart_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cart_toppings`
--

CREATE TABLE `cart_toppings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `cart_id` bigint(20) UNSIGNED DEFAULT NULL,
  `topping_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `image` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `user_id`, `name`, `status`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 1, 'Chicken', 1, NULL, '2020-04-27 16:00:59', '2020-04-27 16:00:59'),
(2, 1, 'Beef', 1, NULL, '2020-04-27 16:01:04', '2020-04-27 16:01:04'),
(3, 1, 'Vegetable', 1, NULL, '2020-04-27 16:01:10', '2020-04-27 16:01:10');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `image_folder_id` bigint(20) UNSIGNED NOT NULL DEFAULT '1',
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `src` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `user_id`, `image_folder_id`, `name`, `src`, `type`, `status`, `created_at`, `updated_at`) VALUES
(5, 1, 3, 'Chicken_Supreme_Showcase.png', 'http://adminpizza.salwagarden.com/storage/uploads/files/2LsKgWZhuz8dhJ9uEq7UHvYnGwrGqmJ1aB0ehcH9.png', '', 1, '2020-05-06 09:08:41', '2020-05-06 09:08:41'),
(6, 1, 3, 'Tropical-Hawaiin_showcase.png', 'http://adminpizza.salwagarden.com/storage/uploads/files/LIRRqYt5vSbLj5yiukLNXGHgjlHEsCOLo8jkhuIS.png', '', 1, '2020-05-06 09:08:41', '2020-05-06 09:08:41'),
(7, 1, 3, 'Classic_Pepperoni_showcase.png', 'http://adminpizza.salwagarden.com/storage/uploads/files/pdyG59ZX6IC1KVchE6fA9VPYhHqqCi0rzyeEJqri.png', '', 1, '2020-05-06 09:08:41', '2020-05-06 09:08:41'),
(8, 1, 3, 'Hot_Stuff_Chicken_showcase.png', 'http://adminpizza.salwagarden.com/storage/uploads/files/pIn1gtopPWZj2EHdJufbKfVH8umAPJMXQwQpHHG8.png', '', 1, '2020-05-06 09:08:41', '2020-05-06 09:08:41'),
(9, 1, 3, 'spicychickenranch-1.png', 'http://adminpizza.salwagarden.com/storage/uploads/files/sfE8wBINoJScapRE7PXeUpcjClq3yCizQhNx995v.png', '', 1, '2020-05-06 09:08:41', '2020-05-06 09:08:41'),
(10, 1, 3, 'Margherita_showcase.png', 'http://adminpizza.salwagarden.com/storage/uploads/files/Uny5uWFluvkf9l39aezqJCdnABWbOncXH1k7NNCQ.png', '', 1, '2020-05-06 09:08:41', '2020-05-06 09:08:41'),
(11, 1, 3, 'Verry-Veggie_showcase.png', 'http://adminpizza.salwagarden.com/storage/uploads/files/vZXrQ2FUSyM0Ei2Sd2JAg6tTQEwXLeTW3GrqHapA.png', '', 1, '2020-05-06 09:08:41', '2020-05-06 09:08:41'),
(12, 1, 3, 'Hot_Stuff_Beef_showcase.png', 'http://adminpizza.salwagarden.com/storage/uploads/files/ouaVLo7UkD5RUGECbCZZFcPOTOHRRC5dKlDZ4c6m.png', '', 1, '2020-05-06 09:08:41', '2020-05-06 09:08:41'),
(13, 1, 3, 'Super_Supreme_showcase.png', 'http://adminpizza.salwagarden.com/storage/uploads/files/DGzwEYP8Qz8LnMEQ32xhQBeDsTkgd6f4FaLdcJop.png', '', 1, '2020-05-06 09:08:41', '2020-05-06 09:08:41'),
(14, 1, 3, 'redchichen.png', 'http://adminpizza.salwagarden.com/storage/uploads/files/Him67OblP6zndZpsMYuuLcFwSYCrTqf6YdiG7Fca.png', '', 1, '2020-05-06 09:08:41', '2020-05-06 09:08:41'),
(15, 1, 3, 'Mexican.png', 'http://adminpizza.salwagarden.com/storage/uploads/files/fRPD9qlGYGei6dBG61HJZSaVQMwV84NNj5xBl5Rh.png', '', 1, '2020-05-06 09:08:41', '2020-05-06 09:08:41'),
(27, 1, 4, 'Garlic_Regular.png', 'http://adminpizza.salwagarden.com/storage/uploads/files/cfbY4Yjr99GRJP1NZ2VwVCl3LCipDuo9qsEn1Jxx.png', '', 1, '2020-05-06 09:08:56', '2020-05-06 09:08:56'),
(28, 1, 4, 'Green_Chilies_Regular.png', 'http://adminpizza.salwagarden.com/storage/uploads/files/0QjKsN1rz4ZVJcqB5td1bdsXvCP9f7JDFVu8icou.png', '', 1, '2020-05-06 09:08:56', '2020-05-06 09:08:56'),
(29, 1, 4, 'Mushrooms_Regular.png', 'http://adminpizza.salwagarden.com/storage/uploads/files/dCtL4vv2VCu01hcbeMDLoYT7PfWyCQtD0WyqHaIY.png', '', 1, '2020-05-06 09:08:56', '2020-05-06 09:08:56'),
(30, 1, 4, 'Tomatoes_Regular.png', 'http://adminpizza.salwagarden.com/storage/uploads/files/Ii6sAr90r0LkZXXLI8rcEtovzAkU6IOFl2sTJYJJ.png', '', 1, '2020-05-06 09:08:56', '2020-05-06 09:08:56'),
(31, 1, 4, 'Green_Pepper_Strips_Regular.png', 'http://adminpizza.salwagarden.com/storage/uploads/files/CA8aPY0nLTtAdvtoJRxVYcAXV4L9sQgjgszJdump.png', '', 1, '2020-05-06 09:08:56', '2020-05-06 09:08:56'),
(32, 1, 4, 'Onions_Regular.png', 'http://adminpizza.salwagarden.com/storage/uploads/files/wc2oBpdVKVz5OkHLuPcspUeFdvmmc5Wb727wNtSz.png', '', 1, '2020-05-06 09:08:56', '2020-05-06 09:08:56'),
(33, 1, 4, 'Black_Olives_Regular.png', 'http://adminpizza.salwagarden.com/storage/uploads/files/m76uTu7LbXcpyO3Eyx7QDMlAYkvnp0i1irIusEa2.png', '', 1, '2020-05-06 09:08:56', '2020-05-06 09:08:56'),
(34, 1, 4, 'Pineapples_Regular.png', 'http://adminpizza.salwagarden.com/storage/uploads/files/u3FojtBTWOL2oH2c1iGOrMe21gC7CkS3y5JCuD5T.png', '', 1, '2020-05-06 09:08:56', '2020-05-06 09:08:56'),
(35, 1, 4, 'Pepperoni_Regular.png', 'http://adminpizza.salwagarden.com/storage/uploads/files/TZlQvG4el9rYsWZLQ1wiaIdXxEyz1uBm5jJ99xYr.png', '', 1, '2020-05-06 09:08:56', '2020-05-06 09:08:56'),
(76, 1, 1, 'Crust_Pan.png', 'http://adminpizza.salwagarden.com/storage/uploads/files/RaBoBYhTee710i7PPlYp42Y3Rv0KrWqnolPZzVx0.png', '', 1, '2020-05-06 09:13:00', '2020-05-06 09:13:00');

-- --------------------------------------------------------

--
-- Table structure for table `image_folders`
--

CREATE TABLE `image_folders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `parent_id` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `status` int(11) NOT NULL DEFAULT '1',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `image_folders`
--

INSERT INTO `image_folders` (`id`, `user_id`, `parent_id`, `name`, `description`, `status`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'Root', '', 1, NULL, NULL, NULL),
(2, 1, 1, 'zubaer haque', 'asd', 1, '2020-05-06 08:55:56', '2020-04-26 20:34:44', '2020-05-06 08:55:56'),
(3, 1, 1, 'Pizza', NULL, 1, NULL, '2020-05-06 09:03:14', '2020-05-06 09:03:14'),
(4, 1, 1, 'Toppings', NULL, 1, NULL, '2020-05-06 09:03:25', '2020-05-06 09:03:25');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(4, '2014_10_12_000000_create_users_table', 1),
(5, '2014_10_12_100000_create_password_resets_table', 1),
(6, '2019_08_19_000000_create_failed_jobs_table', 1),
(7, '2020_04_25_175535_create_pizzas_table', 2),
(8, '2020_04_25_175629_create_toppings_table', 2),
(9, '2020_04_25_175731_create_categories_table', 2),
(11, '2020_04_25_180047_create_orders_table', 2),
(12, '2020_04_25_180052_create_order_items_table', 2),
(13, '2020_04_26_205300_create_cart_items_table', 2),
(14, '2020_04_26_210604_create_cart_toppings_table', 2),
(15, '2020_04_26_210902_create_order_toppings_table', 2),
(16, '2020_04_26_223857_create_pizza_toppings_table', 2),
(17, '2020_04_26_232518_create_images_table', 2),
(18, '2020_04_26_232533_create_image_folders_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `guest_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `total_price` int(11) NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `note` text COLLATE utf8mb4_unicode_ci,
  `lat` double DEFAULT NULL,
  `lon` double DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `guest_id`, `total_price`, `type`, `name`, `number`, `address`, `note`, `lat`, `lon`, `status`, `deleted_at`, `created_at`, `updated_at`) VALUES
(2, 0, 'cfc2644e-0233-787b-6950-210321265ef0', 116, 'Online Order', 'zubaer haque', '70987735', 'Al Umma Street, Al Sadd, House #60, Roof Floor, Select County, Doha, USA', NULL, 0, 0, 1, NULL, '2020-05-04 16:36:43', '2020-05-04 16:36:43'),
(3, 0, 'cfc2644e-0233-787b-6950-210321265ef0', 88, 'Online Order', 'zubaer haque', '01722876856', '15 sebok, Mirabazaar, Sylhet, Sylhet, USA', 'ZX', 0, 0, 1, NULL, '2020-05-04 20:13:01', '2020-05-04 20:13:01'),
(4, 0, 'cfc2644e-0233-787b-6950-210321265ef0', 88, 'Online Order', 'zubaer haque', '01722876856', '15 sebok, Mirabazaar, Sylhet, Sylhet, USA', NULL, 0, 0, 2, NULL, '2020-05-05 10:40:47', '2020-05-06 08:39:32'),
(5, 0, 'cfc2644e-0233-787b-6950-210321265ef0', 63, 'Online Order', 'zubaer haque', '01722876856', '15 sebok, Mirabazaar, Sylhet, Sylhet, USA', NULL, 0, 0, 1, NULL, '2020-05-06 08:51:56', '2020-05-06 08:51:56');

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` bigint(20) UNSIGNED DEFAULT NULL,
  `pizza_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `size` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `note` text COLLATE utf8mb4_unicode_ci,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`id`, `order_id`, `pizza_id`, `name`, `size`, `type`, `price`, `quantity`, `note`, `deleted_at`, `created_at`, `updated_at`) VALUES
(2, 2, 3, 'asd', 'large', 'pan', 12, NULL, NULL, NULL, '2020-05-04 16:36:43', '2020-05-04 16:36:43'),
(3, 2, 3, 'asd', 'small', 'pan', 34, NULL, NULL, NULL, '2020-05-04 16:36:43', '2020-05-04 16:36:43'),
(4, 3, 3, 'asd', 'large', 'pan', 12, NULL, NULL, NULL, '2020-05-04 20:13:01', '2020-05-04 20:13:01'),
(5, 3, 3, 'asd', 'large', 'pan', 12, NULL, NULL, NULL, '2020-05-04 20:13:01', '2020-05-04 20:13:01'),
(6, 3, 4, 'Mexican Chicken', 'large', 'pan', 20, NULL, NULL, NULL, '2020-05-04 20:13:01', '2020-05-04 20:13:01'),
(7, 3, 4, 'Mexican Chicken', 'large', 'pan', 20, NULL, NULL, NULL, '2020-05-04 20:13:01', '2020-05-04 20:13:01'),
(8, 4, 3, 'asd', 'large', 'pan', 12, NULL, NULL, NULL, '2020-05-05 10:40:47', '2020-05-05 10:40:47'),
(9, 4, 3, 'asd', 'large', 'pan', 12, NULL, NULL, NULL, '2020-05-05 10:40:47', '2020-05-05 10:40:47'),
(10, 4, 4, 'Mexican Chicken', 'large', 'pan', 20, NULL, NULL, NULL, '2020-05-05 10:40:47', '2020-05-05 10:40:47'),
(11, 4, 4, 'Mexican Chicken', 'large', 'pan', 20, NULL, NULL, NULL, '2020-05-05 10:40:47', '2020-05-05 10:40:47'),
(12, 5, 4, 'Mexican Chicken', 'large', 'pan', 21, 1, 'Mashroom<br/>', NULL, '2020-05-06 08:51:56', '2020-05-06 08:51:56'),
(13, 5, 4, 'Mexican Chicken', 'large', 'pan', 21, 2, 'Mashroom<br/>', NULL, '2020-05-06 08:51:56', '2020-05-06 08:51:56');

-- --------------------------------------------------------

--
-- Table structure for table `order_toppings`
--

CREATE TABLE `order_toppings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_item_id` bigint(20) UNSIGNED DEFAULT NULL,
  `topping_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `image` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pizzas`
--

CREATE TABLE `pizzas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `base_image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `large` int(11) NOT NULL,
  `medium` int(11) NOT NULL,
  `small` int(11) NOT NULL,
  `pan` int(11) DEFAULT NULL,
  `thin` int(11) NOT NULL,
  `cheesy` int(11) NOT NULL,
  `sfo` int(11) DEFAULT NULL,
  `size` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'large',
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pan',
  `status` int(11) NOT NULL DEFAULT '1',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pizzas`
--

INSERT INTO `pizzas` (`id`, `user_id`, `category_id`, `name`, `description`, `image`, `base_image`, `large`, `medium`, `small`, `pan`, `thin`, `cheesy`, `sfo`, `size`, `type`, `status`, `deleted_at`, `created_at`, `updated_at`) VALUES
(3, 1, 2, 'RED PEPPER CHICKEN', '• Extreme Sauce • Mozzarella Cheese • Fiery Chicken Strips • Red Bell Pepper • Slice onion • Chopped Jalapeno • Sweet Chili Sprinkle (Garnish) • Chopped Parsley (Garnish)', 'http://adminpizza.salwagarden.com/storage/uploads/files/Him67OblP6zndZpsMYuuLcFwSYCrTqf6YdiG7Fca.png', 'http://adminpizza.salwagarden.com/storage/uploads/files/RaBoBYhTee710i7PPlYp42Y3Rv0KrWqnolPZzVx0.png', 24, 16, 12, 0, 2, 3, 1, 'large', 'pan', 1, NULL, '2020-04-27 16:12:14', '2020-05-06 10:02:11'),
(4, 1, 1, 'Mexican Chicken', '• Requito Sauce • Mozzarella Cheese • Grilled Chicken Toppings • Sweet Corn Kernels • Chopped Jalapeno • Diced Tomato • Jalapeno Cheese Sauce • Sour Cream Sauce (Cross Hatch Drizzle) - Garnish', 'http://adminpizza.salwagarden.com/storage/uploads/files/fRPD9qlGYGei6dBG61HJZSaVQMwV84NNj5xBl5Rh.png', 'http://adminpizza.salwagarden.com/storage/uploads/files/RaBoBYhTee710i7PPlYp42Y3Rv0KrWqnolPZzVx0.png', 20, 15, 12, 0, 2, 5, 0, 'large', 'pan', 1, NULL, '2020-05-01 08:50:49', '2020-05-06 10:02:29'),
(6, 1, 1, 'SPICY CHICKEN RANCH', 'Chicken, tomatoes, mushrooms and jalapeño peppers with peri-peri sauce.', 'http://adminpizza.salwagarden.com/storage/uploads/files/sfE8wBINoJScapRE7PXeUpcjClq3yCizQhNx995v.png', 'http://adminpizza.salwagarden.com/storage/uploads/files/RaBoBYhTee710i7PPlYp42Y3Rv0KrWqnolPZzVx0.png', 22, 18, 12, 0, 2, 3, 0, 'large', 'pan', 1, NULL, '2020-05-06 09:57:40', '2020-05-06 10:02:42'),
(7, 1, 1, 'CHICKEN SUPREME', 'Our famous combination of beef pepperoni, juicy beef, mushrooms, green peppers, onions, black olives and melting mozzarella cheese.', 'http://adminpizza.salwagarden.com/storage/uploads/files/2LsKgWZhuz8dhJ9uEq7UHvYnGwrGqmJ1aB0ehcH9.png', 'http://adminpizza.salwagarden.com/storage/uploads/files/RaBoBYhTee710i7PPlYp42Y3Rv0KrWqnolPZzVx0.png', 20, 15, 10, 0, 2, 5, 1, 'large', 'pan', 1, NULL, '2020-05-06 10:03:34', '2020-05-06 10:03:34'),
(8, 1, 3, 'CLASSIC PEPPERONI', 'One of our all-time specialties. A meaty feast of double pepperoni, mozzarella cheese and tomato sauce.', 'http://adminpizza.salwagarden.com/storage/uploads/files/pdyG59ZX6IC1KVchE6fA9VPYhHqqCi0rzyeEJqri.png', 'http://adminpizza.salwagarden.com/storage/uploads/files/RaBoBYhTee710i7PPlYp42Y3Rv0KrWqnolPZzVx0.png', 20, 15, 10, 0, 2, 5, 1, 'large', 'pan', 1, NULL, '2020-05-06 10:10:14', '2020-05-06 10:10:14'),
(9, 1, 3, 'MARGHERITA', 'Go back to where it all began with the classic cheese and tomato base, topped with basil leaves.', 'http://adminpizza.salwagarden.com/storage/uploads/files/Uny5uWFluvkf9l39aezqJCdnABWbOncXH1k7NNCQ.png', 'http://adminpizza.salwagarden.com/storage/uploads/files/RaBoBYhTee710i7PPlYp42Y3Rv0KrWqnolPZzVx0.png', 20, 15, 10, 0, 2, 5, 1, 'large', 'pan', 1, NULL, '2020-05-06 10:11:00', '2020-05-06 10:11:00'),
(10, 1, 3, 'VERY VEGGIE', 'Mushrooms, green peppers, fresh tomatoes, onions and black olives loaded on a tomato base and topped with melting mozzarella cheese.', 'http://adminpizza.salwagarden.com/storage/uploads/files/vZXrQ2FUSyM0Ei2Sd2JAg6tTQEwXLeTW3GrqHapA.png', 'http://adminpizza.salwagarden.com/storage/uploads/files/RaBoBYhTee710i7PPlYp42Y3Rv0KrWqnolPZzVx0.png', 20, 15, 10, 0, 2, 5, 1, 'large', 'pan', 1, NULL, '2020-05-06 10:11:58', '2020-05-06 10:11:58'),
(11, 1, 1, 'GRILLED CHEEKY CHICKEN', 'Dig in to our succulent pieces of grilled chicken, green peppers, onions and fresh tomatoes.', 'http://adminpizza.salwagarden.com/storage/uploads/files/DGzwEYP8Qz8LnMEQ32xhQBeDsTkgd6f4FaLdcJop.png', 'http://adminpizza.salwagarden.com/storage/uploads/files/RaBoBYhTee710i7PPlYp42Y3Rv0KrWqnolPZzVx0.png', 20, 15, 10, 0, 2, 5, 1, 'large', 'pan', 1, NULL, '2020-05-06 10:12:39', '2020-05-06 10:12:39'),
(12, 1, 2, 'HOT STUFF BEEF', 'Turn up the heat with juicy beef, sliced onions, tomatoes and spicy green chilies.', 'http://adminpizza.salwagarden.com/storage/uploads/files/ouaVLo7UkD5RUGECbCZZFcPOTOHRRC5dKlDZ4c6m.png', 'http://adminpizza.salwagarden.com/storage/uploads/files/RaBoBYhTee710i7PPlYp42Y3Rv0KrWqnolPZzVx0.png', 24, 18, 12, 0, 2, 5, 1, 'large', 'pan', 1, NULL, '2020-05-06 10:13:26', '2020-05-06 10:13:26');

-- --------------------------------------------------------

--
-- Table structure for table `pizza_toppings`
--

CREATE TABLE `pizza_toppings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `pizza_id` bigint(20) UNSIGNED DEFAULT NULL,
  `topping_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pizza_toppings`
--

INSERT INTO `pizza_toppings` (`id`, `pizza_id`, `topping_id`, `created_at`, `updated_at`) VALUES
(6, 3, 1, '2020-05-06 10:02:11', '2020-05-06 10:02:11'),
(7, 3, 3, '2020-05-06 10:02:11', '2020-05-06 10:02:11'),
(8, 3, 7, '2020-05-06 10:02:11', '2020-05-06 10:02:11'),
(9, 4, 2, '2020-05-06 10:02:29', '2020-05-06 10:02:29'),
(10, 4, 7, '2020-05-06 10:02:29', '2020-05-06 10:02:29'),
(11, 4, 8, '2020-05-06 10:02:29', '2020-05-06 10:02:29'),
(12, 4, 4, '2020-05-06 10:02:29', '2020-05-06 10:02:29'),
(13, 6, 3, '2020-05-06 10:02:42', '2020-05-06 10:02:42'),
(14, 6, 5, '2020-05-06 10:02:42', '2020-05-06 10:02:42'),
(15, 6, 7, '2020-05-06 10:02:42', '2020-05-06 10:02:42'),
(16, 7, 4, '2020-05-06 10:03:34', '2020-05-06 10:03:34'),
(17, 7, 5, '2020-05-06 10:03:34', '2020-05-06 10:03:34'),
(18, 7, 7, '2020-05-06 10:03:34', '2020-05-06 10:03:34'),
(19, 8, 9, '2020-05-06 10:10:14', '2020-05-06 10:10:14'),
(20, 8, 4, '2020-05-06 10:10:14', '2020-05-06 10:10:14'),
(21, 9, 4, '2020-05-06 10:11:00', '2020-05-06 10:11:00'),
(22, 10, 1, '2020-05-06 10:11:58', '2020-05-06 10:11:58'),
(23, 10, 4, '2020-05-06 10:11:58', '2020-05-06 10:11:58'),
(24, 10, 2, '2020-05-06 10:11:58', '2020-05-06 10:11:58'),
(25, 10, 3, '2020-05-06 10:11:58', '2020-05-06 10:11:58'),
(26, 10, 5, '2020-05-06 10:11:58', '2020-05-06 10:11:58'),
(27, 10, 7, '2020-05-06 10:11:58', '2020-05-06 10:11:58'),
(28, 11, 5, '2020-05-06 10:12:39', '2020-05-06 10:12:39'),
(29, 11, 7, '2020-05-06 10:12:39', '2020-05-06 10:12:39'),
(30, 11, 9, '2020-05-06 10:12:39', '2020-05-06 10:12:39'),
(31, 12, 6, '2020-05-06 10:13:26', '2020-05-06 10:13:26'),
(32, 12, 7, '2020-05-06 10:13:26', '2020-05-06 10:13:26'),
(33, 12, 1, '2020-05-06 10:13:26', '2020-05-06 10:13:26');

-- --------------------------------------------------------

--
-- Table structure for table `toppings`
--

CREATE TABLE `toppings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `toppings`
--

INSERT INTO `toppings` (`id`, `user_id`, `name`, `image`, `price`, `status`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 1, 'Mashroom', 'http://adminpizza.salwagarden.com/storage/uploads/files/dCtL4vv2VCu01hcbeMDLoYT7PfWyCQtD0WyqHaIY.png', '1', 1, NULL, '2020-04-27 16:03:19', '2020-05-06 10:09:00'),
(2, 1, 'Garlic', 'http://adminpizza.salwagarden.com/storage/uploads/files/cfbY4Yjr99GRJP1NZ2VwVCl3LCipDuo9qsEn1Jxx.png', '2', 1, NULL, '2020-05-06 10:00:05', '2020-05-06 10:00:05'),
(3, 1, 'Green Chilly', 'http://adminpizza.salwagarden.com/storage/uploads/files/0QjKsN1rz4ZVJcqB5td1bdsXvCP9f7JDFVu8icou.png', '1', 1, NULL, '2020-05-06 10:00:29', '2020-05-06 10:00:29'),
(4, 1, 'Tomato', 'http://adminpizza.salwagarden.com/storage/uploads/files/Ii6sAr90r0LkZXXLI8rcEtovzAkU6IOFl2sTJYJJ.png', '1', 1, NULL, '2020-05-06 10:00:48', '2020-05-06 10:00:48'),
(5, 1, 'Green Pepper', 'http://adminpizza.salwagarden.com/storage/uploads/files/CA8aPY0nLTtAdvtoJRxVYcAXV4L9sQgjgszJdump.png', '1', 1, NULL, '2020-05-06 10:01:08', '2020-05-06 10:01:08'),
(6, 1, 'Onion', 'http://adminpizza.salwagarden.com/storage/uploads/files/wc2oBpdVKVz5OkHLuPcspUeFdvmmc5Wb727wNtSz.png', '0', 1, NULL, '2020-05-06 10:01:21', '2020-05-06 10:01:21'),
(7, 1, 'Black Olive', 'http://adminpizza.salwagarden.com/storage/uploads/files/m76uTu7LbXcpyO3Eyx7QDMlAYkvnp0i1irIusEa2.png', '2', 1, NULL, '2020-05-06 10:01:33', '2020-05-06 10:01:33'),
(8, 1, 'Pineapple', 'http://adminpizza.salwagarden.com/storage/uploads/files/u3FojtBTWOL2oH2c1iGOrMe21gC7CkS3y5JCuD5T.png', '2', 1, NULL, '2020-05-06 10:01:45', '2020-05-06 10:01:45'),
(9, 1, 'Pepperoni', 'http://adminpizza.salwagarden.com/storage/uploads/files/TZlQvG4el9rYsWZLQ1wiaIdXxEyz1uBm5jJ99xYr.png', '2', 1, NULL, '2020-05-06 10:05:55', '2020-05-06 10:05:55');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` int(11) NOT NULL DEFAULT '4',
  `status` int(11) NOT NULL DEFAULT '1',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `mobile`, `address`, `email_verified_at`, `password`, `type`, `status`, `deleted_at`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'zubaer haque', 'zubaer.haque@gmail.com', NULL, NULL, NULL, '$2y$10$SdOnIZXKkMA0tgKwk6JYMemwD9bmdVz5K4aT8F6zn9x73OTwzs2x.', 1, 1, NULL, NULL, '2020-04-25 11:23:06', '2020-04-25 11:23:06'),
(2, 'Edgardo Runte', 'trey01@example.net', NULL, NULL, '2020-04-26 20:34:22', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 4, 1, NULL, 'oXNEoE3okV', '2020-04-26 20:34:22', '2020-04-26 20:34:22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cart_items`
--
ALTER TABLE `cart_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cart_toppings`
--
ALTER TABLE `cart_toppings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cart_toppings_cart_id_foreign` (`cart_id`),
  ADD KEY `cart_toppings_topping_id_foreign` (`topping_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `image_folders`
--
ALTER TABLE `image_folders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `image_folders_user_id_foreign` (`user_id`),
  ADD KEY `image_folders_parent_id_foreign` (`parent_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_items_order_id_foreign` (`order_id`),
  ADD KEY `order_items_pizza_id_foreign` (`pizza_id`);

--
-- Indexes for table `order_toppings`
--
ALTER TABLE `order_toppings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_toppings_order_item_id_foreign` (`order_item_id`),
  ADD KEY `order_toppings_topping_id_foreign` (`topping_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `pizzas`
--
ALTER TABLE `pizzas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pizza_toppings`
--
ALTER TABLE `pizza_toppings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pizza_toppings_topping_id_foreign` (`topping_id`),
  ADD KEY `pizza_toppings_pizza_id_foreign` (`pizza_id`);

--
-- Indexes for table `toppings`
--
ALTER TABLE `toppings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT for table `cart_items`
--
ALTER TABLE `cart_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cart_toppings`
--
ALTER TABLE `cart_toppings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- AUTO_INCREMENT for table `image_folders`
--
ALTER TABLE `image_folders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `order_toppings`
--
ALTER TABLE `order_toppings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pizzas`
--
ALTER TABLE `pizzas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `pizza_toppings`
--
ALTER TABLE `pizza_toppings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `toppings`
--
ALTER TABLE `toppings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart_toppings`
--
ALTER TABLE `cart_toppings`
  ADD CONSTRAINT `cart_toppings_cart_id_foreign` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `cart_toppings_topping_id_foreign` FOREIGN KEY (`topping_id`) REFERENCES `toppings` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `image_folders`
--
ALTER TABLE `image_folders`
  ADD CONSTRAINT `image_folders_parent_id_foreign` FOREIGN KEY (`parent_id`) REFERENCES `image_folders` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `image_folders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `order_items_pizza_id_foreign` FOREIGN KEY (`pizza_id`) REFERENCES `pizzas` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `order_toppings`
--
ALTER TABLE `order_toppings`
  ADD CONSTRAINT `order_toppings_order_item_id_foreign` FOREIGN KEY (`order_item_id`) REFERENCES `order_items` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `order_toppings_topping_id_foreign` FOREIGN KEY (`topping_id`) REFERENCES `toppings` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `pizza_toppings`
--
ALTER TABLE `pizza_toppings`
  ADD CONSTRAINT `pizza_toppings_pizza_id_foreign` FOREIGN KEY (`pizza_id`) REFERENCES `pizzas` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `pizza_toppings_topping_id_foreign` FOREIGN KEY (`topping_id`) REFERENCES `toppings` (`id`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
