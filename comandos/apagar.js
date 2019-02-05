exports.run = async (client, message, args) => {
    var ids = ["341046919025524746", "2", "3"];
  if (ids.includes (message.author.id)) return message.channel.send("você está proibido de me usar!")
        
  if(message.member.hasPermission("MANAGE_MESSAGES"))     {
  
      const deleteCount = parseInt(args[0], 10);
      if(!deleteCount || deleteCount < 2 || deleteCount > 100)
        return message.reply("você deve fornecer um número entre 2 e 100 para o número de mensagens a serem excluídas");
      
      const fetched = await message.channel.fetchMessages({limit: deleteCount});
      message.channel.bulkDelete(fetched)
        .catch(error => message.reply(`Não foi possível deletar mensagens devido a: ${error}`));
    }}