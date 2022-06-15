// 组件样式打包
const { series, src, dest } = require('gulp')
const sass = require('gulp-dart-sass')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')


function compile() { // 处理scss文件
    return src('./src/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({}))
    .pipe(cssmin())
    .pipe(dest('./dist'))
}
function copyfont(){ // 拷贝字体样式
    return src('./src/fonts/**').pipe(cssmin()).pipe(dest('./dist/fonts')).pipe(dest('../design/dist/fonts'))
}

function copystyle() { // 拷贝index样式到design
    return src('./dist/index.css').pipe(dest('../design/dist'))
}

exports.build = series(compile,copyfont,copystyle)