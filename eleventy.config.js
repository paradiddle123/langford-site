import { HtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  // Rewrites absolute links (/css/..., /#writing) to honor --pathprefix,
  // so the site works at https://<user>.github.io/<repo>/ too
  eleventyConfig.addPlugin(HtmlBasePlugin);

  // Copy CSS and images straight through to the built site
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/fonts": "fonts" });
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });

  // "June 1, 2026" style dates
  eleventyConfig.addFilter("readableDate", (d) =>
    new Date(d).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    })
  );

  // Current year for the footer
  eleventyConfig.addShortcode("year", () => String(new Date().getFullYear()));

  // ISO dates for <time datetime> and the RSS feed
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString());
  eleventyConfig.addFilter("isoDateShort", (d) =>
    new Date(d).toISOString().slice(0, 10)
  );

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
}
