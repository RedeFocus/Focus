exports.run = (client, message, args) => {
    var ids = ["341046919025524746", "2", "3"];
if (ids.includes (message.author.id)) return message.channel.send("você está proibido de usar esse comando")
    const Discord = require("discord.js");
    const moment = require('moment')
    moment.locale('pt-br')

    var razao = args.slice(1).join(" ")
    var membro = message.mentions.members.first() || client.users.get(args[0]);
    if (!message.member.hasPermissions("ADMINISTRATOR")) return message.channel.send(`Erro! | ${message.author} Você não pode fazer isso, pois você não tem permissões. `)

    if (!membro) return message.reply("Mencione o membro que deseja dar warn!")
    if (!membro.bannable) return message.reply("Eu não posso punir este usuário, meu cargo é menor que o do usuário a ser punido!")

    message.delete()

    if (razao.length < 1) return message.reply("Adicione um motivo válido!")

    const warnembed = new Discord.RichEmbed()

        .setThumbnail(membro.user.avatarURL)
        .setAuthor(`${message.guild.name}`, message.guild.iconURL)
        .addField("⚙ | Punição", `Aviso`)
        .addField("🛡 | Aplicador", `${message.author.username}`)
        .addField("⚒ | Usuário", `${membro}`)
        .addField("📑 | Motivo", razao)
        .setTimestamp(new Date())
        message.channel.send(" ", warnembed)
        let role = message.guild.roles.get('541076075279548417');
        membro.addRole(role.id);
}