// Variable
let time = 110
let score = 0
let timer
let current = 0
// Questions Array
let questions = [
  {
    question: 'What must be added to an button in a form for it to operate properly?',
    choices: ['location.reload()', 'event.preventDefault()', 'break', 'event.stopPropagation()', 'event.stopImmediatePropagation()'],
    answer: 'event.preventDefault()',
  },
  {
    question: 'JavaScript does not have datatypes like integer and float. What is the function that can be used to check if the number type is an integer or not?',
    choices: ['Integer(value)', 'ifInteger(value)', 'isInteger(value)', 'notInt(value)', 'typeInteger(value)'],
    answer: 'isInteger(value)',
  },
  {
    question: 'Which is not the correct syntax for creating a JavaScript function named createBadJSQuiz?',
    choices: ['const createBadJSQuiz = () => {}', 'const createBadJSQuiz = function(){}', 'function createBadJSQuiz(){}', 'createBadJSQuiz(){}', 'createBadJSQuiz = function(){}'],
    answer: 'createBadJSQuiz = function(){}',
  },
  {
    question: ' What is the correct syntax for adding comments?',
    choices: ['<!– I started this too late –>', '//Welp Lyfe', '# This was a large difficulty spike', '** Probably not getting much sleep tonight **', '/* Existential Crisis incoming */'],
    answer: '//Welp Lyfe',
  },
  {
    question: 'How do you return something to the Console?',
    choices: ['console.log()', 'return()', 'toConsole()', 'print.console()', 'cout()'],
    answer: 'console.log()',
  },
]
// functions
const loadQuestion = () => {
  document.getElementById('question').innerHTML = ''
  let qElem = document.createElement('div')
  qElem.innerHTML = `
    <h3>Question ${current + 1}: ${questions[current].question}</h3>
    <ul class="collection">
      <li class="collection-item waves-effect waves-green data-choice="${questions[current].choices[0]}">
              A) ${questions[current].choices[0]}</li>
      <li class="collection-item waves-effect waves-green data-choice="${questions[current].choices[1]}">
              B) ${questions[current].choices[1]}</li>
      <li class="collection-item waves-effect waves-green data-choice="${questions[current].choices[2]}">
              C) ${questions[current].choices[2]}</li>
      <li class="collection-item waves-effect waves-green data-choice="${questions[current].choices[3]}">
              D) ${questions[current].choices[3]}</li>
      <li class="collection-item waves-effect waves-green data-choice="${questions[current].choices[4]}">
              E) ${questions[current].choices[4]}</li>
    </ul>
  `
  document.getElementById('question').append(qElem)
}

document.getElementById('startBtn').addEventListener('click', () => {
  document.getElementById('startBtn').remove()
  timer = setInterval(() => {
    document.getElementById('time').textContent = `Time Left: ${time}`
    time--
    if (time < 0) {
      endGame()
      clearInterval(timer)
    }
  }, 1000)
  loadQuestion()
})

