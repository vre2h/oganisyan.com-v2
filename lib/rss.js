import fs from "fs";
import { Feed } from "feed";

export const generateRSSFeed = (articles) => {
  const baseUrl = "https://oganisyan.com";
  const author = {
    name: "Oganisyan Vrezh",
    email: "vrezh@oganisyan.com",
    link: "https://twitter.com/vre2h",
  };

  // Construct a new Feed object
  const feed = new Feed({
    title: "Articles by Oganisyan Vrezh",
    description:
      "I’m a software engineer, lecturer, and rebel. Here I write about education, management, and the art of non-conformity.",
    id: baseUrl,
    link: baseUrl,
    language: "en",
    feedLinks: {
      rss2: `${baseUrl}/rss.xml`,
    },
    author,
  });

  // Add each article to the feed
  articles.forEach((post) => {
    const { content, slug, date, description, title } = post;
    const url = `${baseUrl}/blog/${slug}`;

    feed.addItem({
      title,
      id: url,
      link: url,
      description,
      content,
      author: [author],
      date: new Date(date),
    });
  });

  // Write the RSS output to a public file, making it
  // accessible at oganisyan.com/rss.xml
  fs.writeFileSync("public/rss.xml", feed.rss2());
};
