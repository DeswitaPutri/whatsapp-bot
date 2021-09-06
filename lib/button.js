const {
    WAConnection,
    MessageType,
    Presence,
    MessageOptions,
    Mimetype,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    ReconnectMode,
    ProxyAgent,
    GroupSettingChange,
    waChatKey,
    mentionedJid,
    processTime
 } = require('@adiwajshing/baileys');
 
const con = require("../index")

const wa = con.Whatsappdes

async function send3ButtonImg(from, buffer, content, footer, button1, row1, button2, row2, button3, row3, quoted) {
    return await wa.sendMessage(from, {
      contentText: content,
      footerText: footer,
      buttons: [
        { buttonId: row1, buttonText: { displayText: button1 }, type: 1 },
        { buttonId: row2, buttonText: { displayText: button2 }, type: 1 },
        { buttonId: row3, buttonText: { displayText: button3 }, type: 1 }
      ],
      headerType: 4,
      imageMessage: (await wa.prepareMessageMedia(buffer, MessageType.image)).imageMessage
    }, MessageType.buttonsMessage, {
      quoted
    })
  }

module.exports.button = send3ButtonImg