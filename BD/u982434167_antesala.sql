-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 12-11-2021 a las 20:19:34
-- Versión del servidor: 10.5.12-MariaDB-cll-lve
-- Versión de PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `u982434167_antesala`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Eventos`
--

CREATE TABLE `Eventos` (
  `id` bigint(64) NOT NULL,
  `idusuario` bigint(64) NOT NULL,
  `titulo` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `fecha` date NOT NULL,
  `hora` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lugares` int(11) NOT NULL,
  `claves` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `EventosAsistencia`
--

CREATE TABLE `EventosAsistencia` (
  `id` bigint(64) NOT NULL,
  `idevento` bigint(64) NOT NULL,
  `idusuario` bigint(64) NOT NULL,
  `confirmado` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `EventosImagenes`
--

CREATE TABLE `EventosImagenes` (
  `id` bigint(64) NOT NULL,
  `idevento` int(64) NOT NULL,
  `archivo` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slider` int(1) NOT NULL DEFAULT 0,
  `identificador` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `accion` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Usuarios`
--

CREATE TABLE `Usuarios` (
  `id` bigint(64) NOT NULL,
  `uid` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellido` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccion` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `idestado` int(1) NOT NULL DEFAULT 1,
  `password` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `codePassword` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fecha` datetime NOT NULL DEFAULT current_timestamp(),
  `idtipousuario` int(1) NOT NULL DEFAULT 1,
  `imagen` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `motivodesactivado` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `Usuarios`
--

INSERT INTO `Usuarios` (`id`, `uid`, `nombre`, `apellido`, `telefono`, `email`, `direccion`, `idestado`, `password`, `code`, `codePassword`, `fecha`, `idtipousuario`, `imagen`, `motivodesactivado`) VALUES
(11, '64YZVWnZCDhrwrFzWGRa4Pu3EUp2', 'pedro', '', '78889', 'a@a.com', '', 2, '', NULL, NULL, '2021-11-12 11:59:31', 1, '', ''),
(12, '1LBnYx2ZOBRYINF8i0RzsDGpfae2', 'Pablo Pellegrinet', '', 'bbb', 'pablo.desarrollo.sistemas@gmail.com', '', 2, '', NULL, NULL, '2021-11-12 12:02:26', 2, '', ''),
(13, 'pL3SawwLozPKYJkP6YxcLZ5bxEw1', 'pablo pellegrinet', '', 'pepe', 'pablo.pellegrinet@gmail.com', '', 2, '', NULL, NULL, '2021-11-12 12:49:27', 9, '', ''),
(14, 'TNXnK3MrlxNOxoDy7wF6SOda5eD2', 'Antesala Córdoba', '', '9999999', 'antesala.cordoba@gmail.com', '', 2, '', NULL, NULL, '2021-11-12 14:47:25', 1, '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `UsuariosEstados`
--

CREATE TABLE `UsuariosEstados` (
  `id` int(11) NOT NULL,
  `estado` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `activo` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `UsuariosEstados`
--

INSERT INTO `UsuariosEstados` (`id`, `estado`, `activo`) VALUES
(1, 'SIN VERIFICAR MAIL', 1),
(2, 'ACTIVO', 1),
(3, 'NO ACTIVO', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `UsuariosImagenes`
--

CREATE TABLE `UsuariosImagenes` (
  `id` bigint(64) NOT NULL,
  `idusuario` int(64) NOT NULL,
  `archivo` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slider` int(1) NOT NULL DEFAULT 0,
  `identificador` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `accion` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `UsuariosOrganizaciones`
--

CREATE TABLE `UsuariosOrganizaciones` (
  `id` bigint(64) NOT NULL,
  `idusuario` int(64) NOT NULL,
  `razon_social` varchar(600) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logo` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `ubicacion` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `coordX` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `coordY` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idestado` int(11) NOT NULL,
  `url` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `motivodesactivado` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `UsuariosTipos`
--

CREATE TABLE `UsuariosTipos` (
  `id` int(11) NOT NULL,
  `tipo` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `activo` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `UsuariosTipos`
--

INSERT INTO `UsuariosTipos` (`id`, `tipo`, `activo`) VALUES
(1, 'ORGANIZACION', 1),
(2, 'EXPECTADOR', 1),
(3, 'RRHH', 1),
(9, 'ADMIN', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Eventos`
--
ALTER TABLE `Eventos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `claves` (`claves`(768)) USING HASH;

--
-- Indices de la tabla `EventosAsistencia`
--
ALTER TABLE `EventosAsistencia`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `EventosImagenes`
--
ALTER TABLE `EventosImagenes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `identificador` (`identificador`),
  ADD KEY `idusuario` (`idevento`);

--
-- Indices de la tabla `Usuarios`
--
ALTER TABLE `Usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `uid` (`uid`);

--
-- Indices de la tabla `UsuariosEstados`
--
ALTER TABLE `UsuariosEstados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `UsuariosImagenes`
--
ALTER TABLE `UsuariosImagenes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `identificador` (`identificador`),
  ADD KEY `idusuario` (`idusuario`);

--
-- Indices de la tabla `UsuariosOrganizaciones`
--
ALTER TABLE `UsuariosOrganizaciones`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `idusuario` (`idusuario`) USING BTREE;

--
-- Indices de la tabla `UsuariosTipos`
--
ALTER TABLE `UsuariosTipos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Eventos`
--
ALTER TABLE `Eventos`
  MODIFY `id` bigint(64) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `EventosAsistencia`
--
ALTER TABLE `EventosAsistencia`
  MODIFY `id` bigint(64) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `EventosImagenes`
--
ALTER TABLE `EventosImagenes`
  MODIFY `id` bigint(64) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Usuarios`
--
ALTER TABLE `Usuarios`
  MODIFY `id` bigint(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `UsuariosEstados`
--
ALTER TABLE `UsuariosEstados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `UsuariosImagenes`
--
ALTER TABLE `UsuariosImagenes`
  MODIFY `id` bigint(64) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `UsuariosOrganizaciones`
--
ALTER TABLE `UsuariosOrganizaciones`
  MODIFY `id` bigint(64) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `UsuariosTipos`
--
ALTER TABLE `UsuariosTipos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
