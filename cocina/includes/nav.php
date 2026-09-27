<?php
$navigation_links = [
    ['Inicio', '/'],
    ['Búsqueda', '/advanced-search'],
    ['Recetas económicas', '/economic-recipes'],
    ['Consejos', '/cooking-tips'],
    ['Curso', '/curso'],
    ['Blog', '/blog'],
    ['Preguntas frecuentes', '/faq'],
];
?>
<nav class="site-navigation" aria-label="Navegación principal">
  <a class="site-navigation__brand" href="<?= $escape($app_base . '/') ?>"><?= $escape($app_name) ?></a>
  <ul class="site-navigation__links">
    <?php foreach ($navigation_links as [$label, $path]): ?>
      <li><a href="<?= $escape($app_base . $path) ?>"><?= $escape($label) ?></a></li>
    <?php endforeach; ?>
  </ul>
</nav>