const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "p!"
var answers = 
    			["It is certain",
			"It is decidedly so",
			"Without a doubt",
			"Yes, definitely",
			"You may rely on it",
			"As I see it, yes",
			"Most likely",
			"Outlook good",
			"Yes",
			"Signs point to yes",
			"Reply hazy try again",
			"Ask again later",
			"Better not tell you now",
			"Cannot predict now",
			"Concentrate and ask again",
			"Don't count on it",
			"My reply is no",
			"My sources say no",
			"Outlook not so good",
			"Very doubtful"];
var hugifs =  [
	 "https://media.tenor.com/images/b6d0903e0d54e05bb993f2eb78b39778/tenor.gif",
 "https://i.pinimg.com/originals/85/dc/ef/85dcef131af84b515106955e142df54e.gif",
 "https://i.imgur.com/r9aU2xv.gif",
 "https://i.pinimg.com/originals/4d/89/d7/4d89d7f963b41a416ec8a55230dab31b.gif"];

var slapgifs =  [
	 "https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif?itemid=10426943",
 "https://media.giphy.com/media/Zau0yrl17uzdK/giphy.gif",
 "https://i.pinimg.com/originals/4e/9e/a1/4e9ea150354ad3159339b202cbc6cad9.gif"];


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

client.on('message', message => {
	if (message.author === client.user) return;
	 if(message.channel.type === 'dm') return;
	if (message.content.startsWith(prefix + 'slap')) {
		
		
  	let member = message.mentions.members.first();
		 if(!member) 
		return message.reply("Try mentioning the person");	
		
		var selectSlap = slapgifs[Math.floor(Math.random() * slapgifs.length)];
		  message.channel.send(`**${message.author.username}** slapped **${member.user.username}**`);
		const embed = new Discord.RichEmbed()

  .setImage(selectSlap)
   message.channel.send({embed});
	}
});

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'help')) {
		
	const embed = new Discord.RichEmbed()
  .setTitle("Pixel's Commands")
   .setColor(0xC76CF5)
  .setDescription("Here you can find the main commands of the bot so you wont get confused")
.setThumbnail("https://cdn.discordapp.com/avatars/370483123848478721/2a073955469d1aefda2ce240ab5d2948.png?size=128")

  .addField("Main Commands",
    "\`help\`,\`ping\`,\`server\`")

  .addField("Fun Commands", "\`8ball\`, \`flip\` \`head\` or \`tail\`")
.addField("Roleplay Commands", "\`hug\`,\`slap\`")
  message.author.send({embed});
message.channel.send(`${message.author.username} i sent you a message that will help you a bit :mailbox_with_mail:`)
		
	}
});


client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + '8ball')) {
	var r8ballAnswer = answers[Math.floor(Math.random() * answers.length)];
		message.channel.send(r8ballAnswer);
	}
});

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'flip head')) {
		
	 	var result = Math.floor((Math.random() * 2) + 1);
    	if (result == 1) {
    		const embed = new Discord.RichEmbed()

  .setTitle("Head")

  .setColor(0xC76CF5)
  .setImage("https://68.media.tumblr.com/4c0e4d4f186433f84ad11109f0b619b2/tumblr_np6oolnI2c1td4t64o1_500.gif")


  message.channel.send({embed});
		 message.channel.send(`You got me <:wholesomekermit:705354033799364628>`);
    	} else if (result == 2) {
    		const embed = new Discord.RichEmbed()

  .setTitle("Tail")

  .setColor(0xC76CF5)
  .setImage("https://68.media.tumblr.com/4c0e4d4f186433f84ad11109f0b619b2/tumblr_np6oolnI2c1td4t64o1_500.gif")
		

  message.channel.send({embed});
		 message.channel.send(`WOOOOOOOOOOO <:wholesomekermit:705354033799364628>`);
    	}
		
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'flip tail')) {
		
	 	var result = Math.floor((Math.random() * 2) + 1);
    	if (result == 1) {
    		const embed = new Discord.RichEmbed()

  .setTitle("Head")

  .setColor(0xC76CF5)
  .setImage("https://68.media.tumblr.com/4c0e4d4f186433f84ad11109f0b619b2/tumblr_np6oolnI2c1td4t64o1_500.gif")


  message.channel.send({embed});
		 message.channel.send(`WOOOOOOOOOOO <:wholesomekermit:705354033799364628> `);
    	} else if (result == 2) {
    		const embed = new Discord.RichEmbed()

  .setTitle("Tail")

  .setColor(0xC76CF5)
  .setImage("https://68.media.tumblr.com/4c0e4d4f186433f84ad11109f0b619b2/tumblr_np6oolnI2c1td4t64o1_500.gif")
		

  message.channel.send({embed});
		
		 message.channel.send(`You got me <:wholesomekermit:705354033799364628> `);
    	}
		
	}
});

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'server')) {

		const embed = new Discord.RichEmbed()
  .setTitle("> Click to join our server <")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0xC76CF5) 
  
  .setThumbnail("https://cdn.discordapp.com/avatars/370483123848478721/2a073955469d1aefda2ce240ab5d2948.png?size=128")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.gg/gwFXT55")
  

  message.channel.send({embed});
		
		 
	}
		
});

client.login(process.env.BOT_TOKEN);

