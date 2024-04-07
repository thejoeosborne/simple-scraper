/**
 * scraper-javascript.js
 * To run this script, copy and paste `node scraper-javascript.js` in the terminal
 */

const cheerio = require('cheerio');

(async () => {
  const url = 'https://www.example.com';
  const response = await fetch(url);

  const $ = cheerio.load(await response.text());
  console.log($.html());

  const title = $('h1').text();
  const text = $('p').text();
  const link = $('a').attr('href');

  console.log(title);
  console.log(text);
  console.log(link);
})();