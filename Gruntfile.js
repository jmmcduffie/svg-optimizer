module.exports = function( grunt ) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    svgmin: {
      options: {
        plugins: [{
          "removeViewBox": false
        }, {
          "convertStyleToAttrs": true
        }]
      },
      default: {
        files: [{
          expand: true,
          cwd: "src",
          src: ["**/*.svg"],
          dest: "dest/svg/",
          ext: ".svg"
        }]
      }
    },
    svgstore: {
      options: {
        prefix: "icon-",
        cleanup: true
      },
      iconset: {
        files: {
          "dest/iconset.svg": ["dest/svg/iconset/*.svg"]
        }
      }
    },
    clean: {
      dest: ["dest/svg/*", "!dest/svg/.keep", "dest/png/*", "!dest/png/.keep"]
    }
  });

  require( "load-grunt-tasks" )( grunt );

  grunt.registerTask( "default", ["svgmin"] );
  grunt.registerTask( "iconset", ["svgmin", "svgstore:iconset"] );
};
