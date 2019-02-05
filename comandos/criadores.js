const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    var ids = ["341046919025524746", "2", "3"];
if (ids.includes (message.author.id)) return message.channel.send("você está proibido de me usar!")
message.delete();

const embed = new Discord.RichEmbed()

.setColor('#36393e')
.setDescription('**Olá! Eu fui criado por duas pessoas!**')
.addField('Configurador geral:', `PedroMzika#8279\n\n`)
.addField('Configurador auxiliar:', `Draacoun#4453\n\n`)
.addField('Última atualização:', `2 fev, às 00:15`)
.setTimestamp(new Date())
message.channel.send('', embed)

}