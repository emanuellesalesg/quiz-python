import { Question } from "@/types/Question"
import { useState } from "react";
import { setTimeout } from "timers";

type Props = {
    question: Question;
    onAnswer: (answer: number) => void;
}


export const QuestionItem = ({question, onAnswer} : Props) => {

    const [selectedAnswer, setselectedAnswer] = useState<number | null>(null);

    const checkQuestion = (key: number) => {
        if(selectedAnswer === null){
            setselectedAnswer(key);
        }
        setTimeout(()=>{
            onAnswer(key);
            setselectedAnswer(null);

        }, 1000);
    }
    
    return (
    <div className="p-2"> 
        <div className="p-3 m-4 font-bold text-3xl">{question.question}</div>
        {question.options.map((item, key) => (
            <div key={key} 
            onClick={() => checkQuestion(key)}
            className={`p-3 m-4 rounded-md border font-serif text-sm 
            
            
            ${selectedAnswer !== null ? 'cursor-auto' : 'hover:bg-purple-600 opacity-80 hover:text-white hover:cursor-pointer'}
            
            ${selectedAnswer !== null && selectedAnswer === question.answer && selectedAnswer === key && 'bg-green-800 text-white opacity-80'}
            
            ${selectedAnswer !== null && selectedAnswer !== question.answer && selectedAnswer === key && 'bg-red-800 text-white opacity-80'}`}>
            
            {item}</div>
            
        
        ))}
    </div>)
}