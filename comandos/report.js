const Discord = require("discord.js");
module.exports.run = async(client, message, args) => {
    var ids = ["341046919025524746", "2", "3"];
if (ids.includes (message.author.id)) return message.channel.send("você está proibido de me usar!")
if(message.author.bot) return;
      
    message.delete()

        await message.author.createDM();
        message.author.send(`Olá, ${message.author.username}.
Você está prestes a criar uma denúncia!
                
Enfim, diga-nos qual membro do servidor você deseja reportar. (Use Nick#0001)`);
        var tazer = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 1000 * 50, max: 1 });
        tazer.on('collect', r=> {
            let player = r.content;
            message.author.send("Por qual motivo esse membro deveria ser punido?");
          
            var tazer1 = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 1000 * 50, max: 1 });
        tazer1.on('collect', r=> {
            let outracoisa = r.content;
            message.author.send("Mande provas, caso não há, sua denúncia será negada.");
            var tazer2 = message.author.dmChannel.createMessageCollector(b=>b.author.id == message.author.id,  { time: 1000 * 60, max: 1 });
            tazer2.on('collect', r2=> {
                let motivo = r2.content;
                let usuarioicone = message.author.displayAvatarURL;
                const reportplayer = new Discord.RichEmbed()
                .setDescription(`**Autor:** ${message.author.username}
**Acusado:** ${player}
**Motivo:** ${outracoisa}
**Provas:** ${motivo}`)
                .setThumbnail(usuarioicone)
                .setColor("RGB=#00FFFF")
                let canal = client.channels.get("541074289642962975").send(reportplayer);
                message.author.send("✅ **Seu report foi enviado com sucesso!**")
            })
        })
    })
}