module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      options: {
      livereload: true,
      },
      express :{
       files: '/server/server.js',
       tasks: ['express:dev'],
       options: {
        spawn: false
      } 
    }
  },
  
  express : {
    dev: {
      options: {
        script: 'server.js',
        port: 9000
      }
    }
  }
});
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['express',
    'watch'
    ]);
  
};