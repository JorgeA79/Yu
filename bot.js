const Discord = require('discord.js');
const client = new Discord.Client();		    


 //youtubeKey: 'AIzaSyDCk1-hiwXO7PhT27ZuBRXIfhrrIHuhAOc'



client.on('ready',() => {
	
	   client.user.setPresence({game: {name: "in JAPAN | p!help", type: 0}});
 	  
});

var prefix = "p!"; 
var triviadb = [
	        "What does NIA love?",
	        "Who did NIA met first?",
	        "Newest of the group?",
	     	"How is NIAS memory?",
		"What colour does PIXEL like?",
		"Who does PIXEL love?",
		"Who is the middle child in JAPAN?",
		"Who is the eldest in JAPAN?",
		"Who is the youngest in JAPAN?",
		"What does Nia crave 24/7?",
		"What’s Nia favorite drink?",
		"What happened when Nia is bored?",
		"What is NIA's ethnicity?",
		"What is AMMY/ALDRIN/PIXEL's ethnicity?",
		"What is JELLY's ETHNICITY?",
		"Where does JELLY live?",
		"Where did PIXEL meet NIA?"
	];
////////////////////////////////////////////////TRIVIA//////////////////////////////////////
var trivianswersdb = [
	        "PEANUT BUTTER",
	        "AMMY",
	        "PIXEL",
		"TERRIBLE",
		"PURPLE",
		"MARYLL",
		"PIXEL",
		"JELLY",
		"NIA",
		"NOODLES",
		"MILK",
		"BE PRODUCTIVE",
		"INDONESIAN",
		"FILIPINO",
		"CHINESE",
		"AUSTRALIA",
		"MINECRAFT VIDEO"];



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

////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////GIFS////////////////////////////////////////////////////////

var hugifs =  [
	 "https://media.tenor.com/images/b6d0903e0d54e05bb993f2eb78b39778/tenor.gif",
 	 "https://i.pinimg.com/originals/85/dc/ef/85dcef131af84b515106955e142df54e.gif",
 	 "https://i.imgur.com/r9aU2xv.gif",
 	 "https://i.pinimg.com/originals/4d/89/d7/4d89d7f963b41a416ec8a55230dab31b.gif"];

var slapgifs =  [
	 "https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif?itemid=10426943",
 	 "https://media.giphy.com/media/Zau0yrl17uzdK/giphy.gif",
 	 "https://i.pinimg.com/originals/4e/9e/a1/4e9ea150354ad3159339b202cbc6cad9.gif"];

var kissgifs =  [
	 "https://media1.tenor.com/images/ef4a0bcb6e42189dc12ee55e0d479c54/tenor.gif?itemid=12143127",
 	 "https://i.pinimg.com/originals/32/d4/f0/32d4f0642ebb373e3eb072b2b91e6064.gif",
 	 "https://media.tenor.com/images/de18124ebe36764446ee2dbf54a672bf/tenor.gif",
 	 "https://lifeo.ru/wp-content/uploads/gif-anime-kisses-26.gif"];

var Shotgif =  [
	 "https://media1.tenor.com/images/cfb7817a23645120d4baba2dcb9205e0/tenor.gif?itemid=5710495",
 	 "https://media1.tenor.com/images/a2df704431ed61fdddc4eb1a06bb728e/tenor.gif?itemid=5359419",
 	 "https://i.pinimg.com/originals/a0/f0/c3/a0f0c3dacfa0962425f34e011d30e9be.gif",
 	 "https://media1.tenor.com/images/63c0c6b632dfffd790b60a87007f1bfd/tenor.gif?itemid=11514589"];

var protectgifs =  [
	 "https://i.gifer.com/3cA2.gif",
 	 "https://memestatic.fjcdn.com/gifs/Protect+the+cinnamon+roll_7619b3_6456881.gif"];

var wavegifs =  [
	 "https://media.tenor.com/images/6870fd2f3f7be6bc6f08083a899c4889/tenor.gif",
 	 "https://media.giphy.com/media/VUC9YdLSnKuJy/giphy.gif",
 	 "https://vignette.wikia.nocookie.net/project-pokemon/images/a/a5/Wave_by_monnick-d7i06j2.gif/revision/latest?cb=20170428155931",
 	 "https://media.tenor.com/images/4b9b18c7aae49b108354a22a0cb615fc/tenor.gif"];



////////////////////////////////////////////////////////////////////////////////////////////////////////////


client.on('guildMemberAdd', member => {
    member.guild.channels.get('694781619306889266').send('WELCOME TO THE SERVER!! **' + member.user.username + '**,  Go introduce yourself in <#696322478922006588>! If you want, you can go to <#709716878263845218> and to join a club, go to <#709718943660769310>'); 
});
 
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'ping')) {
	
		 message.channel.send(`Pong! :ping_pong:  \`${Date.now() - message.createdTimestamp} ms\``);
	}
});

////////////////////////////////////////////////////////ROLEPLAY/////////////////////////////////////////////////////////
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
   .setColor(0xC76CF5)
  .setImage(selecthugGif)
   message.channel.send({embed});
	}
});

////////////////////////////////////////////////////////ROLEPLAY/////////////////////////////////////////////////////////

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
   .setColor(0xC76CF5)
  .setImage(selectSlap)
   message.channel.send({embed});
	}
});

////////////////////////////////////////////////////////ROLEPLAY/////////////////////////////////////////////////////////

