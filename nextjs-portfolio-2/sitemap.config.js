// create sitemap

const sitemap = require("nextjs-sitemap-generator"); // Import the package
// const fs = require("fs");
// const BUILD_ID = fs
//   .readFileSync(".next/BUILD_ID")
//   .toString();

/*
Here you is you have to use the sitemap function.
Using it here you are allowing to generate the sitemap file
only once, just when the server starts.
*/

sitemap({
  baseUrl: "https://www.yuuki1036-portfolio.ml",
  pagesDirectory: __dirname + "/.next/server/pages",
  targetDirectory: "public/",
  sitemapFilename: "sitemap.xml",
  ignoredExtensions: ["js", "map"],
  ignoredPaths: ["[fallback]"],
});
