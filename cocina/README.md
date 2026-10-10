
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

  ## Supabase: cuentas e inicio de sesión

  1. Crea un proyecto en Supabase y copia su **Project URL** y su clave pública
     **anon** (o **publishable**) desde la configuración de API.
  2. Añade estos valores al `.env` local, reemplazando los marcadores de ejemplo:

     ```dotenv
     VITE_SUPABASE_URL="https://TU_PROYECTO.supabase.co"
     VITE_SUPABASE_ANON_KEY="TU_CLAVE_PUBLICA"
     ```

     Solo uses una clave pública `anon`/`publishable` en el navegador. Nunca
     pongas una clave `service_role` en variables `VITE_` ni en el frontend.
  3. En el SQL Editor de Supabase, ejecuta el contenido de
     `supabase/migrations/20261010110000_create_profiles.sql`. La migración crea
     `public.profiles`, genera el perfil al registrar una cuenta y limita el
     acceso de cada usuario a su propio perfil mediante RLS.
  4. En Authentication → URL Configuration, configura la URL del sitio y añade
     `http://localhost:5173/**` a las URL de redirección permitidas para pruebas
     locales. Configura también el proveedor Email según quieras requerir
     confirmación del correo.
  5. Reinicia Vite (`npm run dev`) o recompila (`npm run build`) para que tome
     los valores de `.env`.

  Si las variables no están configuradas, la interfaz informa que falta la
  conexión en vez de simular un inicio de sesión. Solo `/login` y `/register`
  son públicos; el resto del sitio requiere una sesión activa. La aplicación
  implementa registro, confirmación por correo cuando Supabase la requiere,
  inicio/cierre de sesión y página de cuenta.

  Para comentarios, ejecuta también
  `supabase/migrations/20261010120000_create_recipe_comments.sql` en el SQL
  Editor. Crea `public.recipe_comments` con permisos RLS: los usuarios con
  sesión pueden leer y publicar comentarios; cada persona solo puede editar o
  eliminar los propios. Los comentarios se guardan asociados al identificador
  de cada receta del catálogo y su autor se determina en la base de datos.

  Para que los usuarios publiquen recetas, ejecuta
  `supabase/migrations/20261010140000_create_community_recipes.sql` en el SQL
  Editor. Crea `public.community_recipes`, permite lectura a personas
  autenticadas y restringe cada publicación a la sesión de quien la creó. Las
  recetas compartidas aparecen en la página de la comunidad, en su categoría,
  en la búsqueda avanzada y tienen su propia página de detalle y comentarios.
  Para permitir que cada usuario borre sus propias recetas, ejecuta también
  `supabase/migrations/20261010150000_allow_owners_to_delete_community_recipes.sql`.
  La política RLS impide borrar recetas de otras personas; al eliminar una
  receta también se eliminan sus comentarios asociados.

  ## Despliegue en Vercel

  El proyecto Vite está dentro de la carpeta `cocina` del repositorio. En la
  configuración del proyecto de Vercel establece **Root Directory** en
  `cocina`, usa `npm run build` como comando de compilación y `dist` como
  directorio de salida. Vercel leerá `vercel.json` para dirigir las rutas de la
  aplicación React a `index.html`.

  En Settings → Environment Variables de Vercel configura
  `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` con la URL del proyecto
  Supabase y su clave pública anon/publishable. No uses la clave `service_role`.
  Después de añadir o cambiar variables, vuelve a desplegar. En Supabase →
  Authentication → URL Configuration añade el dominio de producción de Vercel
  a **Site URL** y a las URL de redirección permitidas. Ejecuta las migraciones
  SQL documentadas arriba en el proyecto Supabase antes de usar las funciones
  de perfiles, comentarios y recetas de la comunidad.

  El formulario de contacto abre Gmail con un borrador dirigido a
  `fsfiligoyborkoski@gmail.com`. El email de la cuenta con sesión se incluye
  como dirección de respuesta; la persona revisa y envía el mensaje desde Gmail.

  ## Desarrollo

  Para trabajar con recarga automática:

  ```bash
  npm run dev
  ```
  