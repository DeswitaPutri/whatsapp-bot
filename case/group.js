const fs = require('fs-extra')
const {prefix} = JSON.parse(fs.readFileSync('./settings/setting.json'))
const welcome = JSON.parse(fs.readFileSync('./settings/welcome.json'))
const welcomee = JSON.parse(fs.readFileSync('./settings/welcomee.json'))
const { fetchJson, getBuffer} = require('../lib/fetcher')

const kapan = [
    '1 Minggu lagi',
    '1 Bulan lagi',
    '1 Tahun lagi',
    '100 tahun lagi',
    'gatau',
    '2030'
    ]

const addteks = require('../lib/welcome')

exports.welcome = (reply,from,q) => { 
    addteks.addteks(from, q , welcomee)
    fs.writeFileSync('./settings/welcomee.json', JSON.stringify(welcomee))
    welcome.push(from)
    fs.writeFileSync('./settings/welcome.json' , JSON.stringify(welcome))
    reply('*WELCOME*\n\nFitur Welcome Member Telah Aktif Di Grup Ini\n\n*Piyobot*')
}

exports.bcgc = (deswita,reply,isQuotedImage,al) => {
    try{
        deswita.updatePresence(from, Presence.composing) 
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(al).replace('quotedM','m')).message.extendedTextMessage.contextInfo : al
            buff = deswita.downloadMediaMessage(encmedia)
            for (let _ of anu) {
            if(/[0-9]+-[0-9]+@g.us/.test(_.jid)){ 
            deswita.sendMessage(_.jid, buff, image, {thumbnail:fs.readFileSync(`./lib/ceweal.jpg`) , caption: `*「 BC GROUP 」*\n\n${body.slice(6)}`})
            }
        }
        } catch {
            for (let _ of anu) { 
                if(/[0-9]+-[0-9]+@g.us/.test(_.jid)){ 
                deswita.sendMessage(value.jid, `*「 BC GROUP 」*\n\n${body.slice(6)}` , text)
                reply('Suksess broadcast group')
            }
        }
        }
}

exports.mutegrup = (args,deswita,from,Presence,al,GroupSettingChange,reply) => {
    if (args[0] == 'on'){
    deswita.updatePresence(from, Presence.composing)
    var nomor = al.participant
    const close = {
    text: `Grup ditutup oleh admin @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *hanya admin* yang dapat mengirim pesan`,
    contextInfo: {
    mentionedJid: [nomor]
    }
    }
    deswita.groupSettingChange (from, GroupSettingChange.messageSend, true);
    reply(close)
    } else if (args[0] == 'off'){
    deswita.updatePresence(from, Presence.composing)
    const open = {
    text: `Grup dibuka oleh admin @${sender.split("@")[0]}\nsekarang *semua peserta* dapat mengirim pesan`,
    contextInfo: {
    mentionedJid: [sender]
    }
    }
    deswita.groupSettingChange (from, GroupSettingChange.messageSend, false)
    deswita.sendMessage(from, open, text, {
    quoted: al
    })
    }
}

exports.apakah = (deswita,from,audio,al) => {
    const answer = ['iya','ngga','mungkin']
    let randomansw = answer[Math.floor(Math.random() * answer.length)]
    buf = fs.readFileSync(`./media/${randomansw}.mp3`)
    deswita.sendMessage(from , buf , audio , {mimetype: 'audio/mp4', quoted: al, ptt:true})
}

exports.add = (args,deswita,from,fakegroup,reply) => {
    try {
    num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
    deswita.groupAdd(from, [num])
    fakegroup(`New Member Nih`)
    } catch (e) {
    console.log('Error :', e)
    reply('Gagal menambahkan target, mungkin karena di private')
    }
}

exports.kick = (al,reply,mentions,deswita,from,text) => {
    if (al.message.extendedTextMessage === undefined || al.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
    mentioned = al.message.extendedTextMessage.contextInfo.mentionedJid
    if (mentioned.length > 1) {
    teks = 'Perintah di terima, mengeluarkan :\n'
    for (let _ of mentioned) {
    teks += `@${_.split('@')[0]}\n`
    }
    mentions(teks, mentioned, true)
    deswita.groupRemove(from, mentioned)
    } else {
    mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
    deswita.groupRemove(from, mentioned)
    deswita.sendMessage(mentioned, 'yahaha Lu kekick😂', text)
    }
}

exports.tagall = (args,isGroup,isGroupAdmins,body,groupMembers,mentions,groupName) => {
    if (isGroup && isGroupAdmins) {
    members_id = []
    teks = (args.length > 1) ? body.slice(8).trim() : ''
    teks += `  Total : ${groupMembers.length}\n`
    for (let mem of groupMembers) {
    teks += `╠➥ @${mem.jid.split('@')[0]}\n`
    members_id.push(mem.jid)
    }
    mentions('╔══✪〘 Mention All 〙✪══\n╠➥'+teks+`╚═〘 ${groupName} 〙`, members_id, true)
    }
}

exports.kapan = (args,deswita,from,text,sender) => {
    const when = args.join(' ')
    const ans = kapan[Math.floor(Math.random() * (kapan.length))]
    if (!when) deswita.sendMessage(from, `⚠️ Format salah! Ketik *${prefix}kapankah* pertanyaanya` , text)
    deswita.sendMessage(from, `Pertanyaan Dari @${sender.split('@')[0]}\nKapan *${when}* \n\nJawaban: ${ans}` , { contextInfo: {"mentionedJid": [from]}})
}

exports.demote = (al,reply,mentions,deswita,from) => {
    if (al.message.extendedTextMessage === undefined || al.message.extendedTextMessage === null) return reply('Tag target yang ingin di demote!')
    mentioned = al.message.extendedTextMessage.contextInfo.mentionedJid
    if (mentioned.length > 1) {
    teks = 'Perintah di terima, menghapus jabatan sebagai admin :\n'
    for (let _ of mentioned) {
    teks += `@${_.split('@')[0]}\n`
    }
    mentions(teks, mentioned, true)
    deswita.groupDemoteAdmin(from, mentioned)
    } else {
    mentions(`Perintah di terima, menghapus jabatan sebagai admin : @${mentioned[0].split('@')[0]}`, mentioned, true)
    deswita.groupDemoteAdmin(from, mentioned)
    }
}

exports.promote = (al,reply,mentions,deswita,from) => {
    if (al.message.extendedTextMessage === undefined || al.message.extendedTextMessage === null) return reply('Tag target yang ingin di demote!')
    mentioned = al.message.extendedTextMessage.contextInfo.mentionedJid
    if (mentioned.length > 1) {
    teks = 'Perintah di terima, menambah jabatan sebagai admin :\n'
    for (let _ of mentioned) {
    teks += `@${_.split('@')[0]}\n`
    }
    mentions(teks, mentioned, true)
    deswita.groupMakeAdmin(from, mentioned)
    } else {
    mentions(`Perintah di terima, menambah jabatan sebagai admin : @${mentioned[0].split('@')[0]}`, mentioned, true)
    deswita.groupMakeAdmin(from, mentioned)
    }
}

