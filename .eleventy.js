module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/structure/img");
  eleventyConfig.addPassthroughCopy("src/structure/favicon.ico");

  return {
    dir: {
        input: "src/structure",
        output: "docs"
    },
    passthroughFileCopy: true,
    templateFormats: ["njk", "html", "md"]
  }
};
