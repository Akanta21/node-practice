const Question = require('./question')

const questions = [
  new Question('What is 1 + 1?', '2'),
  new Question('What is 2 + 2', '4')
]
// const answers = [
//   new Answer('2'),
//   new Answer('4')
// ]

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// rl.question( questions[0].prompt, (answer) => {
//   console.log('Thank you for your valuable feedback:', answer);
//   rl.close()
// })

let index = 0
console.log(questions[index].prompt)
rl.prompt()

rl.on('line', (input) => {
  if (input === questions[index].answer) {
    console.log(`The answer is correct. Received: ${input}`)
  } else {
    console.log(`Received wrong input: ${input}`)
  }
  ++index
  if (index === questions.length) {
    rl.close()
    return
  }
  console.log(questions[index].prompt)
  rl.prompt()
})
