const { Collection, Client, Discord } = require("discord.js");
const fs = require("fs");
const express = require("express");
const { Player } = require("discord-player");
const app = express();
const port = 2000;

// Web 伺服器設定（供 Render 保活使用）
app.get("/", (req, res) => res.send("Bot is running!"));
app.listen(port, "0.0.0.0", () => {
    console.log(`Web server running on port ${port}`);
});

// 初始化 Discord Client
const client = new Client({
    disableEveryone: true,
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    // 注意：如果是 discord.js v13/v14，此處需要額外填寫 intents 
    // 這裡保留你原本的 v12 寫法以確保舊專案相容性
});

const player = new Player(client);
client.player = player;

// 音樂播放器事件 (Player events)
client.player.on("trackStart", (message, track) => {
    message.channel.send(`🎶 Now playing: **${track.title}**`);
});

client.player.on("error", (error, message) => {
    console.log(`Music Error: ${error}`);
    message.channel.send(`❌ Music Error: ${error}`);
});

client.player.on("playlistAdd", (message, queue, playlist) => {
    message.channel.send(
        `✅ Playlist **${playlist.title}** with **${playlist.tracks.length}** songs has been added to the queue!`,
    );
});

// 載入設定檔
const config = require("./config.json");
const prefix = config.prefix;

// 修正重點：Token 雙重保險機制
// 優先使用 Render 後台的環境變數 DISCORD_TOKEN，如果沒有，則使用 config.json 裡的 token
const token = process.env.DISCORD_TOKEN || config.token;

client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");

// 載入指令處理器
["command"].forEach((handler) => {
    require(`./handlers/${handler}`)(client);
});

// 機器人上線事件
client.on("ready", () => {
    client.user.setPresence({
        activity: {
            name: `💻s!help | ${client.guilds.cache.size} Server`,
            type: "LISTENING", // PLAYING, WATCHING, STREAMING, LISTENING
        },
        status: "online", // dnd, idle, invisible, online
    });
    console.log(`${client.user.username} ✅ 上線成功！`);
});

// 訊息事件處理
client.on("message", async (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.guild) return;
    if (!message.member)
        message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length == 0) return;
    
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) command.run(client, message, args);
});

// 使用剛剛處理好的 token 變數登入
if (!token) {
    console.error("❌ 錯誤：找不到 Discord Bot Token！請確認 Render 環境變數或 config.json 有正確設定。");
    process.exit(1);
}

client.login(token);
