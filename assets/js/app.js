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
    choices: ['< !– I started this too late –>', '//Welp Lyfe', '# This was a large difficulty spike', '** Probably not getting much sleep tonight **', '/* Existential Crisis incoming */'],
    answer: '//Welp Lyfe',
  },
  {
    question: 'How do you return something to the Console?',
    choices: ['console.log()', 'return()', 'toConsole()', 'print.console()', 'cout()'],
    answer: 'console.log()',
  },
]
// functions
const endGame = () => {
  score = time
  document.getElementById('question').innerHTML = ''
  document.getElementById('time').textContent = `Time: ${time}`
  document.getElementById('score').textContent = `Score: ${score}`
  document.getElementById('scoreForm').className = ''
}
const loadQuestion = () => {
  document.getElementById('question').innerHTML = ''
  let qElem = document.createElement('div')
  qElem.innerHTML = `
    <h3>Question ${current + 1}: ${questions[current].question}</h3>
    <ul class="collection">
      <li class="collection-item waves-effect waves-red btn" data-choice="${questions[current].choices[0]}" id="option0">
              A) ${questions[current].choices[0]}</li>
      <li class="collection-item waves-effect waves-red btn" data-choice="${questions[current].choices[1]}" id="option1">
              B) ${questions[current].choices[1]}</li>
      <li class="collection-item waves-effect waves-red btn" data-choice="${questions[current].choices[2]}" id="option2">
              C) ${questions[current].choices[2]}</li>
      <li class="collection-item waves-effect waves-red btn" data-choice="${questions[current].choices[3]}" id="option3">
              D) ${questions[current].choices[3]}</li>
      <li class="collection-item waves-effect waves-red btn" data-choice="${questions[current].choices[4]}" id="option4">
              E) ${questions[current].choices[4]}</li>
    </ul>
  `
  document.getElementById('question').append(qElem)
  for (let c = 0; c < questions[current].choices.length; c++) {
    if (questions[current].answer === questions[current].choices[c]) {
      document.getElementById(`option${c}`).className = 'collection-item waves-effect waves-green btn'
    }
  }
}

// Start Game Event
document.getElementById('startBtn').addEventListener('click', () => {
  document.getElementById('startBtn').remove()
  timer = setInterval(() => {
    document.getElementById('time').textContent = `Time Left: ${time}`
    if (time <= 0) {
      endGame()
      clearInterval(timer)
    }
    time--
  }, 1000)
  loadQuestion()
})

document.addEventListener('click', event => {
  if (event.target.classList.contains('collection-item')) {
    if (event.target.dataset.choice !== questions[current].answer) {
      time -= 15
    }
    console.log(event.target.dataset.choice)
    current++
    setTimeout(() => {
      if (current >= questions.length) {
        endGame()
        clearInterval(timer)
      }
      else {
        loadQuestion()
      }
    }, 200);
  }
})

document.getElementById('submitButton').addEventListener('click', event => {
  event.preventDefault()
  let userInitials = document.getElementById('icon_prefix').value
  let userScores = JSON.parse(localStorage.getItem('userScores')) || []
  userScores.push({ userInitials, score })
  localStorage.setItem('userScores', JSON.stringify(userScores))

  userScores.sort((a, b) => b.score - a.score)

  let tableHead = document.createElement('table')
  tableHead.className = 'table highlight centered responsive-table'
  tableHead.innerHTML = `
        <thead>
          <tr>
              <th class="tableLabel">Initials</th>
              <th class="tableLabel">Score</th>
          </tr>
        </thead>
  `
  let tableCont = document.createElement('tbody')
  for (let i = 0; i < userScores.length; i++) {
    tableCont.innerHTML += `
      <tr>
        <td class="tableValue">${userScores[i].userInitials}</td>
        <td class="tableValue">${userScores[i].score}</td>
      </tr>
    `
  }
  tableHead.append(tableCont)
  document.getElementById('question').append(tableHead)
})
