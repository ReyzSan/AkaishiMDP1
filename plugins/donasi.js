const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let tqto = `
┏━━━❒〔 *DONASI* 〕❒━⬣
❒ _SILAHKAN DONASI SEIKHLASNYA_
❒ _SAWERIA :_ https://saweria.co/AkaishiMD
❒ _GOPAY : 08213874629_
❒ _SHOPEEPAY : 082138746029_
❒ _PULSA : 085158338027 [BY.U]_
❒ _110Fitur Bot_
❒ _DONASIMU AKAN SANGAD BERHARGA BAGI OWNER_
┗━❒ *THANK YOU*
`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: tqto,
           locationMessage: { 
           jpegThumbnail: await (await fetch(`https://telegra.ph/file/25db94a3ad0969674c04a.jpg`)).buffer() }, 
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'INFO LAINNYA',
               url: 'https://telegra.ph/file/e2dd13c104964cc21c223.png'
             }

           },
       
               {
             quickReplyButton: {
               displayText: '𝙱𝙰𝙲𝙺 𝚃𝙾 𝙼𝙴𝙽𝚄',
               id: '.menu',
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

handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
