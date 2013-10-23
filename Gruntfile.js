
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=80; */

/**
 * @package     neatline
 * @subpackage  word-lines
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-symbolic-link');
  grunt.loadNpmTasks('grunt-bower-task');

  var pkg     = grunt.file.readJSON('package.json')
  var nlPaths = grunt.file.readJSON('../Neatline/paths.json');
  var paths   = grunt.file.readJSON('paths.json');

  grunt.initConfig({

    bower: {
      install: {
        options: {
          copy: false
        }
      }
    },

    symlink: {
      neatline: {
        link: 'Neatline',
        target: '../Neatline',
        options: {
          overwrite: true
        }
      }
    },

    connect: {
      server: {
        options: {
          keepalive: true,
          port: 1337
        }
      }
    },

    clean: {
      payloads: [
        paths.payloads.shared.js,
        paths.payloads.shared.css
      ],
      bower: 'bower_components',
      pkg: 'pkg'
    },

    concat: {
      lines: {
        src: [
          paths.vendor.js.d3,
          paths.src.shared+'/*.js'
        ],
        dest: paths.payloads.shared.js+'/lines-public.js'
      }
    },

    uglify: {
      text: {
        src: '<%= concat.lines.src %>',
        dest: paths.payloads.shared.js+'/lines-public.js'
      }
    },

    stylus: {
      compile: {
        files: {
          'views/shared/css/payloads/lines-public.css':
            paths.stylus.shared+'/*.styl'
        }
      }
    },

    watch: {
      payload: {
        files: [
          '<%= concat.lines.src %>',
          paths.stylus.shared+'/**/*.styl'
        ],
        tasks: 'compile'
      }
    },

    jasmine: {

      options: {
        template: 'Neatline/'+nlPaths.jasmine+'/runner.tmpl',
        helpers: [
          'Neatline/'+nlPaths.vendor.js.jasmine_jquery,
          'Neatline/'+nlPaths.vendor.js.sinon,
          'Neatline/'+nlPaths.jasmine+'/helpers/*.js',
          'Neatline/'+nlPaths.jasmine+'/assertions/*.js'
        ]
      },

      neatline: {
        src: [
          'Neatline/'+nlPaths.payloads.shared.js+'/neatline-public.js',
          paths.payloads.shared.js+'/lines-public.js'
        ],
        options: {
          specs: paths.jasmine+'/unit/**/*.spec.js'
        }
      }

    },

    compress: {

      dist: {
        options: {
          archive: 'pkg/NeatlineWordLines-'+pkg.version+'.zip'
        },
        dest: 'NeatlineText/',
        src: [

          '**',

          '!.git/**',
          '!package.json',
          '!node_modules/**',
          '!bower_components/**',
          '!.grunt/**',
          '!Gruntfile.js',
          '!paths.json',
          '!Neatline/**',
          '!pkg/**',
          '!tests/**'

        ]
      }

    }

  });

  // Build the application.
  grunt.registerTask('build', [
    'clean',
    'symlink',
    'bower',
    'compile'
  ]);

  // Assemble static assets.
  grunt.registerTask('compile', [
    'concat',
    'stylus'
  ]);

  // Assemble/min static assets.
  grunt.registerTask('compile:min', [
    'uglify',
    'stylus'
  ]);

  // Spawn release package.
  grunt.registerTask('package', [
    'uglify',
    'clean:pkg',
    'compress'
  ]);

};
