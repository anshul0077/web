document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choice-list");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");

  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
      selected:"purple"
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
      selected:"purple"
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
      selected:"purple"
    },
    
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  nextBtn.addEventListener('click',()=>update())
  startBtn.addEventListener('click',startquiz)

  function startquiz(){

    startBtn.classList.add("hidden")
    questionContainer.classList.remove("hidden")
    resultContainer.classList.add('hidden')
  questionText.innerHTML=questions[currentQuestionIndex].question
     showChoice()
  }
  
  let selectedValue=0
  
function showChoice(){
  nextBtn.classList.add("hidden")
  choicesList.textContent=''
  questions[currentQuestionIndex].choices.forEach((e)=>{
    let li=document.createElement("li")
      li.innerHTML=e
console.log(li);
li.addEventListener('click',()=> showanswer(e))
li.addEventListener('click',()=>{

  if(selectedValue==0){

    li.style.backgroundColor=questions[currentQuestionIndex].selected
    selectedValue++
  }
 
})
choicesList.appendChild(li)

    })
    
}

function showanswer(choice){
  
  const answer=questions[currentQuestionIndex].answer
  if(choice===answer){
    score++
  }
  nextBtn.classList.remove("hidden")
}
function update() {
  currentQuestionIndex++
  if(currentQuestionIndex<questions.length){
selectedValue=0
    startquiz()

  }
  else{
    showresult()
  }
}
restartBtn.addEventListener('click',()=>{
  score=0
  currentQuestionIndex=0
  startquiz()
  selectedValue=0
})

function showresult() {
  resultContainer.classList.remove("hidden")
  questionContainer.classList.add("hidden")
  restartBtn.classList.remove("hidden")
  scoreDisplay.classList.remove("hidden")
  scoreDisplay.textContent=`${score} out of ${questions.length}`
  
}
});