client.on('message', message => {
	if (message.author === client.user) return;
	 if(message.channel.type === 'dm') return;
	if (message.content.startsWith(prefix + 'kiss')) {
		
		
  	let member = message.mentions.members.first();
		 if(!member) 
		return message.reply("Try mentioning the person");	
		
		var selectSlap1 = kissgifs[Math.floor(Math.random() * kissgifs.length)];
		  message.channel.send(`**${message.author.username}** kissed **${member.user.username}**`);
		const embed = new Discord.RichEmbed()
   .setColor(0xC76CF5)
  .setImage(selectSlap1)
   message.channel.send({embed});
	}
});

////////////////////////////////////////////////////////ROLEPLAY/////////////////////////////////////////////////////////

client.on('message', message => {
	if (message.author === client.user) return;
	 if(message.channel.type === 'dm') return;
	if (message.content.startsWith(prefix + 'shoot')) {
		
		
  	let member = message.mentions.members.first();
		 if(!member) 
		return message.reply("Try mentioning the person");	
		
		var selectSlap2 = Shotgif [Math.floor(Math.random() * Shotgif.length)];
		  message.channel.send(`**${message.author.username}** shot **${member.user.username}**`);
		const embed = new Discord.RichEmbed()
   .setColor(0xC76CF5)
  .setImage(selectSlap2)
   message.channel.send({embed});
	}
});

////////////////////////////////////////////////////////ROLEPLAY/////////////////////////////////////////////////////////

client.on('message', message => {
	if (message.author === client.user) return;
	 if(message.channel.type === 'dm') return;
	if (message.content.startsWith(prefix + 'protect')) {
		
		
  	let member = message.mentions.members.first();
		 if(!member) 
		return message.reply("Try mentioning the person");	
		
		var selectSlap3 = protectgifs[Math.floor(Math.random() * protectgifs.length)];
		  message.channel.send(`**${message.author.username}** protected **${member.user.username}**`);
		const embed = new Discord.RichEmbed()
   .setColor(0xC76CF5)
  .setImage(selectSlap3)
   message.channel.send({embed});
	}
});

////////////////////////////////////////////////////////ROLEPLAY/////////////////////////////////////////////////////////

client.on('message', message => {
	if (message.author === client.user) return;
	 if(message.channel.type === 'dm') return;
	if (message.content.startsWith(prefix + 'wave')) {
		
		
  	let member = message.mentions.members.first();
		 if(!member) 
		return message.reply("Try mentioning the person");	
		
		var selectSlap4 = wavegifs[Math.floor(Math.random() * wavegifs.length)];
		  message.channel.send(`**${message.author.username}** waved at **${member.user.username}**`);
		const embed = new Discord.RichEmbed()
   .setColor(0xC76CF5)
  .setImage(selectSlap4)
   message.channel.send({embed});
	}
});

////////////////////////////////////////////////////////ROLEPLAY/////////////////////////////////////////////////////////

client.on('message', message => {
	if (message.author === client.user) return;
	 if(message.channel.type === 'dm') return;
	if (message.content.startsWith(prefix + 'date')) {
		
		
  	let member = message.mentions.members.first();
		 if(!member) 
		return message.reply("Try mentioning the person");	
		
		  message.channel.send(`**${message.author.username}** dated **${member.user.username}**`);
		const embed = new Discord.RichEmbed()
   .setColor(0xC76CF5)
  .setImage("https://media1.tenor.com/images/e0f8ceace2d85bcdc36fe6d74f649b9f/tenor.gif?itemid=13300869")
   message.channel.send({embed});
	}
});

////////////////////////////////////////////////////////ROLEPLAY/////////////////////////////////////////////////////////


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
.addField("Roleplay Commands", "\`hug\`,\`slap\`,\`kiss\`,\`shoot\`,\`protect\`,\`wave\`,\`date\`")
  message.channel.send({embed});

		
	}
});

var say = "say";
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + say)) {
		const args = message.content.slice(prefix.length).split(/ +/);
		args.shift();
		message.delete(1000);
		if (!args.length) {
		return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
	}
		
	const embed = new Discord.RichEmbed()
   .setColor(0xC76CF5)
  .setDescription(`${args}`)
  message.channel.send({embed});

		
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




///////////////////////////////////////////////////////////////////////


client.on('message', message => {
	if (message.author === client.user) return;
	 if(message.channel.type === 'dm') return;
	if (message.content.startsWith(prefix + 'trivia')) {

		var selectkilldb = [Math.floor(Math.random() * triviadb.length)];
        var qselx = triviadb[selectkilldb]
	 var ansselx = trivianswersdb[selectkilldb]
        
		 
	message.channel.send(qselx + '\`15 seconds to answer, make sure to write all with CAPS\`')
.then(() => {
		
  message.channel.awaitMessages(response => response.content === ansselx, {
    max: 1,
    time: 15000,
    errors: ['time'],
  })
  .then((collected) => {
	  const embed = new Discord.RichEmbed()

  .setTitle("You are right")

  .setColor(0x7AFFA8)
  .setImage("https://media1.tenor.com/images/1a3e80b2d8b08e39d3a7355dc23a88db/tenor.gif?itemid=15018586")


  message.channel.send({embed});

    })
    .catch(() => {
	
	  var answersW = [
	 	 "Aww Rip",
		 "F",
		 "You lose qwp"
	  ];
	  
	  var selectanswerW = [Math.floor(Math.random() * answersW.length)];  
	  var qselW = answersW[selectanswerW]
      message.channel.send(qselW +' <:oop:694790743121985597>  ');
  
    });
});
	
	}
});



////////////////////////////////Music

client.on('message', message => {
  if (message.content === '!play') {
    // Note that this will only work if the message was sent in a guild
    // and the author is actually in a voice channel.
    // You might want to check for all that stuff first
    const channel = message.member.voiceChannel;

    channel.join()
    .then(connection => console.log('Connected!'))
    .catch(console.error);
  }
});





















client.login(process.env.BOT_TOKEN);

