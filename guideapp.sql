-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-04-2019 a las 12:55:57
-- Versión del servidor: 5.6.11
-- Versión de PHP: 5.5.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `guideapp`
--
CREATE DATABASE IF NOT EXISTS `guideapp` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `guideapp`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro`
--

CREATE TABLE IF NOT EXISTS `registro` (
  `id` int(45) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `apellido` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `correo` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `colegio` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `grado` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `ciudad` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `cintereses` int(11) NOT NULL,
  `hintereses` int(11) NOT NULL,
  `aintereses` int(11) NOT NULL,
  `sintereses` int(11) NOT NULL,
  `iintereses` int(11) NOT NULL,
  `dintereses` int(11) NOT NULL,
  `eintereses` int(11) NOT NULL,
  `captitudes` int(11) NOT NULL,
  `haptitudes` int(11) NOT NULL,
  `aaptitudes` int(11) NOT NULL,
  `saptitudes` int(11) NOT NULL,
  `iaptitudes` int(11) NOT NULL,
  `daptitudes` int(11) NOT NULL,
  `eaptitudes` int(11) NOT NULL,
  `intereses` varchar(300) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `aptitudes` varchar(300) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=543 ;

--
-- Volcado de datos para la tabla `registro`
--

INSERT INTO `registro` (`id`, `nombre`, `apellido`, `correo`, `colegio`, `grado`, `ciudad`, `cintereses`, `hintereses`, `aintereses`, `sintereses`, `iintereses`, `dintereses`, `eintereses`, `captitudes`, `haptitudes`, `aaptitudes`, `saptitudes`, `iaptitudes`, `daptitudes`, `eaptitudes`, `intereses`, `aptitudes`) VALUES
(420, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11-3', 'cartago', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(421, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11-3', 'cartago', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(424, 'sebastian', 'restrepo', 'hola@gmail', 'gabo', '11-3', 'medellin', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'ciencias exactas y agrarias', 'Administrativas y contables'),
(425, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11-3', 'cartago', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Humanisticas y Sociales', 'Humanisticas y Sociales'),
(448, 'aisha', 'soto', 'ansoto@iegabo.edu.co', 'gabo', '11-4', 'cartago', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Humanisticas y Sociales', 'Ciencias de la salud'),
(449, 'mariana', 'cardona', 'marianacardonaespinosa@gmail.com', 'la presentacion', '11', 'cartago', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Humanisticas y Sociales', 'Ciencias de la salud'),
(450, 'ISABELLA', 'HERRERA', 'ISAH1304@GMAIL.COM', 'gabo', '9', 'cartago', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'ciencias exactas y agrarias', 'Humanisticas y Sociales'),
(451, 'robinson andres', 'vargas vasquez', 'rvrobinsonandres64@gmail.com', 'alfonso lopez pumarejo', '10', 'cartago', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Ciencias de la salud', 'Administrativas y contables'),
(452, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11-3', 'medellin', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Humanisticas y Sociales', 'Humanisticas y Sociales'),
(453, 'melanie', 'bermudez velez', 'bermudezvelezmelanie@gmail.com', 'gabo', '10', 'cartago', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Ciencias de la salud', 'artisticas'),
(454, 'melanie', 'bermudez velez', 'bermudezvelezmelanie@gmail.com', 'gabo', '10', 'cartago', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Humanisticas y Sociales', 'Humanisticas y Sociales'),
(455, 'david', 'sanchez vasquez', 'davidelcra18-@hotmail.com', 'san pedro claver', '8', 'cartago', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Humanisticas y Sociales', 'ingenierias y computacion'),
(456, 'cesar', 'gomez', 'gomezcesar994@gmail.com', 'gabo', '11-4', 'cartago', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'ingenierias y computacion', 'Humanisticas y Sociales'),
(457, 'cesar', 'gomez', 'gomezcesar994@gmail.com', 'gabo', '11-4', 'cartago', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'ingenierias y computacion', 'Humanisticas y Sociales'),
(458, 'cesar', 'gomez', 'gomezcesar994@gmail.com', 'gabo', '11-4', 'cartago', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'ingenierias y computacion', 'Humanisticas y Sociales'),
(459, 'jgj', 'nhkh', 'hjh@hotmail.com', 'gabo', '11', 'cartago', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Humanisticas y Sociales', 'Humanisticas y Sociales'),
(460, 'luz angelica', 'sanchez ballesteros', 'anyelica1101@hotmail.com', 'carlos castro saavedra', '11', 'pereira', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Humanisticas y Sociales', 'Humanisticas y Sociales'),
(481, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago', 3, 2, 3, 3, 1, 3, 2, 2, 1, 1, 2, 0, 0, 1, 'Administrativas y contables', 'Administrativas y contables'),
(482, 'gloria', 'moreno', 'gloria@gloria', 'maria', '22', 'cartago', 3, 2, 4, 3, 3, 4, 2, 2, 1, 1, 2, 2, 2, 1, 'artisticas', 'Administrativas y contables'),
(483, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(484, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(485, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(486, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(487, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(488, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(489, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(490, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(491, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(492, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(493, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(494, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(495, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(496, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(497, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(498, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(499, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(500, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(501, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(502, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(503, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(504, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(505, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(506, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(507, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(508, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(509, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(510, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(511, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(512, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(513, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(514, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(515, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(516, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(517, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(518, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(519, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(520, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(521, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(522, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(523, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(524, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(525, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(526, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(527, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(528, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(529, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(530, '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(531, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago', 2, 2, 1, 2, 0, 2, 2, 0, 1, 0, 1, 0, 0, 0, 'Administrativas y contables', 'Humanisticas y Sociales'),
(532, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago', 2, 2, 1, 2, 0, 2, 2, 0, 1, 0, 1, 0, 0, 0, 'Administrativas y contables', 'Humanisticas y Sociales'),
(533, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago', 2, 2, 1, 2, 0, 2, 2, 0, 1, 0, 1, 0, 0, 0, 'Administrativas y contables', 'Humanisticas y Sociales'),
(534, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago', 2, 2, 1, 2, 0, 2, 2, 0, 1, 0, 1, 0, 0, 0, 'Administrativas y contables', 'Humanisticas y Sociales'),
(535, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago', 2, 2, 1, 2, 0, 2, 2, 0, 1, 0, 1, 0, 0, 0, 'Administrativas y contables', 'Humanisticas y Sociales'),
(536, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago', 2, 2, 1, 2, 0, 2, 2, 0, 1, 0, 1, 0, 0, 0, 'Administrativas y contables', 'Humanisticas y Sociales'),
(537, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago', 2, 2, 1, 2, 0, 2, 2, 0, 1, 0, 1, 0, 0, 0, 'Administrativas y contables', 'Humanisticas y Sociales'),
(538, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago', 2, 2, 1, 2, 0, 2, 2, 0, 1, 0, 1, 0, 0, 0, 'Administrativas y contables', 'Humanisticas y Sociales'),
(539, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago', 2, 2, 1, 2, 0, 2, 2, 0, 1, 0, 1, 0, 0, 0, 'Administrativas y contables', 'Humanisticas y Sociales'),
(540, 'sebastian', 'restrepo', 'sebasrestrepom@gmail.com', 'gabo', '11-3', 'cartago', 10, 10, 10, 10, 9, 10, 10, 4, 4, 4, 4, 5, 4, 4, 'Administrativas y contables', 'ingenierias y computacion'),
(541, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '10', 'cartago', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Administrativas y contables', 'Administrativas y contables'),
(542, 'sebastian', 'restrepo', 'sebasrestrepom@gmail.com', 'gabo', '11-3', 'cartago', 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 'Administrativas y contables', 'defensa y seguridad');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `correo` varchar(200) NOT NULL,
  `colegio` varchar(200) NOT NULL,
  `grado` varchar(100) NOT NULL,
  `ciudad` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=97 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `correo`, `colegio`, `grado`, `ciudad`) VALUES
(1, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(2, 'sebastian', 'soto', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(3, 'sebastian', 'soto', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(4, 'sebastian', 'soto', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(5, 'sebastian', 'soto', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(6, 'sebastian', 'soto', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(7, 'sebastian', 'soto', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(8, 'sebastian', 'soto', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(9, 'sebastian', 'soto', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(10, 'sebastian', 'soto', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(11, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(12, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(13, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11-3', 'cartago'),
(14, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11-3', 'cartago'),
(15, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(16, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(17, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(18, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(19, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(20, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(21, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(22, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(23, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(24, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(25, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(26, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(27, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(28, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(29, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(30, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(31, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(32, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(33, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(34, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(35, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(36, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(37, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(38, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(39, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(40, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(41, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(42, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(43, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(44, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(45, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(46, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(47, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(48, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(49, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(50, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(51, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(52, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(53, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(54, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(55, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(56, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(57, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(58, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(59, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(60, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(61, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(62, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(63, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(64, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(65, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(66, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(67, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(68, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(69, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(70, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(71, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(72, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(73, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(74, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(75, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(76, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(77, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(78, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '22', 'cartago'),
(79, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '22', 'cartago'),
(80, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '22', 'cartago'),
(81, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(82, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '11', 'cartago'),
(83, 'alejandro', 'rodas', 'roditas@gmail.com', 'sor maria juliana', '11', 'cartago'),
(84, 'alejandro', 'rodas', 'roditas@gmail.com', 'sor maria juliana', '11', 'cartago'),
(85, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '10', 'cartago'),
(86, 'camila', 'perez', 'camilitamejorxita@gnail', 'gabo', '11', 'cartago'),
(87, 'sebastian', 'restrepo', 'sebasrestrepom@gmail.com', 'gabo', '11-3', 'cartago'),
(88, 'sebastian', 'restrepo', 'sebasrestrepom@gmail.com', 'gabo', '11-3', 'cartago'),
(89, 'sebastian', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '10', 'cartago'),
(90, 'sebastian', 'restrepo', 'sebasrestrepom@gmail.com', 'gabo', '11-3', 'cartago'),
(91, 'aisha', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '8-1', 'cartago'),
(92, 'aisha', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '8-1', 'cartago'),
(93, 'aisha', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '8-1', 'cartago'),
(94, 'aisha', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '8-1', 'cartago'),
(95, 'aisha', 'restrepo', 'sebasrestrepo@gmail.com', 'gabo', '8-1', 'cartago'),
(96, 'sebastian', 'restrepo', 'sebasrestrepom@gmail.com', 'gabo', '11-3', 'cartago');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
