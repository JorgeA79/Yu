const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "p!"
var hugifs =  [
	 "https://media.tenor.com/images/b6d0903e0d54e05bb993f2eb78b39778/tenor.gif",
 "https://i.pinimg.com/originals/85/dc/ef/85dcef131af84b515106955e142df54e.gif",
 "https://i.imgur.com/r9aU2xv.gif",
 "https://i.pinimg.com/originals/4d/89/d7/4d89d7f963b41a416ec8a55230dab31b.gif"];




client.on('guildMemberAdd', member => {
    member.guild.channels.get('694781619306889266').send('WELCOME TO THE SERVER!! **' + member.user.username + '**,  Go introduce yourself in <#696322478922006588>! If you want, you can go to <#709716878263845218> and to join a club, go to <#709718943660769310>'); 
});
 
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'ping')) {
	
		 message.channel.send(`Pong! :ping_pong:  \`${Date.now() - message.createdTimestamp} ms\``);
	}
});


client.on('message', message => {
	if (message.author === client.user) return;
	 if(message.channel.type === 'dm') return;
	if (message.content.startsWith(prefix + 'hug')) {
		
		
  	let member = message.mentions.members.first();
		 if(!member) 
		return message.reply("Try mentioning the person");	
		
		var selecthugGif = hugifs[Math.floor(Math.random() * hugifs.length)];
		  message.channel.send(`**${message.author.username}** hugged **${member.user.username}**`);
		const embed = new Discord.RichEmbed()

  .setImage(selecthugGif)
   message.channel.send({embed});
	}
});



client.login(process.env.BOT_TOKEN);

