/**
 * scraper-typescript.ts
 * To run this script, copy and paste `npx ts-node scraper-typescript.ts` in the terminal
 */

import * as cheerio from "cheerio";

(async () => {
  const url = "https://www.example.com";
  const response = await fetch(url);

  const $ = cheerio.load(await response.text());
  console.log($.html());

  const title = $("h1").text();
  const text = $("p").text();
  const link = $("a").attr("href");

  console.log(title);
  console.log(text);
  console.log(link);
})();
