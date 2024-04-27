const express = require('express');
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');

router.get('/get/crypto', async (req, res) => {
  try {
    // Fetch HTML of the TechCrunch website
    const { data } = await axios.get("https://techcrunch.com/category/cryptocurrency/");
    // Load the HTML data using Cheerio
    const $ = cheerio.load(data);
    //console.log(data);

    // Array to store scraped articles
    const articles = [];

    // Scraping logic
    $(".post-block").each((index, element) => {
        const article = {};
        // Extracting headline and URL
        article.headline = $(element).find(".post-block__title__link").text().trim();
        article.url = $(element).find(".post-block__title__link").attr("href");
        // Extracting news content
        article.content = $(element).find(".post-block__content").text().trim();
        // Extracting author and URL
        article.author = $(element).find(".river-byline__authors a").text().trim();
        article.authorUrl = $(element).find(".river-byline__authors a").attr("href");
        // Extracting image URL
        article.imageUrl = $(element).find("img").attr("src");
        // Pushing article object to the articles array
        articles.push(article);
      });

    res.json(articles); // Send the scraped articles as JSON response
  } catch (error) {
    console.error("Error scraping TechCrunch:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;