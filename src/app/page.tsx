"use client"

import { QuestionItem } from "@/components/QuestionItem";
import { Results } from "@/components/Results";
import { questions } from "@/data/questions";

import { useState } from "react";

const Page = () => {
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answeres, setAnswer] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [countAnswer, setCountAnswer] = useState<number>(0);
  


  const quiz_title = "What do you know about Python?\nTest yourself!";
  

  const loadNextQuestion = () => {
    if(questions[currentQuestion + 1]){
      setCurrentQuestion(currentQuestion + 1)
    }else{
      setShowResult(true)
    }
  }

  const onHandleClick= (answer: number) => {
    setAnswer([...answeres, answer]);
    
    if(questions[currentQuestion].answer === answer){
      setCountAnswer(countAnswer + 1);
    }

    loadNextQuestion();
  }

  const restart = () => {
    setAnswer([]);
    setShowResult(false);
    setCurrentQuestion(0);
    setCountAnswer(0);
  }
  
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black text-black font-mono">
      
      <div className="bg-white w-full max-w-xl rounded-md overflow-hidden">
        <div className="bg-purple-700 text-white text-center w p-8 text-3xl font-extrabojld border-b border-gray-400">{quiz_title}</div>

        {!showResult &&
            <div className="p-5 border-b border-gray-400">
              <QuestionItem
                question={questions[currentQuestion]}
                onAnswer={onHandleClick}
              />
            </div>
        }
        {showResult && 
          <Results
          questions={questions}
          answers={answeres}
          correct={countAnswer}
          />
        }
        
        <div className="p-8 text-center text-purple-700 rounded-b-md font-bold"> 
        {!showResult &&
          `Question ${currentQuestion + 1} out of ${questions.length}`
        }{ showResult &&
          <button onClick={() => restart()} className="px-3 py-2 bg-purple-700 text-white rounded-md">Restart</button>
        }
        </div>
      
        
        
      </div>
    </div>
  );
}

export default Page;