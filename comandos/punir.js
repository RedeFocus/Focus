const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("você não tem permissão para banir membros.");
    if (!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) return null;
  
    let user = message.mentions.users.first();
    let reason = message.content.split(" ").slice(2).join(" ");
    if (message.mentions.users.size < 1) return message.reply("mencione algum usuário para que ele possa ser punido.");

    if (message.author.id === user.id) return message.reply("eu não posso te punir, haha.")
    message.reply(`você está prestes a punir ${user}. Reaja em :hammer_pick: caso queira efetuar um **banimento**, ou em :hammer: caso queira efetuar uma **expulsão**.`).then(msg => {
        msg.react('⚒').then(r=>{
        msg.react('🔨')
        })
        const sure = (reaction, user) => reaction.emoji.name === `⚒` && user.id === message.author.id;
        const sure2 = (reaction, user) => reaction.emoji.name === `🔨` && user.id === message.author.id;
        const r1 = msg.createReactionCollector(sure, {time: 60000 });
        const r2 = msg.createReactionCollector(sure2, {time: 60000 });

    r1.on('collect', r => {
        r.remove(message.author.id);
        message.guild.member(user).ban(reason);
        message.reply(`você acabou de banir ${user} (\`${user.tag}\` - \`${user.id}\`).`);
    });

    r2.on('collect', r => {
        r.remove(message.author.id);
        message.guild.member(user).kick(reason);
        message.reply(`você acabou de kickar ${user} (\`${user.tag}\` - \`${user.id}\`).`);
    });
    })
}
module.exports.help = {
    name: "punir"
}