import gulp from 'gulp';
import rename from 'gulp-rename';
import del from 'del';
import htmlmin from 'gulp-htmlmin';
import sass from 'gulp-dart-sass';
import plumber from 'gulp-plumber';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import csso from 'postcss-csso';
import terser from 'gulp-terser';
import squoosh from 'gulp-libsquoosh';
import webp from 'gulp-webp';
import svgo from 'gulp-svgo';
import svgstore from 'gulp-svgstore';
import server from 'browser-sync';

// Локальный сервер

export const localHost = (done) => {
  server.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

// Минификация HTML

export const html = () => {
  return gulp.src('source/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'));
}

// Сборка препроцессора

export const styles = () => {
  return gulp.src('source/sass/style.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(rename('style.min.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/css'))
    .pipe(server.stream());
}

// Минификация JS

export const scripts = () => {
  return gulp.src('source/js/**/*.js')
    .pipe(terser())
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(gulp.dest('build/js'))
    .pipe(server.stream());
}

// Оптимизация растровых изображений

export const imageOptim = () => {
  return gulp.src('source/img/**/*.{jpg,png}')
    .pipe(squoosh())
    .pipe(gulp.dest('build/img'));
}

// Оптимизация SVG

export const svgOptim = () => {
  return gulp.src(['source/img/**/*.svg', '!source/img/icons.svg'])
    .pipe(svgo())
    .pipe(gulp.dest('build/img'));
}

// Конвертация в WebP

export const createWebp = () => {
  return gulp.src('source/img/**/*.{jpg,png}')
    .pipe(webp())
    .pipe(gulp.dest('build/img'));
}

// Копирование изображений

export const imageCopy = () => {
  return gulp.src('source/img/**/*.{jpg,png}',
  {
    base: "source"
  })
  .pipe(gulp.dest('build/img'));
}

// Копирование

export const copy = () => {
  return gulp.src([
    'source/fonts/*.{woff,woff2,otf,ttf}',
    'source/*.ico',
    'source/img/**/*.svg',
    // 'source/manifest.webmanifest',
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"))
  done();
}

// Очистка

export const clean = () => {
  return del('build');
}

// Отслеживание изменений

export const watcher = () => {
  gulp.watch('source/sass/**/*.scss', gulp.series(styles));
  gulp.watch('source/js/**/*.js', gulp.series(scripts));
  gulp.watch('source/*.html').on('change', gulp.series(html, server.reload));
}

// Сборки

export const build = gulp.series(
  clean,
  copy,
  imageOptim,
  svgOptim,
  gulp.parallel(
    html,
    styles,
    scripts,
    createWebp
  )
);

export default gulp.series(
  clean,
  copy,
  imageCopy,
  gulp.parallel(
    html,
    styles,
    scripts,
    createWebp
  ),
  gulp.series(
    localHost,
    watcher
  )
);
