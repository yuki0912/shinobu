const random = require('something-random-on-discord').Random;
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 's!punch',
	category: 'fun',
	aliases: ['s!Punch','s!punch'],
	description: 'Get Fresh punch Images :D',
	run: async (client, message, args) => {
		let data = await random.getAnimeImgURL('punch');
		message.channel.send(data);
	}
};
