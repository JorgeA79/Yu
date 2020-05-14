const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "p!"

 
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'ping')) {
	
		 message.channel.send(`Pong! :ping_pong:  \`${Date.now() - message.createdTimestamp} ms\``);
	}
});

client.on('guildMemberAdd', member => {
    member.guild.channels.get('694781619306889266').send('Welcome TO THE SERVER! **' + member.user.username + '**,  Go introduce yourself in <#696322478922006588>! If you want, you can go to <#709716878263845218> and to join a club, go to <#709718943660769310>'); 
});
  

client.login(process.env.BOT_TOKEN);

