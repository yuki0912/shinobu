const axios = require("axios");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "s!hug",
  category: "fun",
  description: "Get Fresh hug Images :D",
  run: async (client, message, args) => {
    try {
      const res = await axios.get("https://nekos.best/api/v2/hug");
      const user = message.mentions.users.first() || message.author;
      const embed = new MessageEmbed()
        .setDescription(`**${message.author.username}** hugs **${user.username}**! 🤗`)
        .setImage(res.data.results[0].url)
        .setColor("RANDOM");
      message.channel.send(embed);
    } catch (e) {
      message.channel.send("❌ Error fetching image.");
    }
  },
};
