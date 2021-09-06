const fs = require('fs-extra')


const addteks = (groupId , teks , _dir) => {
    const obj = {id: groupId , teks: teks}
    _dir.push(obj)
    fs.writeFileSync('./settings/welcomee.json', JSON.stringify(_dir))
}

const checkgroup = (userId, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            status = true
        }
    })
    return status
}


const checkteks = (userId , _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].teks
    }
}

module.exports = {
    checkteks,
    addteks,
    checkgroup
}