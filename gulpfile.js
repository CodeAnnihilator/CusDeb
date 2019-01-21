'use strict';

// TODO: improve task flow

const gulp = require('gulp');
const gulp_tslint = require('gulp-tslint');

// gulp.task('default', ['tslint']);

// gulp.task('tslint', () => {
//     return gulp.src(['**/*.tsx', '!**/*.d.ts', '!node_modules/**'])
//       .pipe(gulp_tslint())
//       .pipe(gulp_tslint.report());
// });

gulp.task("lint", () => {
    return gulp.src(['**/*.ts', '**/*.tsx', '!**/*.d.ts', '!node_modules/**'])
        .pipe(gulpTsLint({
            formatter: 'stylish',
            programConfig: "./tsconfig.json", //when this is specified, enable type-checked rules
            programLocation: ".src/"  //this should be the default value
        }))
        .pipe(gulpTsLint.report({
            emitError: true,
            summarizeFailureOutput: false
        }));
});