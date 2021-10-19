-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 28-06-2021 a las 14:04:18
-- Versión del servidor: 10.4.15-MariaDB-cll-lve
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
-- Base de datos: `u982434167_rematesya`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Pagos`
--

CREATE TABLE `Pagos` (
  `id` bigint(64) NOT NULL,
  `idusuario` bigint(64) NOT NULL,
  `idproducto` bigint(64) NOT NULL,
  `monto` float(10,2) NOT NULL,
  `fecha` datetime NOT NULL DEFAULT current_timestamp(),
  `codigo` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `idtipopago` bigint(64) NOT NULL,
  `imagen` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `idestado` int(1) NOT NULL DEFAULT 0,
  `estadoplataforma` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `linkpago` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `Pagos`
--

INSERT INTO `Pagos` (`id`, `idusuario`, `idproducto`, `monto`, `fecha`, `codigo`, `idtipopago`, `imagen`, `idestado`, `estadoplataforma`, `email`, `linkpago`) VALUES
(10, 1, 65, 500.00, '2021-05-20 13:16:58', '', 2, '', 3, '', 'mm@bbb.com', 'redirect?pref_id=92091112-320ee275-fb4a-4c44-8faa-125578a87a67'),
(11, 1, 71, 0.90, '2021-06-23 12:38:20', '', 2, '', 0, '', 'admin@admin.com', 'redirect?pref_id=747843523-bb08cef1-d6bf-4323-865a-3d6e95d01e39'),
(12, 52, 71, 0.90, '2021-06-27 14:05:11', '', 2, '', 0, 'pending (pending_waiting_payment)', 'pablo.desarrollo.sistemas@gmail.com', 'redirect?pref_id=747843523-56ef5ecb-c8b5-4a7d-8945-d6bc8012d8d5');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `PagosEstado`
--

CREATE TABLE `PagosEstado` (
  `id` int(64) NOT NULL,
  `estado` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `PagosEstado`
--

INSERT INTO `PagosEstado` (`id`, `estado`) VALUES
(0, 'Pendiente Sin Confirmar'),
(1, 'Confirmado'),
(2, 'Devolucion Solicitada'),
(3, 'Devuelto'),
(9, 'Cancelado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `PagosTipo`
--

CREATE TABLE `PagosTipo` (
  `id` bigint(64) NOT NULL,
  `tipo` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `PagosTipo`
--

INSERT INTO `PagosTipo` (`id`, `tipo`) VALUES
(1, 'TRANSFERENCIA'),
(2, 'MERCADOPAGO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Productos`
--

