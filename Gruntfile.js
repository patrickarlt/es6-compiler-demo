module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    transpile: {
      main: {
        type: "amd", // or "rjs"
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['**/*.js'],
          dest: 'js/'
        }]
      }
    },
    traceur: {
      custom: {
        files:{
          '': ['js/**/*.js'] // dest : [source files]
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-traceur');
  grunt.loadNpmTasks('grunt-es6-module-transpiler');

  grunt.registerTask('default', ['transpile', 'traceur']);
};


