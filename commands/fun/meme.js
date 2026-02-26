const { MessageEmbed } = require("discord.js");
const axios = require("axios");

module.exports = {
  name: "s!meme",
  category: "fun",
  description: "Get a fresh meme from Reddit",
  run: async (client, message, args) => {
    try {
      const res = await axios.get("https://meme-api.com/gimme");
      const json = res.data;

      if (!json || !json.url || json.nsfw) {
        // Retry once if NSFW or invalid
        const res2 = await axios.get("https://meme-api.com/gimme");
        const json2 = res2.data;
        if (!json2 || !json2.url || json2.nsfw) {
          return message.channel.send("❌ Failed to fetch a safe meme. Please try again later.");
        }
        return sendMeme(message, json2);
      }

      sendMeme(message, json);
    } catch (error) {
      console.error("Meme Command Error:", error);
      message.channel.send("❌ An error occurred while fetching the meme.");
    }
  },
};

function sendMeme(message, json) {
  const { MessageEmbed } = require("discord.js");
  const embed = new MessageEmbed()
    .setTitle(json.title)
    .setURL(json.postLink)
    .setImage(json.url)
    .setColor("RANDOM")
    .setFooter(`👍 ${json.ups} | r/${json.subreddit}`);

  message.channel.send(embed);
}

