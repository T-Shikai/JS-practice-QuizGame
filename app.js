( ()=>{const quiz = [
  {
      question:"問題1",
      answers:[
          "答え1−1",
          "答え1−2",
          "答え1−3",
          "答え1−4",
      ],
      correct:"答え1−4"
  }, {
      question:"問題2",
      answers:[
          "答え2−1",
          "答え2−2",
          "答え2−3",
          "答え2−4",
      ],
      correct:"答え2−1"
  }, {
      question:"問題1",
      answers:[
          "答え3−1",
          "答え3−2",
          "答え3−3",
          "答え3−4",
      ],
      correct:"答え3−2"
  },
];

const quizLength = quiz.length;
let quizIndex =0;
const $button = document.getElementsByTagName("button");

const setupQuiz = () =>{
  document.getElementById("js-question").textContent =quiz[quizIndex].question;
  let buttonIndex =0;
  while(buttonIndex < $button.length){
      $button[buttonIndex].textContent =quiz[quizIndex].answers[buttonIndex];
      buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) =>{
  if(quiz[quizIndex].correct === e.target.textContent){
      window.alert("正解！");
  } else {
      window.alert("不正解！");
  }

  quizIndex++;

  if(quizIndex < quizLength){
      setupQuiz();
  } else{
      alert("終了！");
  }
}

let handlerIndex =0;
while(handlerIndex < $button.length){
  $button[handlerIndex].addEventListener("click",(e) =>{
      clickHandler(e);
  });
  handlerIndex++;
}
})(); 