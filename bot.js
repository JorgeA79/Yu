const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',() => {
	   client.user.setPresence({game: {name: "with Jorge | j.help", type: 0}});
});

var prefix = "j."
var answers = [
  "Did you know that this bot was made because of a friend of Jorge called Luca because he told him he was a bot and that gave him an idea.",
  "Did you know that my favorite Pokemon is Zoroark",
  "Did you know that Goku has perfomed the Kamehameha a total of 97 times throughout all three series.",
  "Did you know that Bulma goes through 17 different hairstyles throughout the series.",
  "Did you know that Android 17's real name is Lapis.",
  "Did you know that Android 18's real name is Lazuli.",
  "Did you know that In Pokemon stadium, it was revealed how Doduo can learn the move fly. Apparently it just runs really fast and the running motion gives it the power of flight! It just floats there, running in place...",
  "Did you know that Genesect is a very futuristic Pokemon, and Kabutops is an ancient fossil. However, there are rumors that Genesect is actually a Kabutops that's been modified. Although the two don't share any of the same types and use barely any of the same attacks, there is a definite resemblence, especially when you compare Genesect's head to Kabuto.",
  "Did you know that Azurill is the only Pokemon that can change it's gender when evolving. When evolving into Marill, Azurill has a 1 in 4 chance of switching genders. Fans have debated whether this is because some amphibians are able to change gender, or that it may have embryonic qualities that mean it hasn't fully formed into a gender yet.",	
  "Did you know that Although Munna wasn't introduced until generation 5, it is actually referenced in the very first game! A woman standing outside of Rock Tunnel in Pokemon Red and Blue dreams about a chunky pink Pokemon with a floral pattern. Clearly the game makers had Munna in mind even way back then.",
  "Did you know that The fight between Goku and Frieza took up a total of three and a half hours of screen time, making it the longest fight in anime history.",
  "Did you know that Goku's mother is a Saiyan known as Gine."
]

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'ping')) {
	
		 message.channel.send(`Pong! :ping_pong:  \`${Date.now() - message.createdTimestamp} ms\``);
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'hello')) {
	
		 message.channel.send(`Hello ${message.author.username}! :wave:`);
		
	}
});



client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'dbs')) {
	
		 message.channel.send(`Oof the previous episode of Dragon Ball Super was :ok_hand:`);
		
	}
});

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'xd')) {
	
		 message.channel.send(`XD`);
	}
});



client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'join')) {
	
		 message.channel.send(`Hey you can join Mach Mirror server in here :wink: \nhttps://discord.gg/98XKyK5`);
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'ssj')) {
	
	
const embed = new Discord.RichEmbed()

  .setTitle("AAAAAAAAAAAAAAAAAAAAAAAAAH")

  .setColor(0xF7FE2E)
  .setImage("https://media.giphy.com/media/3o6fJ1DYT1w2mvZyE0/giphy.gif")


  message.channel.send({embed});
	}
});

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'ssgss')) {
	
	
const embed = new Discord.RichEmbed()

  .setTitle("AAAAH KAAAAIOKEEN")

  .setColor(0x01DFD7)
  .setImage("https://media.giphy.com/media/3osBLqfVbQI0fx0oLe/giphy.gif")


  message.channel.send({embed});
		
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'wait')) {
		        message.channel.send(`Wait`);
          message.channel.send(`Wait`);
		message.channel.send(`Wait`);
		
	}
});

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'fact')) {
	var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
		message.channel.send(randomAnswer);
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'invite')) {
	
		 message.channel.send(`Hey i cant join your server you know because i am a bot XD, but you can add me to your server in here:\nhttps://discordapp.com/api/oauth2/authorize?client_id=372862753154793472&scope=bot&permissions=1`);
	}
});


