# Interstellar - Fan Page Project

Bienvenido al repositorio de **Interstellar**, una página web creada como tributo a la película _Interstellar_. Este proyecto está construido en **Astro** y utiliza diversas tecnologías en su stack, incluyendo **JavaScript**, **phpMyAdmin** para la gestión de bases de datos, **AstroAuth** para la gestion de login y register, y **Tailwind CSS** para el diseño y estilo.

<br>

![100shots_so](https://github.com/davidvillard/Interstellar/blob/main/public/github/Interstellar-Github.png)

<br>
<br>

## Tabla de Contenidos

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación y Configuración](#instalación-y-configuración)
- [Funcionalidades](#funcionalidades)
- [Ejemplos de Uso](#ejemplos-de-uso)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

<br>
<br>

## Descripción del Proyecto

Este proyecto está pensado como una página de fans de la película _Interstellar_, con secciones sobre la película, el director, los actores, la banda sonora, y más. La página permite a los usuarios registrarse, iniciar sesión y acceder a contenido exclusivo.

El backend permite autenticación básica, mientras que el frontend está diseñado para ser visualmente atractivo, gracias a Tailwind CSS y componentes de Astro. La base de datos se gestiona a través de phpMyAdmin, y AstroAuth se encarga de manejar el inicio de sesiçon y el registro.

<br>
<br>

## Tecnologías Utilizadas

- **Astro**: Framework principal para la generación del frontend.
- **JavaScript**: Utilizado en el frontend y en el backend para manejar interactividad y lógica.
- **AstroAuth**: Biblioteca de autenticación utilizada en Astro para implementar login y registro de manera eficiente, incluyendo soporte para múltiples proveedores de autenticación como Google.
- **phpMyAdmin**: Herramienta de administración de la base de datos.
- **Tailwind CSS**: Framework de CSS utilizado para el diseño responsive.
- **Docker**: Para la configuración y despliegue del proyecto en entornos aislados.

<br>
<br>

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de archivos y carpetas:

```plaintext
└── 📁Interstellar
    └── 📁.astro
        └── settings.json
        └── types.d.ts
    └── 📁backend
        └── 📁config
            └── db.js
        └── 📁Controllers
            └── authController.js
        └── 📁Middleware
            └── uploadAvatar.js
        └── 📁Routes
            └── authRoutes.js
        └── 📁Uploads
        └── .env
        └── app.js
        └── package-lock.json
        └── package.json
    └── 📁public
    └── 📁src
        └── 📁components
            └── 📁Icons
            └── Card.astro
            └── Footer.astro
            └── Header.astro
        └── 📁layouts
            └── Layout.astro
            └── LayoutErrors.astro
            └── LayoutLogin.astro
            └── LayoutRegister.astro
        └── 📁pages
            └── 404.astro
            └── about.astro
            └── amelia.astro
            └── cast.astro
            └── cooper.astro
            └── director.astro
            └── hugh-mann.astro
            └── index.astro
            └── john.astro
            └── login.astro
            └── media.astro
            └── murph.astro
            └── register.astro
            └── soundtrack.astro
            └── streaming.astro
            └── timothee.astro
        └── 📁services
            └── api.js
            └── login.js
            └── register.js
        └── env.d.ts
    └── .gitignore
    └── astro.config.mjs
    └── docker-compose.yml
    └── Dockerfile
    └── package-lock.json
    └── package.json
    └── README.md
    └── tailwind.config.mjs
    └── tsconfig.json
```
<br>
<br>
<br>

# Instalación y Configuración

## Prerrequisitos

- **Node.js** y **npm** deben estar instalados en tu sistema.
- **Docker** (para un entorno aislado y fácil de desplegar).
- **phpMyAdmin** para la gestión de la base de datos en MySQL.

<br>

## Instalación

Clona este repositorio:

```bash
git clone https://github.com/davidvillard/interstellar
cd interstellar
```

Instala las dependencias:

```bash
npm install
```

Configura Docker para iniciar phpMyAdmin y MySQL:

```bash
docker-compose up -d
```

Ejecuta Astro en modo de desarrollo:

```bash
npm run dev
```
- Otra opción es inciar el contenedor en docker ya ya se despliega la aplicación

Accede a la aplicación en `http://localhost:4321`.

<br>
<br>
<br>

# Funcionalidades

<br>

## Funcionalidades del Proyecto

- **Registro e Inicio de Sesión**: Los usuarios pueden registrarse e iniciar sesión. La autenticación se maneja en el backend usando **AstroAuth**.
- **Base de Datos**: Las credenciales de los usuarios y otros datos se almacenan en una base de datos MySQL gestionada a través de **phpMyAdmin**.
- **Frontend**: La página es completamente responsive gracias a **Tailwind CSS**. La interfaz está diseñada para ser visualmente atractiva y fácil de usar.
- **About**: Una sección que proporciona una descripción general de la película _Interstellar_, incluyendo contexto y detalles de la producción.
- **Director**: Información detallada sobre el director de _Interstellar_, su visión y estilo de dirección.
- **Cast**: Información sobre el reparto principal, sus personajes en la película, y sus contribuciones a la trama.
- **Media**: Galerías de imágenes, videos, y otros medios relacionados con la película.
- **Soundtrack**: Una lista de las pistas principales de la banda sonora de la película.
- **Sistema de Streaming**: Información sobre las plataformas donde se puede ver _Interstellar_.
- **Contenido Exclusivo**: Acceso a contenido exclusivo para usuarios registrados, como entrevistas y materiales especiales.

<br>
<br>
<br>

# Ejemplos de Uso

<br>

## Registro de Usuario

- Los usuarios pueden registrarse ingresando datos como nombre, correo electrónico, y contraseña.
- La contraseña es protegida con _bcrypt_ para mayor seguridad.

<br>

## Inicio de Sesión

- Después de registrarse, los usuarios pueden iniciar sesión y acceder a contenido exclusivo. (Implementación)
- La autenticación se maneja a través de AstroAuth

<br>

## Consulta de la Base de Datos

- Puedes gestionar y consultar los datos del usuario usando **phpMyAdmin** accediendo a `http://localhost:3306`.

<br>
<br>
<br>

# Contribuciones

Las contribuciones son bienvenidas. Si tienes sugerencias de nuevas funcionalidades o mejoras, abre un _issue_ o envía un _pull request_.

1. Realiza un _fork_ del repositorio.
2. Crea tu _branch_ con la funcionalidad nueva:

   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

3. Haz _commit_ de tus cambios:

   ```bash
   git commit -m 'Agrega nueva funcionalidad'
   ```

4. Sube el _branch_ a GitHub:

   ```bash
   git push origin feature/nueva-funcionalidad
   ```

5. Abre un _pull request_ para revisión.

<br>
<br>
<br>

# Licencia

Este proyecto está bajo la Licencia MIT. Puedes consultar el archivo `LICENSE` para más detalles.


