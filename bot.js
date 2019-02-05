const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");


client.on("ready", () => { //abertura do evento ready
    console.log(`Bot foi iniciado com sucesso, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`); 
    console.log(`logado, com ${client.user.size} usuários.`);
    client.user.setPresence({ game: { name: 'Sabe esse cara da twitch? Foi ele que ajudou o meu DONO a me criar😉', type: 1, url: 'https://www.twitch.tv/player_dbr'} });


}); //fechamento do evento ready




client.on("message", async message => { //abertura do evento message
    if(message.author.bot || message.channel.type === "dm") return;
    if(!message.content.startsWith(config.prefix)) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();
    
   
        try{
    

            let commandFile = require(`./comandos/${comando}.js`)
    //Aqui ele roda o comando
            commandFile.run(client, message, args);
    
   
        } catch (err) {
           console.log(err)
        }

            if (comando === "teste") { //abertura do comando teste
            message.reply(`teste².`)


            }

            if (comando === "cmds") { //fechamento do comando comandos
                     message.reply('eu mandei meus comandos em seu privado! :wink:');
        message.author.send('Atualizando... % [█████-----]\nAtualização cancelada.')
            } //fechamento do comando comandos
                   
            if (comando === "testedeimagem") { //abertura do comando tijolo
            message.reply('https://imgur.com/lNKUNai')
            }//fechamento do comando tijolo
            
            


    }); //fechamento do evento message
    client.on("message", message => {
        if (message.content === `.ticket`) { 
            message.channel.send(new Discord.RichEmbed().setDescription("Sua reação, é o seu ticket.\n\n📌 Para suporte\n\n🏆 Para reportar abuso\n\n🎈 Para Youtuber\n\n💣 para revisão de punição.")).then(async msg => {
                await msg.react("📌")
                await msg.react("🏆") 
                await msg.react("🎈")
                await msg.react("💣") 
                const collector = msg.createReactionCollector((r, u) => (r.emoji.name ===  "📌", "🏆", "🎈", "💣" && u.id === message.author.id), { time: 30000 })
                collector.on("collect", async r => {
                    let title
                    switch (r.emoji.name) {
                        case "📌":
                            title = "Suporte"
                            break
                        case "🏆":
                            title = "Reportar abuso"
                            break
                        case "🎈":
                            title = "YouTuber"
                            break
                        case "💣":
                            title = "Revisão de punição"
                    }
                    let category = message.guild.channels.find(c => c.name === "tickets")
                    if (!category || category.type !== "category")
                        category = await message.guild.createChannel("tickets", "category")
                    let channel = await message.guild.createChannel(`ticket-${title}`, "text", [{
                        id: client.user.id,
                        allowed: ["VIEW_CHANNEL", "MANAGE_CHANNELS"]
                    }, {
                        id: message.author.id,
                        allowed: ["VIEW_CHANNEL", "SEND_MESSAGES"]
                    }, {
                        id: message.guild.roles.find(c => c.name === "Helper").id,
                        allowed: ["VIEW_CHANNEL", "SEND_MESSAGES"]
                    }, {
                        id: message.guild.defaultRole.id,
                        denied: Discord.Permissions.ALL
                    }])
                    await channel.setParent(category.id)   
                })
            })
        }
    });

        client.on('ready', () => {
            console.log(`Bot iniciado com sucesso!`);
            let status = [
                
                { name: 'na RedeFocus', type: 'PLAYING' },
                { name: `os players do RedeFocus`, type: 'WATCHING'}
            ];
            //https://www.twitch.tv/xzirty
            //STREAMING = Transmitindo
            //LISTENING = Ouvindo
            //PLAYING = Jogando
            //WATCHING = Assistindo
            ///Ser pobre é um bug criado por Deus - DBR 2018
        
            function setStatus() {
                let randomStatus = status[Math.floor(Math.random() * status.length)];
                client.user.setPresence({ game: randomStatus });
            }
        
            setStatus();
            setInterval(() => setStatus(), 10000);  //10000 = 10Ms = 10 segundos
        });
        client.on("ready", () => {

           let img = ["https://cdn.discordapp.com/attachments/518487168767885323/541059300223614978/Focus.png" ];
            
              function setImg() {
                  let randomImage = img[Math.floor(Math.random() * img.length)];
                  client.user.setAvatar(randomImage);
              }
            
              setImg();
              setInterval(() => setImg(), 100000000); //30000 = 30s
            });               
client.login(config.token); //bot pega o token na config e faz o login.