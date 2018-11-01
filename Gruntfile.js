module.exports = function (grunt) {
    var js_files = ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js'];

    grunt.initConfig({
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    timeout: 10000
                },
                src: ['test/**/*.js']
            }
        },
        watch: {
            files: js_files,
            tasks: ['mochaTest']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('test', ['mochaTest']);
};
