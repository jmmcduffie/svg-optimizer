module.exports = {
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
      cwd: "./src",
      src: ["**/*.svg"],
      dest: "svgs/",
      ext: ".min.svg"
    }]
  }
};
