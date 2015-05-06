module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: ['<%= pkg.variable.build_root %>'],
		uglify: {
			options: {
				mangle : true
			},
			dev : {
				options: {
					sourceMap : true,
					sourceMapIncludeSources : true,
					compress: {
						global_defs: {
							"DEBUG": true
						},
						drop_console: false
					}
				},
				files: [{
					expand: true,
					src:  '*.js',
					dest: '<%= pkg.variable.build_js %>',
					cwd:  '<%= pkg.variable.src_js %>',
					ext: '.min.js',
					extDot: 'first'
				}]
			}
		},
		cssmin: {
			target : {
				files: [{
					expand: true,
					cwd: '<%= pkg.variable.src_css %>',
					src: ['*.css'],
					dest: '<%= pkg.variable.build_css %>',
					ext: '.min.css'
				}]
			}
		},
		copy: {
			main: {
				files: [{
					expand: true,
					cwd: '<%= pkg.variable.src_root %>',
					src: ['**'],
					dest: '<%= pkg.variable.build_root %>'
				}]
			}
		},
		shell: {
			node : {
				command: 'node <%= pkg.variable.build_root %>/server.js'
			}
		}
	});

	// Load the plugin that provides tasks.
	grunt.loadNpmTasks('grunt-contrib-clean');
	//grunt.loadNpmTasks('grunt-contrib-uglify');
	//grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-shell');

	grunt.registerTask('build_dev', ['clean','copy','shell:node']);
};