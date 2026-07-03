const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 's!volume',
    category: 'music',
    description: 'Set the volume (0-100)',
    aliases: ['vol'],
    run: async (client, message, args) => {
        try {
            const player = client.player;
            const queue = player.getQueue(message.guild);

            if (!queue || !queue.playing) {
                return message.channel.send('❌ There is no song playing!');
            }

            if (!args.length) {
                return message.channel.send(`🔊 Current volume: **${queue.volume}%**`);
            }

            const volume = parseInt(args[0]);

            if (isNaN(volume) || volume < 0 || volume > 100) {
                return message.channel.send('❌ Volume must be a number between 0 and 100!');
            }

            queue.setVolume(volume);

            const embed = new MessageEmbed()
                .setColor('YELLOW')
                .setTitle('🔊 Volume Changed')
                .setDescription(`Volume set to **${volume}%**`)
                .setFooter(`Requested by ${message.author.username}`);
            
            message.channel.send({ embeds: [embed] });
        } catch (error) {
            console.log(error);
            message.channel.send('❌ Error changing volume!');
        }
    }
};
