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
          ext: ".min.svg"
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
          "dest/icons.svg": ["svgs/*.svg"]
        }
      }
    }
  });

  require( "load-grunt-tasks" )( grunt );

  grunt.registerTask( "default", ["svgmin"] );
  grunt.registerTask( "iconset", ["svgmin", "svgstore:iconset"] );
};
