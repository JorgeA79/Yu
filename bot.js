const Discord = require('discord.js');
const client = new Discord.Client();



client.on('guildMemberAdd', member => {
    member.guild.channels.get('694781619306889266').send('Welcome TO THE SERVER! **' + member.user.username + '**,  Go introduce yourself in #introductions! If you want, you can go to #club-info and to join a club, go to #club-applications'); 
});
  

client.login(process.env.BOT_TOKEN);

