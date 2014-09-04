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
          dest: "svgs/",
          ext: ".min.svg"
        }]
      }
    },
    svgstore: {
      options: {
        prefix: "icon-",
        cleanup: true
      },
      default: {
        files: {
          "dest/icons.svg": ["svgs/*.svg"]
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-svgmin");
  grunt.loadNpmTasks("grunt-svgstore");
  grunt.registerTask( "default", ["svgmin", "svgstore"] );
};
