const Discord = require('discord.js');
const ms = require("ms");

module.exports.run = async (client,  message, args) => {
  var ids = ["341046919025524746", "2", "3"];
if (ids.includes (message.author.id)) return message.channel.send("você está proibido de me usar!")
      

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
 if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.reply("você não tem permissão para utilizar este comando. Acha que algo está errado? Digite p-ticket.");
  if(!tomute) return message.reply("Não foi possivel encontrar o usuário.");
  let muterole = message.guild.roles.find(role => role.name === 'Muted');

  if(!muterole){
    try{
      muterole = await message.guild.createRole({ 
        name: "Silenciado ",
        color: "RANDOM",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("especifique um tempo! (d = dias, s = segundos, m = minutos, h = horas).");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> foi mutado por ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> foi desmutado.`);
  }, ms(mutetime));
  
}
module.exports.help = {
    name: "silenciar"
}