client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'help')) {
	
		 message.author.send(`${message.author.username} you need a little help with the commands, there you go:\n **-j.hello**\n **-j.dbs**\n **-j.ssj**\n **-j.ssgss**\n **-j.dex help**\n **-j.xd**\n **-j.fact**\n **-j.wait**\n **-j.ping**\n **-j.join**\n **-j.invite**`);
	 message.channel.send(`${message.author.username} message sent :mailbox:`)
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'dex help')) {
	
		 message.author.send(`${message.author.username} you need a little help with dex commands, there you go:\n **-j.dex (Mach Mirror Fakemon)**\n **-j.dex list**`);
	 message.channel.send(`${message.author.username} message sent :mailbox:`)
	}
});
//Mach Mirror Pokedex
//List
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'dex list')) {
	
		 message.channel.send(`${message.author.username} here's the dex. \n**-Forshadic #1**\n **-Psychind #2**\n **-Foligsnow #3**\n**-Kascal #4**\n **-Skaloogan #5**\n **-Kingasrush #6**\n**-Frigipup #26**\n**-Gargale #38**\n**-Pterark #41**\n **-Pteravolt #42**\n**-Parttiblow #61**\n **-Lattishine #62**\n**-Abandound #63**\n **-Mutterfall #64**\n**-Toxitrik #75**\n**-Ghoulantern #251**`);
	}
});
//1
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'dex forshadic')) {
	
		const embed = new Discord.RichEmbed()
  .setTitle("Forshadic #1")
  .setAuthor("Artie", "https://cdn.discordapp.com/avatars/310089392230498315/483a341d8a0fd9eef1908870ba922f40.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x7401DF)
  .setDescription("This Pokemon loves to play and make stuff out of snow, it uses it's psychic abilities to attack any trespassers who try to harm them and will do anything to protect it's trainer.")
  .setImage("https://cdn.discordapp.com/attachments/372491249221107714/380474283324866561/unknown.png")
.addField("Types:",
    "Psychic/Ice.")
		.setFooter("Description by TSComega.")
  .setTimestamp()
  message.channel.send({embed});
	}
});
//2
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'dex psychind')) {
	
		const embed = new Discord.RichEmbed()
  .setTitle("Psychind #2")
  .setAuthor("Artie", "https://cdn.discordapp.com/avatars/310089392230498315/483a341d8a0fd9eef1908870ba922f40.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x7401DF)
  .setDescription("This is the evolution of forshadic, this pokemon loves to make snowballs and to throw them at people, it uses it's psychic abilities to protect it's trainer and makes snowmen to attack pokemon that attack it")
  .setImage("https://cdn.discordapp.com/attachments/372491249221107714/381264180134543372/unknown.png")
.addField("Types:",
    "Psychic/Ice.")
		.setFooter("Description by TSComega.")
  .setTimestamp()
  message.channel.send({embed});
	}
});
//3
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'dex foligsnow')) {
	
		const embed = new Discord.RichEmbed()
  .setTitle("Foligsnow #3")
  .setAuthor("Jorge Adolfo", "https://cdn.discordapp.com/avatars/304357538101723137/699fc601494f622dce54c01bf3359ad3.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x7401DF)
  .setDescription("Foligsnow are known for living in icy caves and high atop mountains. It's fur acts as an insulator so that it can protect itself from the harsh and cold Mirren winds.")
  .setImage("https://cdn.discordapp.com/attachments/351931134764122113/381268709978931200/unknown.png")
.addField("Types:",
    "Psychic/Ice.")
		.setFooter("Description by Splitzblue.")
  .setTimestamp()
  message.channel.send({embed});
	}
});
//4
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'dex kascal')) {
	
		const embed = new Discord.RichEmbed()
  .setTitle("Kascal #4")
  .setAuthor("Gaming U-Septor", "https://cdn.discordapp.com/avatars/272583532562612226/f74812b9672d780bf598c5d47b3c2f7e.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x7401DF)
  .setDescription("The Thief Pokemon, this is one of the cutest pokemon in the mirren region and it uses it's cuteness to decieve people and steal. it is known to steal items, money and sometimes even trainer cards! and it sometimes even steals from its own trainer!")
  .setImage("https://cdn.discordapp.com/attachments/372491249221107714/380477611618467852/unknown.png")
.addField("Types:",
    "Fighting.")
		.setFooter("Description by TSComega.")
  .setTimestamp()
  message.channel.send({embed});
	}
});
//5
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'dex skaloogan')) {
	
		const embed = new Discord.RichEmbed()
  .setTitle("Skaloogan #5")
  .setAuthor("Gaming U-Septor", "https://cdn.discordapp.com/avatars/272583532562612226/f74812b9672d780bf598c5d47b3c2f7e.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x7401DF)
  .setDescription("This pokemon is known for it's fighting abilities, it can punch a tree in half with just one punch, they compete with one another for dominance.")
  .setImage("https://cdn.discordapp.com/attachments/372491249221107714/382732193929363457/unknown.png")
.addField("Types:",
    "Fighting.")
		.setFooter("Description by some people.")
  .setTimestamp()
  message.channel.send({embed});
	}
});
//26
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'dex frigipup')) {
	
		const embed = new Discord.RichEmbed()
  .setTitle("Frigipup #26")
  .setAuthor("ChaoticK-9", "https://cdn.discordapp.com/avatars/318162956510560257/a26b3e8586cfdff7dae799a193f37100.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x7401DF)
  .setDescription("Frigipup doesn't go near humans. Last contact was with its former owner, and it has iced it's vein and emotions went numb, it stays in harsh freezing climates near mountains.")
  .setImage("https://cdn.discordapp.com/attachments/372491249221107714/385920864631128064/unknown.png")
.addField("Types:",
    "Ice/Dark.")
		.setFooter("Description by ChaoticK-9.")
  .setTimestamp()
  message.channel.send({embed});
	}
});
//38
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'dex gargale')) {
	
		const embed = new Discord.RichEmbed()
  .setTitle("Gargale #38")
  .setAuthor("ChaoticK-9", "https://cdn.discordapp.com/avatars/318162956510560257/a26b3e8586cfdff7dae799a193f37100.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x7401DF)
  .setDescription("During the night it watches over the people in the city on a high ledge of a building scaring away the ghosts and spirits. During the day it goes to sleep sitting still not moving an inch acting like a statue.")
  .setImage("https://cdn.discordapp.com/attachments/372491249221107714/385919379969277954/unknown.png")
.addField("Types:",
    "Rock/Dragon.")
		.setFooter("Description by ChaoticK-9.")
  .setTimestamp()
  message.channel.send({embed});
	}
});
//41
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'dex pterark')) {
	
		const embed = new Discord.RichEmbed()
  .setTitle("Pterark #41")
  .setAuthor("Gaming U-Septor", "https://cdn.discordapp.com/avatars/272583532562612226/f74812b9672d780bf598c5d47b3c2f7e.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x7401DF)
  .setDescription("Its eyes are too sensitives to sunlight, thats why it spends most of its time in its nest. Its wings arent developed enough for it to fly, and its legs are too short for it to run.")
  .setImage("https://cdn.discordapp.com/attachments/372491249221107714/380930829872005131/unknown.png")
.addField("Types:",
    "Flying/Rock.")
		.setFooter("Description by Gaming U-Septor.")
  .setTimestamp()
  message.channel.send({embed});
	}
});
//42
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'dex pteravolt')) {
	
		const embed = new Discord.RichEmbed()
  .setTitle("Pteravolt #42")
  .setAuthor("Gaming U-Septor", "https://cdn.discordapp.com/avatars/272583532562612226/f74812b9672d780bf598c5d47b3c2f7e.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x7401DF)
  .setDescription("Although naturally passive, it will do anything to protect its nest. Scientists speculate that it was able to manipulate nearby clouds and use them to create rain and massive thunderstorms.")
  .setImage("https://cdn.discordapp.com/attachments/372491249221107714/380930922398089226/unknown.png")
.addField("Types:",
    "Electric/Rock.")
		.setFooter("Description by Gaming U-Septor.")
  .setTimestamp()
  message.channel.send({embed});
	}
});

