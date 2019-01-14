
const path = require('path')
const index = require('../index')

// test('Jest is working correctly', () => {
//   expect(true).toBe(true)
// })

test('Reading file test', () => {
  const fileName = path.join(__dirname, 'text.txt')
  console.log("fileName="+fileName)
  const contents = 'This is a test file.'
  index.getImage(fileName, data => {
    console.log("data="+data)
    expect(data).toMatch(contents)
    
  })
})
