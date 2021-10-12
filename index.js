require('dotenv').config();
const Discord = require('discord.js');
const axios = require('axios');
const client = new Discord.Client();

let interval;
client.on('message', async msg => {
  switch (msg.content) {
    case "hi":
      msg.reply("Hello! Welcome to the Khush's Server, hope you have a good time here!");
      break;
    case "!meme":
      msg.channel.send("Here's your meme!");
      const img = await getMeme();
      msg.channel.send(img);
      break;
    case "!eye":
      msg.channel.send("You are now subscribed to eye reminders.");
       interval = setInterval (function () {
        msg.channel.send("Please take an eye break now!")
        .catch(console.error); 
      }, 3600000); //every hour
      break;
    case "!stop":
      msg.channel.send("I have stopped eye reminders.");
      clearInterval(interval);
      break;
  }
});

async function getMeme(){
  const res = await axios.get('https://meme-api.herokuapp.com/gimme');
  console.log(res.data.preview[0])
  return res.data.preview[0];
}

//must be last line
client.login("ODk1NTgxMjYwODc1OTU2MjM0.YV6pCw.LUx-J6wZ4b4Nja6EzDHfRuXgyJ4");