//61
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'dex parttiblow')) {
	
		const embed = new Discord.RichEmbed()
  .setTitle("Parttiblow #61")
  .setAuthor("Gaming U-Septor", "https://cdn.discordapp.com/avatars/272583532562612226/f74812b9672d780bf598c5d47b3c2f7e.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x7401DF)
  .setDescription("The party bomb pokemon, the color of the lower half of its body indicates when it will explode, whoever, this Pokemons explosions are harmless, so it has a hard time defending itself.")
  .setImage("https://cdn.discordapp.com/attachments/372491249221107714/381575732075167754/unknown.png")
.addField("Types:",
    "Dark/Fairy.")
		.setFooter("Description by Gaming U-Septor.")
  .setTimestamp()
  message.channel.send({embed});
	}
});
//62
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'dex lattishine')) {
	
		const embed = new Discord.RichEmbed()
  .setTitle("Lattishine #62")
  .setAuthor("Gaming U-Septor", "https://cdn.discordapp.com/avatars/272583532562612226/f74812b9672d780bf598c5d47b3c2f7e.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x7401DF)
  .setDescription("The Late Night Pokemon, these pokemon are nocturnal, they hunt using the lights on it's torso to attract other pokemon. They're also known to be very loud.")
  .setImage("https://cdn.discordapp.com/attachments/372491249221107714/381669313347584000/unknown.png")
.addField("Types:",
    "Dark/Fairy.")
		.setFooter("Description by Gaming U-Septor.")
  .setTimestamp()
  message.channel.send({embed});
	}
});
//63
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'dex abandound')) {
	
		const embed = new Discord.RichEmbed()
  .setTitle("Abandound #63")
  .setAuthor("ChaoticK-9", "https://cdn.discordapp.com/avatars/318162956510560257/a26b3e8586cfdff7dae799a193f37100.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x7401DF)
  .setDescription("Abandoned by its former trainer, this Pokemon spends its days searching out for their true companion. It's said that a bond formed with Abandound is a bond that will never end.")
  .setImage("https://cdn.discordapp.com/attachments/372491249221107714/385921094273597460/unknown.png")
.addField("Types:",
    "Dark.")
		.setFooter("Description by ChaoticK-9.")
  .setTimestamp()
  message.channel.send({embed});
	}
});
//64
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'dex mutterfall')) {
	
		const embed = new Discord.RichEmbed()
  .setTitle("Mutterfall #64")
  .setAuthor("ChaoticK-9", "https://cdn.discordapp.com/avatars/318162956510560257/a26b3e8586cfdff7dae799a193f37100.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x7401DF)
  .setDescription("Mutterfall evolved from Abandound by being introduced to a Water Stone. It is know that Mutterfall will often not battle when told to by its trainer.")
  .setImage("https://cdn.discordapp.com/attachments/372491249221107714/385919309060374528/unknown.png")
.addField("Types:",
    "Water/Dark.")
		.setFooter("Description by ChaoticK-9.")
  .setTimestamp()
  message.channel.send({embed});
	}
});
//75
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'dex toxitrik')) {
	
		const embed = new Discord.RichEmbed()
  .setTitle("Toxitrik #75")
  .setAuthor("ArceusTube", "https://cdn.discordapp.com/avatars/350101239364714508/14cf7783293a82caf8655b81bf60add5.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x7401DF)
  .setDescription("Toxitrik the snake pokemon, this pokemon is known for being able to make whirlwinds of fire with its tail and at the same time paralyze its enemies with its electric body.")
  .setImage("https://cdn.discordapp.com/attachments/372491249221107714/381583800108580865/unknown.png")
.addField("Types:",
    "Electric/Poison.")
		.setFooter("Description by Jorge Adolfo. Art by Alice.")
  .setTimestamp()
  message.channel.send({embed});
	}
});
//251
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'dex ghoulantern')) {
	
		const embed = new Discord.RichEmbed()
  .setTitle("Ghoulantern #251")
  .setAuthor("ArceusTube", "https://cdn.discordapp.com/avatars/350101239364714508/14cf7783293a82caf8655b81bf60add5.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x7401DF)
  .setDescription("This Pokemon is known to be a ghostly spirit that guides other ghost Pokemon and humans. It is rumored that Ghoulanterns are supposedly dead souls of the Firebreathers that roamed the Mirren region.")
  .setImage("https://cdn.discordapp.com/attachments/372491249221107714/380470852073816065/unknown.png")
.addField("Types:",
    "Ghost/Fire.")
		.setFooter("Description by SplitzBlue.")
  .setTimestamp()
  message.channel.send({embed});
	}
});

client.login(process.env.BOT_TOKEN);

