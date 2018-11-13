const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',() => {
	   client.user.setPresence({game: {name: " | ", type: 0}});
});

var prefix = "y!"
var xprefix2 = "Y!"
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix||xprefix+ 'ping')) {
	
		 message.channel.send(`Pong! :ping_pong:  \`${Date.now() - message.createdTimestamp} ms\``);
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix||xprefix + 'ping2')) {
	const embed = new Discord.RichEmbed()
  .setTitle("Roaring Arcanine")
  .setAuthor("Selobgo", "https://cdn.discordapp.com/avatars/178135668755660800/983c6252aabb009d8b7507e8f1e14185.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0xFFA500)
  .setDescription("Hello everyone! Roaring Arcanine here. I am mainly a let's play Pokemon channel. I'm pretty chill and always up for challenges.")
  .setThumbnail("https://cdn.discordapp.com/attachments/361503144615870464/365396318459396098/LYLw4kBe.jpg")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://www.youtube.com/channel/UC-lJne5adEP6NNnV8zF4ycg")
  

  message.channel.send({embed});
	}
});
client.login(process.env.BOT_TOKEN);

