-- MySQL dump 10.13  Distrib 5.7.22, for Linux (x86_64)
--
-- Host: localhost    Database: bender_bot
-- ------------------------------------------------------
-- Server version	5.7.22-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Phases`
--

DROP TABLE IF EXISTS `Phases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Phases` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phase` varchar(255) DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `rating` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Phases`
--

LOCK TABLES `Phases` WRITE;
/*!40000 ALTER TABLE `Phases` DISABLE KEYS */;
INSERT INTO `Phases` VALUES (1,'Я построю свой лунный модуль, с блэкджеком и шлюхами! И вообще, к черту лунный модуль и блэкджек! Ай, к чёрту всё!',0,0),(2,'Как и многие жизненные проблемы, эту можно решить сгибанием.',0,0),(3,'Укуси мой блестящий металлический зад',0,0),(4,'Вы все думаете, что роботы были созданы людьми, чтобы сделать их жизнь проще? Я ни разу не сделал ничью жизнь проще и вы это знаете!',0,0),(5,'Святая дань моим предкам, которая впоследствии, приняла форму пьянки',0,0),(6,'Я люблю вас, мешки с мясом!',0,0),(7,'Дорогая, хочешь убить всех людей?',0,0),(8,'Я Бендер. Пожалуйста, дайте мне прут',0,0),(9,'Кто вы такие и почему это должно меня волновать?!',0,0),(10,'Пиво рулит, не ты!',0,0),(11,'Я не жадный, я могу сдать кровь! Чью-нибудь!',0,0),(12,'Я на 40% титановый',0,0),(13,'Слава роботам! Убить всех человеков!',0,0),(14,'Все, я богат! Пока, неудачники! Я вас всегда ненавидел!',0,0),(15,'Да! Я богат! Правда ты тоже, но это почему то не радует.',0,0),(16,'А ну, конечно, если все вокруг сгибается, то виноват робот, созданный для сгибания!',0,0),(17,'Если бы я верил, что после смерти меня ждет другая жизнь, я бы убил себя прямо сейчас.',0,0),(18,'Качание, это всего лишь примитивная разновидность сгибания!',0,0),(19,'Я спас черепаху. А что сделали вы?',0,0),(20,'Асталависта, мешок с костями!',0,0),(21,'Я умираю. Мне нужно искусственное дыхание рот в зад!',0,0),(22,'Я хочу жить! Я ещё много чего не украл!',0,0),(23,'Я не так знаменит, чтобы давить людей безнаказанно.',0,0),(24,'Хочешь я немного поглумлюсь над трупом?',0,0),(25,'Не забывайте про правила хорошего тона. Вилки в левый карман, ложки — в правый!',0,0),(26,'Давайте смотреть реально. Комедия — мёртвый жанр, а трагедия — это смешно!',0,0),(27,'Позеры! Я ненавидел Зойдберга еще до того, как это стало модным.',0,0),(28,'Спаси моих друзей… и Зойдберга!',0,0),(29,'Смотреть порно и зарабатывать?! Что-то мне не верится.',0,0),(30,'Не вините себя, просто бейте себя ржавыми цепями по лицу.',0,0),(31,'«Шантаж» звучит как-то вульгарно, мне больше нравится «вымогательство»',0,0),(32,'Не бейте меня!.. я предам кого угодно!',0,0),(33,'Знаешь, что меня подбадривает? Издевательство над чужими неудачами.',0,0),(34,'Все придурки! Ты. Я. Вот придурок. Это моя философия.',0,0),(35,'Эй, я же не говорю тебе, как говорить мне, что делать, так что не говори мне, как делать то, что ты говоришь мне сделать!',0,0),(36,'Вы можете сказать, что я болтаю ерунду. Зато какую!',0,0),(37,'Он съел пищу, которую я приготовил, и по случайному совпадению его желудок разорвало…',0,0),(38,'Тело нужно шлюхам и толстякам! А мне нужна пачка денег и голова, чтобы их держать!',0,0),(39,'Мне так стыдно !!! я хочу что бы все умерли !',0,0);
/*!40000 ALTER TABLE `Phases` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20180711105300-create-user.js'),('20180711105748-create-phases.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'John','Hancock','2018-07-11 10:44:26','2018-07-11 10:44:26');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-07-13 16:14:22
