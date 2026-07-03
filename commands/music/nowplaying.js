const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 's!nowplaying',
    category: 'music',
    description: 'Show the currently playing song',
    aliases: ['np'],
    run: async (client, message, args) => {
        try {
            const player = client.player;
            const queue = player.getQueue(message.guild);

            if (!queue || !queue.playing) {
                return message.channel.send('❌ There is no song playing!');
            }

            const track = queue.current;
            const progress = queue.getPlayerProgress();

            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle('🎶 Now Playing')
                .setDescription(`**${track.title}**`)
                .setThumbnail(track.thumbnail)
                .addField('Duration', `\`${progress.progress}% [${progress.currentTime}/${track.duration}]\``, true)
                .addField('Author', track.author || 'Unknown', true)
                .addField('Requested by', `<@${track.requestedBy.id}>`, true)
                .setFooter(`Queue: ${queue.tracks.length} songs waiting`);
            
            message.channel.send({ embeds: [embed] });
        } catch (error) {
            console.log(error);
            message.channel.send('❌ Error showing now playing!');
        }
    }
};
