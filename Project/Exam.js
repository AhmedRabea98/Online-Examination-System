var questions = [
    new Question("which one is not object oriented programming language?", ["java" , "c#" , "c++" , "c" ] ,3 ),
    new Question("which language is used for styling web pages?" , ["html" , "css" , "xml" , "js"] , 1),
    new Question("there are _______ main components of object oriented programming." , ["1" , "4" , "5" , "3"] ,1),
    new Question("which language used for web app?" , ["python" , "java" , "c#" ,"All"] , 3),
    new Question("MVC is a ______ ", ["language" , "library" , "framework" , "All"] , 3),
    new Question("What is actually electricity? ", ["A flow of water" , "A flow of air" , "A flow of electrons" , "A flow of atoms"] , 2),
    new Question("Which of the following is not an international organisation?"
        , ["FIFA" , "NATO" , "ASEAN" , "FBI"] , 3),
    new Question("Which of the following disorders is the fear of being alone?"
        , ["Agoraphobia" , "Aerophobia" , "Acrophobia" , "Arachnophobia"] , 0),
    new Question("What is the speed of sound?"
        , ["120 km/h" , "1,200 km/h" , "400 km/h" , "700 km/h"] , 1), 
     new Question(" In total, how many novels were written by the Bronte sisters?"
        , ["4" , "5" , "6" , "7"] , 3),   

];

function Question(text , choices , answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
Question.prototype.correctAnswer = function(choice){
    return choice === this.answer;
}
var arr = [];
var markArr =[];
var answers = [];
var clickedBtn = [];
for(var i = 0 ; i<questions.length ; i++){
    arr[i]=0;
    markArr[i]=0;
    answers[i]=0;
    clickedBtn[i]=0;
}

function Exam(questions){
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Exam.prototype.getQuestionIndex = function(){
    return this.questions[this.questionIndex];
}


// Exam.prototype.isEnded = function(){

//     return this.questions.length === this.questionIndex;
// }

function populate(){


        // show question
        var element = document.getElementById('question');
        element.innerHTML = exam.getQuestionIndex().text;
        element.style.color ="rgba(226, 209, 209, 0.8);";

        // show choices
        var choices = exam.getQuestionIndex().choices;
        for(var i = 0 ; i < choices.length ; i++){
            var elementChoice = document.getElementById('choice' +i);
            elementChoice.innerHTML = choices[i];
            
        }
    
   };


function clicked(e){
    buttons.forEach(btn=>{
        btn.style.backgroundColor ="rgba(24, 3, 41, 0.8)";
        btn.children[0].style.backgroundColor =  "rgba(24, 3, 41, 0.8)";
    })
    var id =e.target.getAttribute("id");
    var answer = Number(id.split("n")[1]);

    if(questions[exam.questionIndex]['answer'] === answer){

        answers[exam.questionIndex] = 1 ;
     }
     else{
        answers[exam.questionIndex] = 0 ;
     }
    arr[exam.questionIndex] = 1;
    document.getElementById(id).style.backgroundColor ="#1d3c6a";
    clickedBtn[exam.questionIndex] = id;
    
}

var buttons = Array.from(document.querySelector('.buttons').children);
function next(){

    if(exam.questionIndex == exam.questions.length-1){

        exam.questionIndex--;
    }
    exam.questionIndex++;
    buttons.forEach(button=>{
        button.style.backgroundColor ="rgba(24, 3, 41, 0.8)";
        button.children[0].style.backgroundColor =  "rgba(24, 3, 41, 0.8)"
    })
    if(arr[exam.questionIndex] == 1){
        prev_ans = document.getElementById(clickedBtn[exam.questionIndex]);
        prev_ans.style.backgroundColor = "#1d3c6a";
    }
 

    populate();

}


var prev_ans;
function previous(){
    if(exam.questionIndex ==0){
        exam.questionIndex = 1;
    }
    exam.questionIndex--;
    buttons.forEach(button=>{
        button.style.backgroundColor ="rgba(24, 3, 41, 0.8)";
        button.children[0].style.backgroundColor =  "rgba(24, 3, 41, 0.8)"
    })
    if(arr[exam.questionIndex] == 1){
        
        prev_ans = document.getElementById(clickedBtn[exam.questionIndex]);
        prev_ans.style.backgroundColor = "#1d3c6a";
    }
    populate();
}
function submit(){
    answers.forEach(answer=>{
        if(answer === 1){
            exam.score++;
        }
    })
    setCookie('score' , exam.score);
    clearInterval(interval);
    var countdown = document.getElementById('countdown');
    countdown.style.display="none";
    showScores();

}


   function showScores(){
    var gameOver = "<h1> Result</h1>";
     gameOver+="<h2 id='name'>name : "+getCookie('userName') +"</h2>";
      gameOver += "<h2 id='score'>Your Score : " +getCookie('score') + "</h2>";
      var examElement = document.getElementById('quiz');
      var element = document.getElementById('mark');
      element.style.display="none";
      examElement.innerHTML = gameOver;

     }
 function returnQuestion(q_id){
    exam.questionIndex = q_id;
    populate();
 }
 
  function mark(){
      if(markArr[exam.questionIndex] === 0){
        var mark = document.getElementById('mark');
        mark.innerHTML+=`<button onclick="returnQuestion(${exam.questionIndex})">question ${exam.questionIndex+1}</button>`
        markArr[exam.questionIndex] = 1;
      }
    }    

    var countdown = document.getElementById('countdown');
    var time = 0;
    var examDuration = 600;

    var interval = setInterval(() => {
    time+=100/examDuration;
    countdown.style.width=`${time}%`;
    
    if(time === 100){
        
        clearInterval(interval);
        countdown.style.width = "0%";
        countdown.style.display="none";
        showScores();
    }
}, 1000);

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        
        if (--timer < 0) {
            clearInterval(startTimer);
            display.style.display="none";
            showScores();
        }
        
    }, 1000);
}

window.onload = function () {
    var tenMinutes = 60 * 10;
    var display = document.querySelector('#countdown');
    startTimer(tenMinutes, display);
};


questions.sort(()=> Math.random()- .5);
var exam = new Exam(questions);

populate();