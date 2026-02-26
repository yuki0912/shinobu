const axios = require("axios");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "s!waifu",
  category: "fun",
  aliases: ["waifu"],
  description: "Get Fresh waifu Images :D",
  run: async (client, message, args) => {
    try {
      const res = await axios.get("https://nekos.best/api/v2/waifu");
      const embed = new MessageEmbed()
        .setTitle("Waifu! ✨")
        .setImage(res.data.results[0].url)
        .setColor("RANDOM")
        .setFooter(`Artist: ${res.data.results[0].artist_name}`);
      message.channel.send(embed);
    } catch (e) {
      message.channel.send("❌ Error fetching waifu image.");
    }
  },
};
