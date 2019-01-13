const readline = require('readline')
const prompt = require('prompt')
const path = require('path')
const fs = require('fs')
module.exports = {

}

console.log('Welcome!')

console.log('Choose an artwork to display, or: \n' + 'c to comment \n' + 'e to erase comments \n' + 'v to view comments \n' + 'q to quit')

console.log()

console.log('1: Kea.txt \n' + '2: kiwi.txt \n' + '3. nikau.txt \n' + '4: pohutukawa.txt')

pressEnter()

function pressEnter () {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('Which file should I load? ', function (input) {
    rl.close()
    if (parseInt(input) === 1) {
      getImage('data/kea.txt', showImage)
    }
    if (parseInt(input) === 2) {
      getImage('data/kiwi.txt', showImage)
    }  
    if (parseInt(input) === 3) {
      getImage('data/nikau.txt', showImage)
    }
    if (parseInt(input) === 4) {
      getImage('data/pohutukawa.txt', showImage)
    }
  })
}

function getImage (file, callback) {
  const filepath = path.join(__dirname, file)

  fs.readFile(filepath, 'utf8', callback)
}

function showImage (err, data) {
  if (err) {
    console.error(err)
  } else {
    console.log(data)
  }
}
