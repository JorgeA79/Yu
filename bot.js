const Discord = require('discord.js');
const client = new Discord.Client();



var prefix = "y!"
var xprefix2 = "Y!"

   
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'ping')) {
	
		 message.channel.send(`Pong! :ping_pong:  \`${Date.now() - message.createdTimestamp} ms\``);
	}
});


client.login(process.env.BOT_TOKEN);

