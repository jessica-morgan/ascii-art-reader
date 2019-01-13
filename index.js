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
      getData('data/kea.txt', showData)
    }
    if (parseInt(input) === 2) {
      getData('data/kiwi.txt', showData)
    }  
    if (parseInt(input) === 3) {
      getData('data/nikau.txt', showData)
    }
    if (parseInt(input) === 4) {
      getData('data/pohutukawa.txt', showData)
    }
  })
}

/** prompt.message = ''
prompt.delimiter = ': '
prompt.start()

const choice = {
  name: 'choice',
  hidden: true,
  message: 'Make your choice'
}

prompt.get(choice, function (result) {
  console.log("choice="+Object.values(choice)[1])
  console.log("result="+result)
  // Do something with result.choice here...
  
  console.log(choice[choice])
})*/

function getData (file, callback) {
  const filepath = path.join(__dirname, file)

  fs.readFile(filepath, 'utf8', callback)
}

function showData (err, data) {
  if (err) {
    console.error(err)
  } else {
    console.log(data)
  }
}
