module.exports = function(grunt) {
	grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json'),
    	browserify: {
	      './public/main.js': ['./public/js/main.js']
	    },
	    watch: {
	      files: [ 'public/js/**/*.js'],
	      tasks: [ 'browserify' ]
	    },
	 /*   connect: {
			server: {
			  	options: {
			    	port: 7002,
			    	base: './'
			  	}
			}
		}*/
  	})

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-watch');
/*	grunt.loadNpmTasks('grunt-contrib-connect');*/
};
