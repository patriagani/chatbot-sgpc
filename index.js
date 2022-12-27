const linebot = require('linebot');
const express = require('express');
require('dotenv').config()

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});

console.log(bot)

const app = express()

const linebotParser = bot.parser()

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Hai ini linebot Warung Makan - SGPC"
    });
});

app.post('/webhook', linebotParser)

bot.on('message', function (event) {
    if(event.message.text == "Pesan" || event.message.text == "pesan") {
        let message = `Hai, kamu dapat memesan melalui aplikasi berikut\n\nhttps://liff.line.me/1655320023-ZmWOJDBP\n\nTerima kasih :)`
        event.reply(message).then(function (data) {
            console.log('Success', data)
        }).catch(function (error) {
            console.log('Error', error)
        })
    }
    else if(event.message.text.indexOf("Saya ingin memesan makanan") !== -1) {
        let message = `Hai, pesanan telah kami terima harap menunggu yaa, akan segera kami antar secepatnya\n\nKamu dapat memesan menu tambahan lagi melalui aplikasi berikut\n\nhttps://liff.line.me/1655320023-ZmWOJDBP\n\nTerima kasih :)`
        event.reply(message).then(function (data) {
            console.log('Success', data)
        }).catch(function (error) {
            console.log('Error', error)
        })
    }
    else {
        let message = `Hai, selamat datang di Warung Makan - SGPC :)\nAda yang bisa kami bantu?\n\nSilahkan ketik "pesan" atau "Pesan" untuk mendapatkan link pemesanan makanan.\nTerima kasih :)`
        event.reply(message).then(function (data) {
            console.log('Success', data)
        }).catch(function (error) {
            console.log('Error', error)
        })
    }
})

app.listen(process.env.PORT || 3000, function () {
    console.log('LineBot is running.')
})