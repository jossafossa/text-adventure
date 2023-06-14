const mix = require('laravel-mix');

mix.js('assets/js/main.js', 'build/js')
  .sass('assets/scss/main.scss', 'build/css')
  .setPublicPath('build')
  .browserSync({
    proxy: 'http://www.text-adventure.test',
    host: 'www.text-adventure.test',
    port: 3000,
    open: 'external', // Open the external URL automatically
    files: [
      'build/css/*.css',
      'build/js/*.js',
      '**/*.html',
      
    ],
  });