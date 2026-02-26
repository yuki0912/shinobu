const { client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "s!report",
  /**
   *@param {Client} client
   *@param {Message} message
   *@param {String[]} args
   */
  run: async (client, message, args) => {
    const owner = await client.users
      .fetch(process.env.OWNER_ID)
      .catch(() => null);
    if (!owner)
      return message.reply("Could not find the bot owner to send the report.");

    const query = args.join(" ");
    if (!query)
      return message.reply("Please provide a description of the bug/issue.");

    const reportEmbed = new MessageEmbed()
      .setTitle("New Report!")
      .setColor("#ff0000")
      .addField("Author", `${message.author.tag} (${message.author.id})`, true)
      .addField("Guild", `${message.guild.name} (${message.guild.id})`, true)
      .addField("Report Content", query)
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp();

    try {
      await owner.send(reportEmbed);
      message.reply("✅ Your report has been sent to the developer!");
    } catch (err) {
      message.reply(
        "❌ I couldn't DM the developer. They might have DMs disabled.",
      );
    }
  },
};
