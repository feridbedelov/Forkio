const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync");
const autoPrefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const minifycss = require("gulp-clean-css");
const imgmin = require("gulp-imagemin");
const clean = require("gulp-clean");
const uglify = require("gulp-uglifyjs");

gulp.task("browser-sync", function() {
    browserSync.init({
        server: {
            baseDir: "."
        },
        notify: false
    })
});

gulp.task("sass", function (){
    return gulp
        .src("src/scss/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task("scripts",async function () {
    return gulp
         .src("src/js/**/*.js")
         .pipe(concat("main.min.js"))
         .pipe(uglify())
         .pipe(gulp.dest("dist/js"))
         .pipe(browserSync.reload({stream: true}))
});

gulp.task("watch", function() {
    gulp.watch("src/scss/**/*.scss", gulp.parallel("sass"));
    gulp.watch("*.html", gulp.parallel("code"));
    gulp.watch(["dist/js/min.js", "src/js/**/*.js"], gulp.parallel("scripts"));
});

gulp.task("code", function () {
    return gulp
        .src("*.html")
        .pipe(browserSync.reload({stream: true}))
});

gulp.task("clean", async function () {
    return gulp
        .src("dist/*", {read: false})
        .pipe(clean())
});

gulp.task("modify",async function () {
    return gulp
        .src("src/scss/**/*.scss")
        .pipe(sass())
        .pipe(autoPrefixer(["last 15 versions", "> 1%", "ie 8", "ie 7"], {cascade: true }))
        .pipe(concat("main.css"))
        .pipe(minifycss({compatibility: 'ie8'}))
        .pipe(gulp.dest("dist/css"))
});

gulp.task("img", async function () {
    gulp
        .src("src/img/**/*")
        .pipe(imgmin())
        .pipe(gulp.dest("dist/img"))
});

gulp.task("build", gulp.parallel("clean", "modify", "scripts", "img"));
gulp.task("dev", gulp.parallel("sass", "scripts", "browser-sync", "watch"));
