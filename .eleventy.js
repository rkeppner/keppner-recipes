module.exports = (eleventyConfig) => {
  // Copy the "assets" directory to the compiled "_site" folder.
  eleventyConfig.addPassthroughCopy('assets');

  eleventyConfig.addFilter('date_to_xmlschema', dateToXmlSchema);

  eleventyConfig.addPlugin(require('eleventy-plugin-link_to'));

  return {
    dir: {
      input: './',
      output: './_site',
      layouts: './_layouts',
    },
    templateFormats: [
      'html',
      'liquid',
      'md',
      'njk',
    ],
  };
};

function dateToXmlSchema(value) {
  return new Date(value).toISOString();
}
