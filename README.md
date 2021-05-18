# Trivia-Quiz
A short Trivia game that records scores and updates the page

This site gives the user a quiz of 5 questions, each with 5 options that score the user based on time. At the end the user can submit and restart the quiz.

Basic Function:
The start page displays the title and the start button.
As soon as the start button is pressed, the question is displayed and a timer will start.
There are 5 question which reduce your score if you get them wrong.
When the quiz is over you can submit your score with initials, these will be saved on your computer.
Then you can choose to start again

Question/Buttons:
The quiz will have a red wave effect if the option chose was incorrect and a green effect if the correct option was chosen.
When you hover over the options the back ground will turn grey.
choosing an option will advance to the next question

Timer:
It can be seen counting down above the question
The timer is essentially the score, if a question is answered incorrectly, 15 seconds will be deducted. Due to this nature, it is technically possible to recieve a negative score if the timer is at < 15 seconds and the question is answeres incorectly. 

Submit:
At the end of the quiz a initials input box and a submit button will appear.
when a score is submitted it will store it in the browser's localStorage and display a table.
The play again button takes advantage of the lack of a preventDefault() to reload the page. 

Solution/template was based off of Professor Quinton's example provided in class.

Link to Deployed Site: https://wellswu4621.github.io/Trivia-Quiz/
Screenshots can be found in the Screenshots Folder
