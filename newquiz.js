// THIS FUNCTION WILL PULL MY QUESTIONS AND ANSWERS THAT I NEED SHOW IN MY HTML DOC
// WE HAVE OUTPUT AREAS WHERE MY QUESTIONS AND ANSWERS WILL BE PLACED WITHIN THE HTML DOC
// WE HAVE A FOREACH METHOD, SO THAT I WILL BE ABLE TO APPLY THE SAME PRINCIPLES TO ALL MY QUESTIONS
// WE HAVE A FOR LOOP WHICH WILL USE PUSH TO ADD MY QUESTION NUMBERS AND LETTERS OF ANSWERS TO MY-
//-ARRAYS, THIS SHOULD ADD ALL OF THEM TO MY SLIDES AS WE GO
function quizComponents(){
  const OUTPUT = [];
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {
      const answers = [];
      for(letter in currentQuestion.answers){
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }
      OUTPUT.push(
        `<div class="slide">
        <div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>
        </div>`
      );
    }
  );
  //ADDING MY OUTPUT ONTO THE PAGE
  quizContainer.innerHTML = OUTPUT.join('');
}
// THE FUNCTION BELOW TAKES MY ANSWERS AND PUTS THEM INTO THE HTML PART OF MY QUIZ. IT WILL ALSO KEEP-
//-TRACK OF WHAT THE USER ANSWERS CORRECTLY
function showResults(){
  const answerContainers = quizContainer.querySelectorAll('.answers');
  let numCorrect = 0;
  myQuestions.forEach( (currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    // THIS IF-ELSE STATEMENT SHOWS YOU IF YOU GOT A QUESTION RIGHT OR WRONG WITH COLORS, AND
    // ADDS YOUR CORRECT ANSWERS TO YOUR TOTAL NUMBER OF CORRECT ANSWERS
    if(userAnswer === currentQuestion.correctAnswer){
      numCorrect++;
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    else{
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // THIS IS HOW I WILL DISPLAY HOW MANY QUESTIONS THE USER GOT CORRECT OUT OF HOW MANY WERE AVAILABLE
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}
// THIS FUNCTION DICTATES HOW AND WHEN MY SLIDE BUTTONS WILL BEHAVE
// IT IS SET UP SO THAT THE PAGES WILL NOT SLIDE INTO NON EXISTENT PAGES WITHOUT CONTENT IN THEM
function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      lastPageButton.style.display = 'none';
    }
    else{
      lastPageButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }
  // THESE ARE PRETTY MUCH SELF EXPLANATORY, WHEN SLIDING, THE PAGE WILL MOVE ONE FORWARD OR ONE BACKWARD
function showNextSlide() {
    showSlide(currentSlide + 1);
  }
function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }
//BELOW I AM CREATING READ ONLY VARIABLES FOR THE MAIN QUIZ ELEMENTS AND THE GRADES
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('grade');
//BELOW IS THE CONNECTION TO MY SUBMISSION BUTTON IN HTML
const submitButton = document.getElementById('submit');
// BELOW ARE READ ONLY ASSEMBLIES OF MY QUESTIONS AND ANSWERS. SOME OF THEM MAY LOOK STRANGE BECAUSE-
//-I DIDN'T KNOW THAT THERE WAS A BANK OF TEST ANSWERS AND QUESTIONS ONLINE, SO I WROTE MOST OF THEM-
//-MYSELF. HOW TIME CONSUMING :'(
const myQuestions = [
    {
      question: "WHAT DOES 'HTML' STAND FOR?",
      answers: {
        a: "hot topic mall life",
        b: "hypertext markup language  ",
        c: "hello there, my love  ",
      },
      correctAnswer: "b"
    },
    {
      question: "WHAT DOES 'CSS' STAND FOR?",
      answers: {
        a: "cats stay styling  ",
        b: "colonial septic system  ",
        c: "cascading style sheet  ",
      },
      correctAnswer: "c"
    },
    {
      question: "WHAT DOES 'JS' STAND FOR?",
      answers: {
        a: "java system  ",
        b: "java style  ",
        c: "javascript  ",
      },
      correctAnswer: "c"
    },
    {
        question: "WHICH JS METHOD WOULD YOU USE TO CALL A FUNCTION OR EVALUATE AN EXPRESSION AT SPECIFIED INTERVALS (IN MILLISECONDS)?",
        answers: {
          a: "setTime  ",
          b: "timeInterval  ",
          c: "setInterval  ",
        },
        correctAnswer: "c"
      },
      {
        question: "WHAT IS MOB PROGRAMMING?",
        answers: {
          a: "buying drafted code from an outsource  ",
          b: "selling drafted code to an outsource  ",
          c: "multiple participants assisting in writing code together in real time  ",
        },
        correctAnswer: "c"
      },
      {
        question: "WHICH OF THESE HEADER TAGS WILL DISPLAY THE LARGEST FONT BY DEFAULT?",
        answers: {
          a: "h1  ",
          b: "h3  ",
          c: "javascript  ",
        },
        correctAnswer: "a"
      },
      {
        question: "WHICH BUILT-IN METHOD CALLS A FUNCTION FOR EACH ELEMENT IN AN ARRAY?",
        answers: {
          a: "while  ",
          b: "loop  ",
          c: "forEach  ",
        },
        correctAnswer: "c"
      },
      {
        question: "Which built-in method returns the index within the calling String object of the first occurrence of the specified value?",
        answers: {
          a: "location()  ",
          b: "getIndex()  ",
          c: "indexOf()  ",
        },
        correctAnswer: "c"
      },
      {
        question: "Which built-in method returns the length of the string?",
        answers: {
          a: "length()  ",
          b: "size()  ",
          c: "index()  ",
        },
        correctAnswer: "a"
      },
      {
        question: "WHAT IS ERIC HIDING INSIDE OF HIS BEARD?",
        answers: {
          a: "the souls of fallen programming students  ",
          b: "a small family of blue jays  ",
          c: "a butt chin  ",
        },
        correctAnswer: "b"
      },
      
  ];
quizComponents();
// THIS IS ATTACHING MY BUTTONS AND QUESTION INSTANCES TO THEIR ID/CLASSES
const lastPageButton = document.getElementById("last");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
showSlide(currentSlide);
// MULTIPLE CLICK BUTTONS, THE FIRST ONE IS SO THAT WE CAN END THE TEST AND SEE RESULTS
// THE SECOND BUTTON WILL TAKE US TO THE PREVIOUS QUESTIONS SO THAT WE MAY CHANGE OUR ANSWER OR CHECK
// IF WE GOT IT WRONG OR NOT
// THE LAST BUTTON DOES THE OPPOSITE OF WHAT THE SECOND BUTTON DOES
submitButton.addEventListener('click', showResults);
lastPageButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
// THE SECONDSLEFT GLOBAL VARIABLE REFERS TO THE BASE AMOUNT OF TIME I WANT THE USER TO START WITH TO ANSWER QUIZ QUESTIONS
var secondsLeft=60;
// THE COUNTDOWN VARIABLE IS THE INTERVAL SETTER OF THE TIMER FUNCTION, USING 1 SECOND PER INSTANCE OF COUNTING DOWN NUMBERS
var countDown=setInterval(timer, 1000);
// THIS IS MY TIMER FUNCTION, RESPONSIBLE FOR USING THE VARIABLE COUNTDOWN TO REMOVE SECONDS FROM THE VARIABLE SECONDSLEFT
// THE FIRST LINE SAYS THAT SECONDSLEFT = SECONDSLEFT-1, CREATING A NEW VARIABLE WHERE SECONDS LEFT WILL BE 59
// THE NEXT LINE SAYS THAT IF SECONDS LEFT IS EQUAL TO OR LESS THAN ZERO, THAN TO CLEAR THE COUNTING INTERVAL CALLED COUNT DOWN AND ALERT
// THE USER THAT 'TIME'S UP!!'
// THE LAST LINE IS OUR DOCUMENT SELECTOR WHICH GOES TO THE TIMER ID IN MY HTML, AND REPEATEDLY DISPLAYS THE EVERCHANGING VARIABLE OF SECONDSLEFT 
// FOLLOWED BY THE WORD "SECONDS" BECAUSE SECONDSLEFT IS AN INTEGER VALUE AND WE NEED TO LET USERS KNOW WHAT IT REPRESENTS IN A REAL WORLD SETTING
function timer()
{
    secondsLeft=secondsLeft-1
    if (secondsLeft <= 0)
    {
        clearInterval(countDown);
        alert('Time\'s up!!!')
    }
    document.getElementById('timer').innerHTML=(secondsLeft + "seconds");
}

