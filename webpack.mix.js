const mix = require('laravel-mix');

mix.setPublicPath('dist');

mix.js('src/app.js', 'js/app.js');

mix.vue('src/DynamicComponent.vue', 'components/DynamicComponent.js');