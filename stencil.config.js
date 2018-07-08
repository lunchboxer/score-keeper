const sass = require("@stencil/sass");

exports.config = {
  plugins: [sass()],
  bundles: [
    {
      components: [
        "my-main",
        "my-groups",
        "my-student-list",
        "my-student-row",
        "my-star"
      ]
    }
  ]
};

exports.devServer = {
  root: "www",
  watchGlob: "**/**"
};
