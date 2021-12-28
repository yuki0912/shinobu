const random = require('something-random-on-discord').Random;
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'punch',
	category: 'fun',
	aliases: ['Punch','punch'],
	description: 'Get Fresh punch Images :D',
	run: async (client, message, args) => {
		let data = await random.getAnimeImgURL('punch');
		message.channel.send(data);
	}
};
