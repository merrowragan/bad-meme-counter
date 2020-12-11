const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client(); 
var count = 0;

client.on('ready', () => {
  console.log('this bot is online');
})

client.on('message', msg => {
  
  if(msg.content.toLowerCase() === "pog".toLowerCase() || msg.content === "pogchamp".toLowerCase() || msg.content === "poggers".toLowerCase() || msg.content === "pogslide".toLowerCase() || msg.content === ":pog:".toLowerCase() ){
    count = count + 1;
    msg.reply("You disappoint me.  " + count);  
  }
  else if(msg.content.includes("pog") || msg.content.includes("POG")){
    msg.reply("YOU'RE ON THIN ICE, BUDDY")
  }
})

client.login(config.token); 