const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const terser = require("gulp-terser");
const browsersync = require("browser-sync").create();

// sass Task
function scssTask() {
  return src("./src/scss/style.scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(dest("./src/dist", { sourcemaps: "." }));
}

// javascript task
function jsTask() {
  return src("./src/js/script.js", { sourcemaps: true })
    .pipe(terser())
    .pipe(dest("./src/dist", { sourcemaps: "." }));
}

// browsersync Task
function browsersyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: "./src",
    },
    browser: "firefox",
  });
  cb();
}

function browsersyncReload(cb) {
  browsersync.reload();
  cb();
}

//Watch Task
function watchTask() {
  watch("./src/*.html", browsersyncReload);
  watch(
    ["./src/scss/**/*.scss", "./src/js/**/*.js"],
    series(scssTask, jsTask, browsersyncReload)
  );
}

// default Gulp task
exports.default = series(scssTask, jsTask, browsersyncServe, watchTask);

// build gulp task
exports.build = series(scssTask, jsTask);