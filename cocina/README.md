
  # Recetas sencillas

  Aplicación web de recetas construida con React y Vite. La pantalla que se sirve
  en producción local es `index.php`; Vite mantiene `index.html` como plantilla
  interna de compilación.

  ## Servidor local con XAMPP o Laragon

  1. Instala Node.js y las dependencias del proyecto:

    ```bash
    npm install
    ```

  2. Crea tu configuración local a partir de la plantilla si aún no tienes
     `.env`:

    ```powershell
    Copy-Item .env.example .env
    ```

  3. Genera los archivos JavaScript y CSS que utiliza PHP:

    ```bash
    npm run build
    ```

  4. Copia o clona esta carpeta dentro de la carpeta pública del servidor:

    - XAMPP: `C:\xampp\htdocs\cocina`
    - Laragon: `C:\laragon\www\cocina`

  5. Inicia Apache desde XAMPP o Laragon y abre:
    `http://localhost/cocina/`

  El archivo `.htaccess` redirige las rutas de React, como
  `/recipe/...` o `/category/...`, a `index.php` sin producir errores 404.
  El shell común de PHP está en `includes/`; `header.php` obtiene el título
  desde `$titulo_pagina`, definido para la ruta actual en `index.php`. Los datos
  locales se leen de `.env`, que Git ignora; `.env.example` es la plantilla
  que se conserva en el repositorio.

  El botón de contacto abre un borrador en Gmail dirigido a `CONTACT_EMAIL`;
  el usuario redacta y envía el mensaje desde su propia cuenta.

  ## Desarrollo

  Para trabajar con recarga automática:

  ```bash
  npm run dev
  ```
  