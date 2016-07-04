class Question {
  constructor (openingPrompt, answer, rightAnswerIndex) {
    this.prompt = openingPrompt
    this.answer = answer
    this.rightAnswerIndex = rightAnswerIndex
  }
  isRightAnswer (guess) {
    return (guess === this.answers[this.rightAnswerIndex])
  }
}

module.exports = Question
