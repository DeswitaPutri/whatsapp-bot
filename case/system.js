const fs = require('fs-extra')

async function sewa (deswita,from,MessageType,al) {
    await deswita.sendMessage(from, {
    contentText: 'List Sewa',
    footerText: 'Created : Piyo',
    buttons: [
    { buttonId: '30Hari', buttonText: { displayText: '30Hari' }, type: 1 },
    { buttonId: '60Hari', buttonText: { displayText: '60Hari' }, type: 1 },
    { buttonId: '90Hari', buttonText: { displayText: '90Hari'}, type: 1 }
    ],
    headerType: 1
    }, MessageType.buttonsMessage, {
    quoted : al
    })
}

async function swimage (isQuotedImage,al,deswita,image,q,from,fakegroup,text) {
    if (isQuotedImage) {
    const swsw = isQuotedImage ? JSON.parse(JSON.stringify(al).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : al
    cihcih = await deswita.downloadMediaMessage(swsw)
    deswita.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
    bur = `Sukses Upload Story Image dengan Caption: ${q}`
    deswita.sendMessage(from, bur, text, { quoted: al })
    } else {
    fakegroup('```Reply gambarnya!```')
    }
}

async function swvideo (isQuotedVideo,al,deswita,video,q,from,fakegroup,text) {
    if (isQuotedVideo) {
    const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(al).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : al
    cihcih = await deswita.downloadMediaMessage(swsw)
    deswita.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
    bur = `Sukses Upload Story Video dengan Caption: ${q}`
    deswita.sendMessage(from, bur, text, { quoted: al })
    } else {
    fakegroup('```Reply videonya!```')
    }
}

async function profile  (deswita,sender,pushname,from,image,al)  {
    try {
    ppimg = await deswita.getProfilePicture(`${sender.split('@')[0]}@c.us`)
    } catch {
    ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
    }
    teks = `‣ *Nama* : ${pushname}
‣ *Nomor* : ${sender.split("@")[0]}
‣ *Link* : wa.me/${sender.split("@")[0]}`
    its = await getBuffer(ppimg)
    deswita.sendMessage(from, its, image, {
    quoted: al, caption: teks
    })
}

module.exports = {
    sewa,
    swimage,
    swvideo,
    profile
}
