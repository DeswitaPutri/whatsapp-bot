const fetch = require('node-fetch')


exports.getBase64 = getBase64 = async(url) => {
    const response = await fetch(url, { headers: { 'User-Agent': 'okhttp/4.5.0' } });
    if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);
    const buffer = await response.buffer();
    const videoBase64 = `data:${response.headers.get('content-type')};base64,` + buffer.toString('base64');
    if (buffer)
        return videoBase64;
};

exports.getBuffer = getBuffer = async(url) => {
    const res = await fetch(url, { headers: { 'User-Agent': 'okhttp/4.5.0' }, method: 'GET' })
    if (!res.ok) throw "Error while fetching data"
    const buff = await res.buffer()
    if (buff) return buff
        //if (buff)
        //    return { type: res.headers.get('content-type'), result: buff }
}

exports.fetchJson = fetchJson = (url, options) => new Promise(async(resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})

exports.serialize = function(piyo){
    m = JSON.parse(JSON.stringify(piyo))
    content = m.message
    //.text = m.message.conversation 
    m.isGroup = m.key.remoteJid.endsWith('@g.us')
    try{
        const berak = Object.keys(content)[0]
        m.type = berak
    } catch {
        m.type = null
    }
    try{
        const context = m.message.extendedTextMessage.contextInfo.quotedMessage
        m.quoted = context
    }catch{
        m.quoted = null
    }
    
    try{
        const mention = m.message[m.type].contextInfo.mentionedJid
        m.mentionedJid = mention
    }catch{
        m.mentionedJid = null
    }
    
    if (m.isGroup){
        m.sender = m.participant
    }else{
        m.sender = m.key.remoteJid
    }
    if (m.key.fromMe){
        m.sender = wa.user.jid
    }
    txt = (m.type === 'conversation' && m.message.conversation) ? m.message.conversation : (m.type == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.type == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.type == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : ""
    m.text = txt
    return m
}




exports.fetchText = fetchText = (url, options) => new Promise(async(resolve, reject) => {
    fetch(url, options)
        .then(response => response.text())
        .then(text => {
            resolve(text)
        })
        .catch((err) => {
            reject(err)
        })
})
