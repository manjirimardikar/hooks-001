import { useState } from 'react';
import './App.css';
import { questions } from './Components/Questions'





function App() {
  const [currentvalue, setCurrentvalue] = useState(0)
  const [showScore, setShowScore] = useState(false);
  // const[btncolor, SetBtncolor] = useState("")
  const [score, setScore]=useState(0)


  const handleanswer=(isCorrect)=>{
    if(isCorrect){
      setScore(score+1)     
    }
    const nextvalue= currentvalue+1
    if(nextvalue < questions.length){
      setCurrentvalue(nextvalue)
    }
    else{
      setShowScore(true)
    }
    
    
  }
  const restartGame = () => {
    setScore(0);
    setCurrentvalue(0);
    setShowScore(false);
  };

  return (
    <div className="app">
      {showScore?(<div className='maincontainer'>
        <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button className='restart-btn'onClick={() => restartGame()}>Restart game</button>
  
				</div>):(<>
          <div className='maincontainer'>
        <div className='header'>
          <h1>Quiz Game</h1>
          <h2>Current Score : {score}</h2>
        </div>
        <div className='question-section'>
          <h2>Questions {currentvalue+1} out of {questions.length}</h2>
          <h3> {questions[currentvalue].questionText}</h3>

          <div className='answer-section'>
          {questions[currentvalue].answerOptions.map((ele)=>{
           return <button className='cont' onClick={()=>{
            handleanswer(ele.isCorrect)
            

            
           }}>{ele.answerText} </button>
         

          })}
          </div>
          
         

        </div>

      </div>
</>)}
     
    
    </div>
  );
}

export default App;