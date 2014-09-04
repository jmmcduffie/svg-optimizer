module.exports = {
  options: {
    prefix: "icon-",
    cleanup: true
  },
  default: {
    files: {
      "dest/icons.svg": ["svgs/*.svg"]
    }
  }
};