CREATE TABLE `Productos` (
  `id` bigint(64) NOT NULL,
  `titulo` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `valor` int(11) NOT NULL DEFAULT 0,
  `idcategoria` int(11) NOT NULL,
  `idrubro` int(11) NOT NULL,
  `urlvideo` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vendedor` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vendedorcuil` varchar(11) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vendedorurl` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `idusuario` bigint(64) NOT NULL DEFAULT 1,
  `fecha` datetime NOT NULL DEFAULT current_timestamp(),
  `idestado` int(11) NOT NULL,
  `identificador` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fechaInicio` date NOT NULL,
  `fechaFin` date NOT NULL,
  `base` bigint(100) NOT NULL,
  `posturaMinima` bigint(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `Productos`
--

INSERT INTO `Productos` (`id`, `titulo`, `descripcion`, `valor`, `idcategoria`, `idrubro`, `urlvideo`, `vendedor`, `vendedorcuil`, `vendedorurl`, `idusuario`, `fecha`, `idestado`, `identificador`, `fechaInicio`, `fechaFin`, `base`, `posturaMinima`) VALUES
(68, 'auto espectacular', 'auto ultimo modelo', 0, 0, 1, 'hh.com', '', '', '', 1, '2021-06-15 16:52:53', 3, 'c00c4e59-1cdc-4b75-888a-df685b209e8b', '2021-06-15', '2021-06-20', 10000, 1000),
(69, 'bbb', 'bbb', 0, 0, 1, 'nnn', '', '', '', 1, '2021-06-16 13:32:05', 1, '6675fc1e-8570-4ece-84e1-83e74d8ff35a', '2021-06-16', '2021-06-18', 900, 9),
(70, 'ducati', 'buena', 0, 0, 1, '', '', '', '', 1, '2021-06-16 13:40:57', 1, 'b708dcd2-f2bc-4a8c-a3de-c89e5f1cf48b', '2021-06-16', '2021-06-20', 90000, 90),
(71, 'kangoo', 'ooo', 0, 0, 1, 'o', '', '', '', 1, '2021-06-16 13:46:07', 2, '62327da8-eb8d-477f-9431-080d00a87248', '2021-06-16', '2021-06-30', 9, 9),
(72, 'probando', 'holannn', 0, 0, 1, '', '', '', '', 1, '2021-06-23 13:07:26', 2, '35662b96-bd2e-41a0-b2cd-c5db78c4dc2f', '2021-06-23', '2021-06-30', 9000, 50);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ProductosEstados`
--

CREATE TABLE `ProductosEstados` (
  `id` int(11) NOT NULL,
  `estado` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `activo` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `ProductosEstados`
--

INSERT INTO `ProductosEstados` (`id`, `estado`, `activo`) VALUES
(1, 'BORRADOR', 1),
(2, 'PUBLICADO', 1),
(3, 'DESTACADO', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ProductosImagenes`
--

CREATE TABLE `ProductosImagenes` (
  `id` bigint(64) NOT NULL,
  `archivo` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `identificador` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `accion` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `ProductosImagenes`
--

INSERT INTO `ProductosImagenes` (`id`, `archivo`, `identificador`, `accion`) VALUES
(176, '', 'fc4a4e9d-8846-4379-9504-4e26477e1e7c', 0),
(177, '', '313de429-c087-44b1-993b-f7b3c5eeba76', 0),
(178, '1615987052_578314408c735ae5ad26.jpeg', '83393019-1c56-4386-82d3-796cf56c8aee', 0),
(179, '1615987199_38c6950208e64dca8596.jpeg', 'e85242dc-9f0e-4938-87df-56650c91892d', 0),
(180, '1615987199_63951cec89b52d399c13.jpeg', 'e85242dc-9f0e-4938-87df-56650c91892d', 0),
(181, '1615987199_ade8d153731987865267.jpeg', 'e85242dc-9f0e-4938-87df-56650c91892d', 0),
(197, '1623775973_2f0c301397f67165e13a.jpg', 'c00c4e59-1cdc-4b75-888a-df685b209e8b', 0),
(198, '1623850325_45a1c300c8f667ad7b23.jpg', '6675fc1e-8570-4ece-84e1-83e74d8ff35a', 0),
(199, '1623850533_142421cc920b5c09b889.jpg', 'e1ea82f5-1e07-4315-98c2-5a47d7f7e1e6', 0),
(200, '1623850858_5d838481e490bb61e66e.jpg', 'b708dcd2-f2bc-4a8c-a3de-c89e5f1cf48b', 0),
(201, '1623851043_16b91a08956778eb4db4.jpg', 'aa729d66-2185-473c-a8b6-d704d74ae776', 0),
(202, '1623851168_203fd1035a7cc31e9dda.jpg', '62327da8-eb8d-477f-9431-080d00a87248', 0),
(203, '1624453646_cc18d5d373a80f23c8c4.jpg', '35662b96-bd2e-41a0-b2cd-c5db78c4dc2f', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ProductosRubros`
--

CREATE TABLE `ProductosRubros` (
  `id` int(11) NOT NULL,
  `rubro` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `activo` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `ProductosRubros`
--

INSERT INTO `ProductosRubros` (`id`, `rubro`, `activo`) VALUES
(1, 'AUTOMOVILES', 1),
(4, 'COCINA', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Subastas`
--

CREATE TABLE `Subastas` (
  `id` bigint(64) NOT NULL,
  `idproducto` bigint(64) NOT NULL,
  `fechainicio` date NOT NULL,
  `fechafin` date NOT NULL,
  `idestado` int(1) NOT NULL DEFAULT 1,
  `fecha` datetime NOT NULL DEFAULT current_timestamp(),
  `idmartillero` int(64) NOT NULL,
  `base` int(11) NOT NULL,
  `mincuota` int(11) NOT NULL DEFAULT 0,
  `trastiendaTexto` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `trastiendaValor` int(11) NOT NULL,
  `trastiendaFechaFin` date NOT NULL,
  `idevento` bigint(64) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `SubastasEstados`
--

CREATE TABLE `SubastasEstados` (
  `id` int(1) NOT NULL,
  `estado` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `SubastasEstados`
--

INSERT INTO `SubastasEstados` (`id`, `estado`) VALUES
(1, 'PROGAMADA'),
(2, 'ABIERTA'),
(3, 'FINALIZADA'),
(4, 'CANCELADA'),
(5, 'VENDIDA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `SubastasOferentes`
--

CREATE TABLE `SubastasOferentes` (
  `id` bigint(64) NOT NULL,
  `idproducto` bigint(64) NOT NULL,
  `idusuario` bigint(64) NOT NULL,
  `activo` int(1) NOT NULL DEFAULT 0,
  `fecha` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `SubastasOfertas`
--

CREATE TABLE `SubastasOfertas` (
  `id` bigint(64) NOT NULL,
  `idproducto` bigint(64) NOT NULL,
  `idusuario` bigint(64) NOT NULL,
  `valor` int(11) NOT NULL,
  `fecha` datetime NOT NULL DEFAULT current_timestamp(),
  `idtipooferta` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `SubastasOfertasTipos`
--

CREATE TABLE `SubastasOfertasTipos` (
  `id` int(11) NOT NULL,
  `tipo` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `activo` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `SubastasOfertasTipos`
--

INSERT INTO `SubastasOfertasTipos` (`id`, `tipo`, `activo`) VALUES
(1, 'NORMAL', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Suscripciones`
--

CREATE TABLE `Suscripciones` (
  `id` int(64) NOT NULL,
  `email` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `activo` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `Suscripciones`
--

INSERT INTO `Suscripciones` (`id`, `email`, `activo`) VALUES
(1, 'nnn@aa.com', 1),
(2, 'pablo.desarrollo.sistemas@gmail.com', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Usuarios`
--

CREATE TABLE `Usuarios` (
  `id` bigint(64) NOT NULL,
  `nombre` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellido` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cuil` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccion` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `idestado` int(1) NOT NULL DEFAULT 1,
  `password` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `codePassword` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fecha` datetime NOT NULL DEFAULT current_timestamp(),
  `idtipousuario` int(1) NOT NULL DEFAULT 1,
  `matricula` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `colegio` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `imagen` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `aprobado` int(1) NOT NULL DEFAULT 0,
  `motivodesactivado` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `Usuarios`
--

INSERT INTO `Usuarios` (`id`, `nombre`, `apellido`, `telefono`, `email`, `cuil`, `direccion`, `idestado`, `password`, `code`, `codePassword`, `fecha`, `idtipousuario`, `matricula`, `colegio`, `url`, `imagen`, `aprobado`, `motivodesactivado`) VALUES
(1, 'admin', 'admin', '', 'admin@admin.com', '99999999999', '', 2, '$2y$10$oPVBAQ/CsGfyDCP1T4fgXe.p3sHy5CU/M8eVF63GdGnNnP.n4STCG', '', NULL, '2020-08-11 16:29:09', 9, NULL, '', NULL, '', 0, ''),
(52, 'pp', 'pp', 'nn', 'pablo.desarrollo.sistemas@gmail.com', '20273036742', 'nn', 2, '$2y$10$7H03BIQO4F342eNNQeizDeFI8bHED44CaroCJGDk7tzWnZ/bAD9jK', '', NULL, '2021-04-08 16:53:11', 1, '', '', '', '', 0, 'nnnnnnv'),
(53, 'guido', 'montenegro', '3517618393', 'guimontenegro1987@gmail.com', '20329359590', 'tronador 2567', 2, '$2y$10$3gtU0R4jeKBOxAjiRonuPesom2wT5S9RPM4jctjhYauo5ZEBwosS6', '', NULL, '2021-06-08 18:52:29', 1, '', '', '', '', 0, '');

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
(1, 'OFERENTE', 1),
(9, 'ADMINISTRADOR', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Pagos`
--
ALTER TABLE `Pagos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `PagosEstado`
--
ALTER TABLE `PagosEstado`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `PagosTipo`
--
ALTER TABLE `PagosTipo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Productos`
--
ALTER TABLE `Productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ProductosEstados`
--
ALTER TABLE `ProductosEstados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ProductosImagenes`
--
ALTER TABLE `ProductosImagenes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `identificador` (`identificador`);

--
-- Indices de la tabla `ProductosRubros`
--
ALTER TABLE `ProductosRubros`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Subastas`
--
ALTER TABLE `Subastas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `SubastasEstados`
--
ALTER TABLE `SubastasEstados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `SubastasOferentes`
--
ALTER TABLE `SubastasOferentes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `SubastasOfertas`
--
ALTER TABLE `SubastasOfertas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `SubastasOfertasTipos`
--
ALTER TABLE `SubastasOfertasTipos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Suscripciones`
--
ALTER TABLE `Suscripciones`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`) USING HASH;

--
-- Indices de la tabla `Usuarios`
--
ALTER TABLE `Usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indices de la tabla `UsuariosEstados`
--
ALTER TABLE `UsuariosEstados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `UsuariosTipos`
--
ALTER TABLE `UsuariosTipos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Pagos`
--
ALTER TABLE `Pagos`
  MODIFY `id` bigint(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `PagosEstado`
--
ALTER TABLE `PagosEstado`
  MODIFY `id` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `PagosTipo`
--
ALTER TABLE `PagosTipo`
  MODIFY `id` bigint(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `Productos`
--
ALTER TABLE `Productos`
  MODIFY `id` bigint(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT de la tabla `ProductosEstados`
--
ALTER TABLE `ProductosEstados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `ProductosImagenes`
--
ALTER TABLE `ProductosImagenes`
  MODIFY `id` bigint(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=204;

--
-- AUTO_INCREMENT de la tabla `ProductosRubros`
--
ALTER TABLE `ProductosRubros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `Subastas`
--
ALTER TABLE `Subastas`
  MODIFY `id` bigint(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT de la tabla `SubastasEstados`
--
ALTER TABLE `SubastasEstados`
  MODIFY `id` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `SubastasOferentes`
--
ALTER TABLE `SubastasOferentes`
  MODIFY `id` bigint(64) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `SubastasOfertas`
--
ALTER TABLE `SubastasOfertas`
  MODIFY `id` bigint(64) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `SubastasOfertasTipos`
--
ALTER TABLE `SubastasOfertasTipos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `Suscripciones`
--
ALTER TABLE `Suscripciones`
  MODIFY `id` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `Usuarios`
--
ALTER TABLE `Usuarios`
  MODIFY `id` bigint(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT de la tabla `UsuariosEstados`
--
ALTER TABLE `UsuariosEstados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `UsuariosTipos`
--
ALTER TABLE `UsuariosTipos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
