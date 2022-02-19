const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let moment = require('moment-timezone')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let premium = `
┏━━━❒〔 *Price Bot* 〕❒━⬣
❒ Hai
❒ Ini Price Bot Nya :
❒ Premium 5k/User
❒ Masuk Ke Grup 10k/Bulan
❒ 110Fitur Bot
❒ Fitur RPG On
❒ Nomor Bot : wa.me/6282138746029
❒ Nomor Owner : wa.me/6285158338027
┗━❒ Thank You
`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: premium,
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./media/bank.jpg') }, 
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'DONASI',
               url: 'https://saweria.co/AkaishiMD'
             }

           },
               {
             quickReplyButton: {
               displayText: 'OWNER',
               id: '.owner',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['price']
handler.tags = ['premium']
handler.command = /^(price)$/i

module.exports = handler
