const linebot = require('linebot');
const express = require('express');

const bot = linebot({
  channelId: "1655374650",
  channelSecret: "1e31253d07c70dc59ac60bc26a6852de",
  channelAccessToken: "o/4RsANb1yTD8uirke9trCbgZB1v3UZ2yTNf0q9pgdnQqv7Fr39Chv7UiYJoe7GjDcXUVP7QDW3dqsS1RAQvfonXVCtVUBnnHSBZ4yALtxS6J9Pj36byklkSXJyVURc0kvJeUfriU5Eamp0QJdbgHQdB04t89/1O/w1cDnyilFU="
});

const app = express()

const linebotParser = bot.parser()

// app.get('/', (req, res) => {
//     res.send('Hai ini linebot Warung Makan - SGPC');
//     res.send(200);
// });

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
    else if(event.message.text.indexOf("Anda telah memesan makanan") !== -1) {
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