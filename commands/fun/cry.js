const axios = require("axios");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "s!cry",
  category: "fun",
  description: "Get Fresh cry Images :D",
  run: async (client, message, args) => {
    try {
      const res = await axios.get("https://nekos.best/api/v2/cry");
      const embed = new MessageEmbed()
        .setDescription(`**${message.author.username}** is crying! 😭`)
        .setImage(res.data.results[0].url)
        .setColor("RANDOM");
      message.channel.send(embed);
    } catch (e) {
      message.channel.send("❌ Error fetching image.");
    }
  },
};
