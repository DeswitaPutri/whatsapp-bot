const fs = require('fs-extra')

const addlink = (userId, link , _dir) => {
  const obj = {id: userId , link: link}
  _dir.push(obj)
  fs.writeFileSync('./settings/youtube.json' , JSON.stringify(_dir))
}

const addjudul = (userId, username, _dir) => {
  const obj = {id: userId, username:username}
  _dir.push(obj)
  fs.writeFileSync('./settings/youtube.json' , JSON.stringify(_dir))
}

const checklink = (userId , _dir) => {
  let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].link
    }
}

const checkjudul = (userId , _dir) => {
  let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].username
    }
}



const deletelink = (userId, _dir) => {
  let position = null
  Object.keys(_dir).forEach((i) => {
      if (_dir[i].id === userId) {
          position = i
      }
  })
  if (position !== null) {
      return position
  }
}

module.exports = {
  addlink,
  checklink,
  deletelink,
  addjudul,
  checkjudul
}