class Question {
    constructor(text, choices, answer){
        this.text = text;
        this.choices = choices;
        this.answer =answer;
    }
    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

let questions = [
    new Question(
        "Quel est le résulat de ce calcul : 1+1 ?",
         ["1","2","3","4"],
         "2"
         ),
    new Question(
        "Quel est le résulat de ce calcul : 1+2 ?",
         ["1","2","3","4"],
         "3"
         ),
    new Question(
        "Quel est le résulat de ce calcul : 1+3 ?",
         ["1","2","3","4"],
         "4"
         ),
    new Question(
        "Quel est le résulat de ce calcul : 1+4 ?",
         ["5","2","3","4"],
         "5"
         ),
];

class Quizz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.currentQuestionIndex = 0;
      }
    getCurrentQuestion(){
        return this.questions[this.currentQuestionIndex];
    }
    guess(answer){
        if (this.getCurrentQuestion().isCorrectAnswer(answer)){
            this.score++;
        }
        this.currentQuestionIndex++;
    }
    hasEnded(){
        return this.currentQuestionIndex >= this.questions.length;
    }
}

// Regroup all function relative to the app display
const display = {
    elementShown : function(id, text) {
        let element = document.getElementById(id);
        element.innerHTML = text;
    },
    endQuizz: function() {
        endQuizzHTML = `
        <h2>QUIZZ terminé!</h2>
        <h3>Votre score est de : ${quizz.score} / ${quizz.questions.length}</h3>
        `;
        this.elementShown("quizz", endQuizzHTML);
    },
    question: function(){
        this.elementShown("question", quizz.getCurrentQuestion().text);
    },
    choices: function() {
        let choices = quizz.getCurrentQuestion().choices;

        guessHandler = (id,guess) => {
            document.getElementById(id).onclick = function() {
                quizz.guess(guess);
                quizzApp();
            }
        }
        for(let i = 0; i < choices.length; i++) {    
            this.elementShown("choice" + i, choices[i]);  
            guessHandler("guess" + i, choices[i]);
        }
    },
    progress: function(){
        let currentQuestionNumber = quizz.currentQuestionIndex + 1 ;
        this.elementShown('progress',"Question" +" "+ currentQuestionNumber + " "+ "sur"+ " "+ quizz.questions.length);
    }
}

// GAME LOGIC
quizzApp = () =>{
    if(quizz.hasEnded()){
        //END
        display.endQuizz();
    }else{
        //LOGIC
        //QUESTION
        display.question();
        //CHOICE
        display.choices();
        //PROGESS
        display.progress();
    }
}


// CREATE QUIZZ
let quizz = new Quizz(questions);
quizzApp();
 

