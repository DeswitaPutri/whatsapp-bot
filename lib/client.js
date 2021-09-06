const { MessageType, Mimetype } = require("@adiwajshing/baileys")
const { WAConnection } = require('@adiwajshing/baileys/lib/WAConnection/0.Base')
const ffmpeg = require("fluent-ffmpeg")
const axios = require("axios")
const fs = require("fs")
const { sticker } = require("./sticker.js")

async function sendSticker(deswita,from, attachment, packname, authorname, id) {
let media = await deswita.downloadAndSaveMediaMessage(attachment)
return deswita.sendMessage(from, await sticker(fs.readFileSync(media), false, packname, authorname), MessageType.sticker, { quoted: id, mimetype: Mimetype.webp })
}

module.exports = {
    sendSticker
}