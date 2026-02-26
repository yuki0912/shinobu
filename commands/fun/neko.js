const axios = require("axios");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "s!neko",
  category: "fun",
  description: "Get Fresh Neko Images :D",
  run: async (client, message, args) => {
    try {
      const res = await axios.get("https://nekos.best/api/v2/neko");
      const embed = new MessageEmbed()
        .setTitle("Neko! 🐱")
        .setImage(res.data.results[0].url)
        .setColor("RANDOM")
        .setFooter(`Artist: ${res.data.results[0].artist_name}`);
      message.channel.send(embed);
    } catch (e) {
      message.channel.send("❌ Error fetching neko image.");
    }
  },
};
