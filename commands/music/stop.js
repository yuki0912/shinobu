const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 's!stop',
    category: 'music',
    description: 'Stop the music and leave voice channel',
    run: async (client, message, args) => {
        try {
            const player = client.player;
            const queue = player.getQueue(message.guild);

            if (!queue || !queue.playing) {
                return message.channel.send('❌ There is no song playing!');
            }

            queue.destroy();

            const embed = new MessageEmbed()
                .setColor('RED')
                .setTitle('⏹️ Stopped!')
                .setDescription('The music has been stopped and I left the voice channel.')
                .setFooter(`Requested by ${message.author.username}`);
            
            message.channel.send({ embeds: [embed] });
        } catch (error) {
            console.log(error);
            message.channel.send('❌ Error stopping music!');
        }
    }
};
