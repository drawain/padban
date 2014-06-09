'use strict';

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    require(require('es6ify').runtime);

    grunt.initConfig({

        yeoman: {
            app: require('./bower.json').appPath || 'client',
            dist: 'dist'
        },

        watch: {
            styles: {
                files: ['<%= yeoman.app %>/styles/*.less'],
                tasks: ['newer:less:styles']
            },
            lessBootstrap: {
                files: ['<%= yeoman.app %>/styles/Bootstrap/*.less'],
                tasks: ['less:bootstrap']
            }
        },

        less: {
            styles: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= yeoman.app %>/styles',
                        src: ['*.less'],
                        dest: '<%= yeoman.app %>/styles',
                        ext: '.css'
                    }
                ]
            },
            bootstrap: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= yeoman.app %>/styles/Bootstrap',
                        src: ['bootstrap.less'],
                        dest: '<%= yeoman.app %>/styles/Bootstrap',
                        ext: '.css'
                    }
                ]
            }
        },

        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: '<%= yeoman.dist %>',
                flow: {
                    html: {
                        steps: {
                            js: ['concat', 'uglifyjs'],
                            css: ['cssmin']
                        },
                        post: {}
                    }
                }
            }
        },

        usemin: {
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
            options: {
                assetsDirs: ['<%= yeoman.dist %>']
            }
        },

        mkdir: {
            mongo: {
                options: {
                    create: ['data/db']
                },
            },
        },

        concurrent: {
            dev: {
                tasks: [
                    'mongo',
                    'server',
                    'client',
                    'test',
                    'watch'
                ],

                options: {
                    logConcurrentOutput: true
                }
            }
        },

        // Test settings
        karma: {
            unit: {
                configFile: 'test/client/karma.conf.js'
            }
        },

        // Use nodemon to run server in debug mode with an initial breakpoint
        nodemon: {
            server: {
                script: 'server/app.js',
                options: {
                    watch: ['server/**/*', 'lib/**/*', 'test/mocks/**/*'],
                    nodeArgs: ['--harmony'],
                    env: {
                        PORT: process.env.PORT || 3000
                    },
                    callback: function (nodemon) {
                        nodemon.on('log', function (event) {
                            console.log(event.colour);
                        });
                    }
                }
            }
        },

        browserify: {
            client: {
                src: ['<%= yeoman.app %>/scripts/**/*.js'],
                dest: '<%= yeoman.app %>/dist/app.js',
                options: {
                    bundleOptions: {
                        debug: true
                    },
                    external: ['<%= yeoman.app %>/bower_components/angular/angular', 'angular'],
                    transform: ['es6ify', 'browserify-shim', 'partialify', 'debowerify'],
                    watch: true,
                    keepAlive: true
                }
            }
        },

        run: {
            mongo: {
                wait: true,
                cmd: 'mongod',
                args: [
                    '--dbpath',
                    'data/db'
                ]

            }
        }

    });

    grunt.registerTask('default', [
        'less:styles',
        'concurrent:dev'
    ]);

    grunt.registerTask('server', ['nodemon']);
    grunt.registerTask('mongo', ['mkdir:mongo', 'run:mongo']);
    grunt.registerTask('test', ['karma']);
    grunt.registerTask('client', ['browserify:client']);
};