const axios = require("axios");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "s!punch",
  category: "fun",
  description: "Get Fresh punch Images :D",
  run: async (client, message, args) => {
    try {
      const res = await axios.get("https://nekos.best/api/v2/punch");
      const user = message.mentions.users.first() || message.author;
      const embed = new MessageEmbed()
        .setDescription(`**${message.author.username}** punches **${user.username}**! 👊`)
        .setImage(res.data.results[0].url)
        .setColor("RANDOM");
      message.channel.send(embed);
    } catch (e) {
      message.channel.send("❌ Error fetching image.");
    }
  },
};
