module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			dist:{
				files: {
					'./dest/composite.all.min.js': [
						'./src/js/gsap.min.js',
						'./src/js/splittype-0.3.3.min.js',
						'./src/js/gsap-timeline.js',
						'./src/js/ham-menu.js',
						'./src/js/modal.js',
						'./src/js/see-more.js',
						'./src/js/social-btn.js'
					]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['uglify']);
}