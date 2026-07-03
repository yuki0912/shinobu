const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 's!play',
    category: 'music',
    description: 'Play a song from YouTube or Spotify',
    aliases: ['p'],
    run: async (client, message, args) => {
        try {
            if (!args.length) {
                return message.channel.send('❌ Please provide a song name or link!');
            }

            if (!message.member.voice.channel) {
                return message.channel.send('❌ You must be in a voice channel to play music!');
            }

            const searchString = args.join(' ');
            const player = client.player;

            // Create or get existing queue
            const queue = player.createQueue(message.guild, {
                metadata: message.channel
            });

            try {
                if (!queue.connection)
                    await queue.connect(message.member.voice.channel);
            } catch {
                await player.deleteQueue(message.guild.id);
                return message.channel.send('❌ Could not join voice channel!');
            }

            const song = await player.search(searchString, {
                requestedBy: message.author
            }).catch(() => null);

            if (!song || !song.tracks.length)
                return message.channel.send('❌ No results found!');

            if (song.playlist) {
                queue.addTracks(song.tracks);
                const embed = new MessageEmbed()
                    .setColor('GREEN')
                    .setTitle('✅ Playlist Added!')
                    .setDescription(`**${song.playlist.title}** (${song.tracks.length} songs)`)
                    .setFooter(`Requested by ${message.author.username}`);
                message.channel.send({ embeds: [embed] });
            } else {
                queue.addTrack(song.tracks[0]);
                const embed = new MessageEmbed()
                    .setColor('GREEN')
                    .setTitle('✅ Song Added!')
                    .setDescription(`**${song.tracks[0].title}**`)
                    .setThumbnail(song.tracks[0].thumbnail)
                    .setFooter(`Requested by ${message.author.username}`);
                message.channel.send({ embeds: [embed] });
            }

            if (!queue.playing) await queue.play();
        } catch (error) {
            console.log(error);
            message.channel.send('❌ Error playing song!');
        }
    }
};
