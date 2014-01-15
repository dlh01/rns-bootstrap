/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		// Metadata.
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
			'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
			'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
			'Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

		// Task configuration.
		recess: {
			options: {
				compile: true
			},
			bootstrap: {
				src: ['less/rns-bootstrap.less'],
				dest: 'dist/css/<%= pkg.name %>.css'
			},
			min: {
				options: {
					compress: true
				},
				src: ['less/rns-bootstrap.less'],
				dest: 'dist/css/<%= pkg.name %>.min.css'
			}
		},

		copy: {
			js: {
				expand: true,
				flatten: true,
				src: ['bower_components/bootstrap/dist/js/**'],
				dest: 'dist/js/',
				filter: 'isFile'
			},
			fonts: {
				expand: true,
				flatten: true,
				src: ['fonts/*', 'bower_components/bootstrap/dist/fonts/**'],
				dest: 'dist/fonts/',
				filter: 'isFile'
			},
		},

		// Execute the Recess task when changes happen in the /less directory.
		watch: {
			recess: {
				files: ['less/*.less'],
				tasks: ['recess']
			}
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-recess');

	// JS distribution task.
	grunt.registerTask('dist-js', ['copy:js']);

	// CSS distribution task.
	grunt.registerTask('dist-css', ['recess']);

	// Fonts distribution task.
	grunt.registerTask('dist-fonts', ['copy:fonts']);

	// Full distribution task.
	grunt.registerTask('dist', ['dist-js', 'dist-css', 'dist-fonts']);

	// Default task.
	grunt.registerTask('default', ['dist']);

};
