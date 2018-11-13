const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',() => {
	   client.user.setPresence({game: {name: " | ", type: 0}});
});

var prefix = "y!"
var xprefix2 = "Y!"
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix || xprefix + 'ping')) {
	
		 message.channel.send(`Pong! :ping_pong:  \`${Date.now() - message.createdTimestamp} ms\``);
	}
});

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix || xprefix + 'ping2')) {
	const embed = new Discord.RichEmbed()
  .setAuthor("Yu", "https://cdn.discordapp.com/avatars/511749990167740440/9de74058348dc21c675c49721702b3b0.jpg?size=1024")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0xFFBAFA)
  .setDescription("xd")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  

  message.channel.send({embed});
	}
});
client.login(process.env.BOT_TOKEN);

