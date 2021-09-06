const fs = require('fs-extra')

async function sender (ReplyFakeStatus,deswita,from,daftar,sender,MessageType,al) {
    ReplyFakeStatus(deswita,from , 'Halo Selamat Datang Di Deswita Whatsapp-BOT\nDisini Banyak Fitur Fitur Menarik Loh' , "Pacarnya Al")
    ReplyFakeStatus(deswita,from, 'Cek Di Bawah\nTinggal Pilih Menu Atau Info Ya Kak' , "Punya Al")
    daftar.push(sender)
    fs.writeFileSync('./settings/daftar.json' , JSON.stringify(daftar))
    await deswita.sendMessage(from, {
    contentText: 'Deswita Whatsapp-Bot',
    footerText: 'Created : Piyo',
    buttons: [
    { buttonId: 'menu', buttonText: { displayText: 'menu' }, type: 1 },
    { buttonId: 'info', buttonText: { displayText: 'info' }, type: 1 }
    ],
    headerType: 1
    }, MessageType.buttonsMessage, {
    quoted : al
    })
}

async function group (ReplyFakeStatus,deswita,from,daftar,sender,MessageType,al) {
    ReplyFakeStatus(deswita,from , 'Halo Selamat Datang Di Deswita Whatsapp-BOT\nDisini Banyak Fitur Fitur Menarik Loh' , "Pacarnya Al")
    ReplyFakeStatus(deswita,from, 'Cek Di Bawah\nTinggal Pilih Menu Atau Info Ya Kak' , "Punya Al")
    daftar.push(from)
    fs.writeFileSync('./settings/daftar.json' , JSON.stringify(daftar))
    daftar.push(sender)
    fs.writeFileSync('./settings/daftar.json' , JSON.stringify(daftar))
    await deswita.sendMessage(from, {
    contentText: 'Deswita Whatsapp-Bot',
    footerText: 'Created : Piyo',
    buttons: [
    { buttonId: 'menu', buttonText: { displayText: 'menu' }, type: 1 },
    { buttonId: 'info', buttonText: { displayText: 'info' }, type: 1 }
    ],
    headerType: 1
    }, MessageType.buttonsMessage, {
    quoted : al
    })
}

module.exports = {
    sender,
    group
}