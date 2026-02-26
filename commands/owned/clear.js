module.exports = {
        name: "s!clear",
        aliases: ["purge"],
        run: async (client, message, args) => {
                const amount = parseInt(args[0]);
                if (isNaN(amount) || amount < 1 || amount > 100)
                        return message.channel
                                .send(
                                        "Please specify a number of messages between 1 and 100.",
                                )
                                .then((m) => m.delete({ timeout: 5000 }));

                await message.channel
                        .bulkDelete(amount + 1, true)
                        .catch((err) => {
                                console.error(err);
                                return message.channel.send(
                                        "There was an error trying to prune messages in this channel!",
                                );
                        });

                message.channel
                        .send(`✅ Successfully deleted **${amount}** messages!`)
                        .then((m) => m.delete({ timeout: 2000 }));
        },
};
