module.exports = ctx => ({
  map: ctx.options.map,
  plugins: {
    stylelint: {
      extends: "stylelint-config-sass-guidelines",
      rules: {
        "selector-max-id": 1,
        "max-nesting-depth": [3, {}]
      }
    },
    "@csstools/postcss-sass": {
      outputStyle: 'expanded'
    },
    "postcss-cssnext": {},
    cssnano: ctx.env === "production" ? {
      autoprefixer: false
    } : false
  }
});
