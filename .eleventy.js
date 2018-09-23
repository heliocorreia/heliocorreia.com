module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/structure/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/structure/andrew-neel-308138-unsplash-low.jpg");

  return {
    dir: {
        input: "src/structure",
        output: "docs"
    },
    passthroughFileCopy: true,
    templateFormats: ["njk", "html", "md"]
  }
};
