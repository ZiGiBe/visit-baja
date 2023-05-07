-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 07, 2023 at 08:02 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `visitbaja`
--
CREATE DATABASE IF NOT EXISTS `visitbaja` DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci;
USE `visitbaja`;

-- --------------------------------------------------------

--
-- Table structure for table `programs`
--

CREATE TABLE `programs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `start` datetime DEFAULT NULL,
  `end` datetime DEFAULT NULL,
  `desc` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `href` varchar(255) DEFAULT NULL,
  `isRestaurant` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Table structure for table `servicesgalleries`
--

CREATE TABLE `servicesgalleries` (
  `id` int(11) NOT NULL,
  `image` text DEFAULT NULL,
  `preview` tinyint(1) DEFAULT 0,
  `itemID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sights`
--

CREATE TABLE `sights` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `shortdesc` text NOT NULL,
  `fulldesc` text NOT NULL,
  `href` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- Dumping data for table `sights`
--

INSERT INTO `sights` (`id`, `name`, `shortdesc`, `fulldesc`, `href`, `createdAt`, `updatedAt`) VALUES
(1, 'asdfasdf', 'asdfasdfas', 'asdfasdf', 'asdlfkjasdéfl', '2023-05-07 19:09:25', '2023-05-07 19:09:25');

-- --------------------------------------------------------

--
-- Table structure for table `sightsgalleries`
--

CREATE TABLE `sightsgalleries` (
  `id` int(11) NOT NULL,
  `image` text DEFAULT NULL,
  `preview` tinyint(1) DEFAULT 0,
  `itemID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `programs`
--
ALTER TABLE `programs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `servicesgalleries`
--
ALTER TABLE `servicesgalleries`
  ADD PRIMARY KEY (`id`),
  ADD KEY `itemID` (`itemID`);

--
-- Indexes for table `sights`
--
ALTER TABLE `sights`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sightsgalleries`
--
ALTER TABLE `sightsgalleries`
  ADD PRIMARY KEY (`id`),
  ADD KEY `itemID` (`itemID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `programs`
--
ALTER TABLE `programs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `servicesgalleries`
--
ALTER TABLE `servicesgalleries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sights`
--
ALTER TABLE `sights`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sightsgalleries`
--
ALTER TABLE `sightsgalleries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `servicesgalleries`
--
ALTER TABLE `servicesgalleries`
  ADD CONSTRAINT `servicesgalleries_ibfk_1` FOREIGN KEY (`itemID`) REFERENCES `services` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `sightsgalleries`
--
ALTER TABLE `sightsgalleries`
  ADD CONSTRAINT `sightsgalleries_ibfk_1` FOREIGN KEY (`itemID`) REFERENCES `sights` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
