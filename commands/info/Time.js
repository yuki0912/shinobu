const { MessageEmbed } = require("discord.js");
const moment = require("moment");

module.exports = {
  name: "s!time",
  category: "info",
  description: "Displays the current real-time system and dynamic time",
  run: async (client, message, args) => {
    const now = Date.now();
    const timeEmbed = new MessageEmbed()
      .setTitle("实时监控")
      .setDescription(
        `系统启动时间：<t:${Math.floor(
          now / 1000,
        )}:F>\n当前动态时间：<t:${Math.floor(
          now / 1000,
        )}:T>\n标准时间: \`${moment(now).format("YYYY-MM-DD HH:mm:ss")}\``,
      )
      .setColor(0x0099ff)
      .setTimestamp();

    message.channel.send(timeEmbed);
  },
};
