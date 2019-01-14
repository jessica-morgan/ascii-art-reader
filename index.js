const readline = require('readline')
const prompt = require('prompt')
const path = require('path')
const fs = require('fs')
module.exports = {
  getImage,
  pressEnter,
  showImage,
  leaveComments
}

function displayMenu () {
  console.log('Choose an artwork to display, or: \n' + 'c to comment \n' + 'e to erase comments \n' + 'v to view comments \n' + 'q to quit')
  console.log()
  const dirPath = path.join(__dirname, '/data')
  fs.readdir(dirPath, 'utf-8', getFiles)
}

function getFiles (err, files) {
  files = files.filter(item => item !== 'comments.txt')
  if (err) { console.error(err) }
  let str = ''
  for (let i = 0; i < files.length; i++) {
    str += (i + 1) + ': ' + files[i] + '\n'
  }
  console.log(str)
  pressEnter(files)
}

function pressEnter (files) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('Which file should I load? ', function (input) {
    rl.close()
    if (input === 'q') {
      process.exit()
    }
    if (input === 'c') {
      leaveComments()
    }
    if (input === 'v') {
      getImage('data/comments.txt', showImage)
    }
    if (input === 'e') {
      fs.writeFile('data/comments.txt', '', 'utf8', (err) => {
        if (err) {
          console.error(err)
        } else {
          console.log('Your comments have been deleted')
        }
      })
    }
    if (parseInt(input) <= 0 || parseInt(input) > files.length) {
      console.error(err)
    }
    else {
      const i = parseInt(input) - 1
      const filePath = path.join(__dirname, 'data/' + files[i])
      getImage(filePath, showImage)
    }
  })
}

function leaveComments () {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('Please leave your comments here: ', function (comments) {
    rl.close()
    comments = comments + '\n'
    fs.appendFile('data/comments.txt', comments, 'utf8', (err) => {
      if (err) {
        console.error(err)
      } else {
        console.log('Your comments have been saved')
      }
    })
  })
}


function getImage (file, callback) {
  // const filepath = path.join(__dirname, file)
  fs.readFile(file, 'utf8', callback)
}

function showImage (err, data) {
  if (err) {
    console.error(err)
  } else {
    console.log(data)
  }
  displayMenu()
}

function setUps () {
  console.log('Welcome!')
  displayMenu()
}

setUps()
