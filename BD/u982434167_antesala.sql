-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 30-01-2022 a las 22:52:24
-- Versión del servidor: 10.5.12-MariaDB-cll-lve
-- Versión de PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
  `grupo` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `descripcionCorta` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `atp` bit(1) NOT NULL,
  `presencial` bit(1) NOT NULL,
  `duracion` int(3) NOT NULL,
  `url` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `facebook` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `instagram` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `claves` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `habilitado` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `EventosAsistencias`
--

CREATE TABLE `EventosAsistencias` (
  `id` bigint(64) NOT NULL,
  `idEventoCalendario` bigint(64) NOT NULL,
  `idusuario` bigint(64) NOT NULL,
  `confirmado` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `EventosCalendario`
--

CREATE TABLE `EventosCalendario` (
  `id` bigint(64) NOT NULL,
  `idevento` bigint(64) NOT NULL,
  `fecha` datetime NOT NULL,
  `tipoLiquidacion` int(11) NOT NULL,
  `lugares` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `EventosEntradas`
--

CREATE TABLE `EventosEntradas` (
  `id` bigint(64) NOT NULL,
  `idevento` bigint(64) NOT NULL,
  `idcalendario` bigint(64) NOT NULL,
  `denominacion` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tipo` enum('Gratis','Venta') COLLATE utf8mb4_unicode_ci NOT NULL,
  `cantidad` bigint(32) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `habilitarDesde` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `EventosImagenes`
--

CREATE TABLE `EventosImagenes` (
  `id` bigint(64) NOT NULL,
  `idevento` bigint(64) NOT NULL,
  `archivo` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slider` int(1) NOT NULL DEFAULT 0,
  `identificador` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `accion` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `EventosTipoLiquidacion`
--

CREATE TABLE `EventosTipoLiquidacion` (
  `id` bigint(64) NOT NULL,
  `detalle` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `habilitado` int(1) NOT NULL DEFAULT 1
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
(11, '64YZVWnZCDhrwrFzWGRa4Pu3EUp2', 'pedro', '', '78889', 'a@a.com', '', 3, '', NULL, NULL, '2021-11-12 11:59:31', 1, '', 'xs'),
(12, '1LBnYx2ZOBRYINF8i0RzsDGpfae2', 'Pablo Pellegrinet', '', 'bbb', 'pablo.desarrollo.sistemas@gmail.com', '', 2, '', NULL, NULL, '2021-11-12 12:02:26', 1, '', ''),
(13, 'pL3SawwLozPKYJkP6YxcLZ5bxEw1', 'pablo pellegrinet', '', 'pepe', 'pablo.pellegrinet@gmail.com', '', 2, '', NULL, NULL, '2021-11-12 12:49:27', 9, '', ''),
(14, 'TNXnK3MrlxNOxoDy7wF6SOda5eD2', 'Antesala Córdoba', '', '9999999', 'antesala.cordoba@gmail.com', '', 2, '', NULL, NULL, '2021-11-12 14:47:25', 9, '', '');

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

--
-- Volcado de datos para la tabla `UsuariosImagenes`
--

INSERT INTO `UsuariosImagenes` (`id`, `idusuario`, `archivo`, `slider`, `identificador`, `accion`) VALUES
(4, 12, '1637151460_84037196127587407c9b.jpg', 0, '12', 0),
(5, 12, '1637151461_7b0d2adbfa7bbf25eb0b.jpg', 0, '12', 0),
(6, 12, '1637151461_8be1dc5ed464fd3a63bd.jpg', 0, '12', 0),
(22, 12, '1637155736_b9aa07317b891105daaa.jpg', 0, '12', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `UsuariosOpcionesCobros`
--

CREATE TABLE `UsuariosOpcionesCobros` (
  `id` bigint(64) NOT NULL,
  `idusuario` bigint(64) NOT NULL,
  `situacionFiscal` enum('Responsable Inscripto','IVA Exento','Monotributo') COLLATE utf8mb4_unicode_ci NOT NULL,
  `CBU` varchar(22) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `UsuariosOrganizaciones`
--

CREATE TABLE `UsuariosOrganizaciones` (
  `id` bigint(64) NOT NULL,
  `idusuario` bigint(64) NOT NULL,
  `razon_social` varchar(600) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logo` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcionOrg` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `ubicacion` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `coordX` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `coordY` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `whatsapp` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idestado` int(11) NOT NULL,
  `url` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `accesibilidad` enum('Si','No') COLLATE utf8mb4_unicode_ci NOT NULL,
  `motivodesactivado` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `UsuariosOrganizaciones`
--

INSERT INTO `UsuariosOrganizaciones` (`id`, `idusuario`, `razon_social`, `logo`, `descripcionOrg`, `ubicacion`, `coordX`, `coordY`, `whatsapp`, `idestado`, `url`, `accesibilidad`, `motivodesactivado`) VALUES
(1, 12, '9bit', '', 'jjjnnn', 'jjjj', '', '', '', 2, 'jjj', 'Si', '');

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
-- Indices de la tabla `EventosAsistencias`
--
ALTER TABLE `EventosAsistencias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `EventosCalendario`
--
ALTER TABLE `EventosCalendario`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idevento` (`idevento`);

--
-- Indices de la tabla `EventosEntradas`
--
ALTER TABLE `EventosEntradas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idevento` (`idevento`),
  ADD KEY `idcalendario` (`idcalendario`);

--
-- Indices de la tabla `EventosImagenes`
--
ALTER TABLE `EventosImagenes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `identificador` (`identificador`),
  ADD KEY `idusuario` (`idevento`);

--
-- Indices de la tabla `EventosTipoLiquidacion`
--
ALTER TABLE `EventosTipoLiquidacion`
  ADD PRIMARY KEY (`id`);

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
-- Indices de la tabla `UsuariosOpcionesCobros`
--
ALTER TABLE `UsuariosOpcionesCobros`
  ADD PRIMARY KEY (`id`),
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
-- AUTO_INCREMENT de la tabla `EventosAsistencias`
--
ALTER TABLE `EventosAsistencias`
  MODIFY `id` bigint(64) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `EventosCalendario`
--
ALTER TABLE `EventosCalendario`
  MODIFY `id` bigint(64) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `EventosEntradas`
--
ALTER TABLE `EventosEntradas`
  MODIFY `id` bigint(64) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `EventosImagenes`
--
ALTER TABLE `EventosImagenes`
  MODIFY `id` bigint(64) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `EventosTipoLiquidacion`
--
ALTER TABLE `EventosTipoLiquidacion`
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
  MODIFY `id` bigint(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `UsuariosOpcionesCobros`
--
ALTER TABLE `UsuariosOpcionesCobros`
  MODIFY `id` bigint(64) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `UsuariosOrganizaciones`
--
ALTER TABLE `UsuariosOrganizaciones`
  MODIFY `id` bigint(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `UsuariosTipos`
--
ALTER TABLE `UsuariosTipos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
