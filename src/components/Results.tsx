import { questions } from "@/data/questions";
import { Question } from "@/types/Question";


type Props = {
    questions: Question[];
    answers: number[];
    correct: number;

}

export const Results = ({questions, answers, correct} : Props) => {
    return (
        <div className="p-5">
            <span className="p-2 bg-purple-600 text-white my-2 rounded-md">{correct} of {questions.length}</span>
            {questions.map((item, key) => (
                <div key={key} className="my-3">
                    <div className="font-bold">{key + 1}. {item.question}</div>
                    <span className="font-bold">{item.answer === answers[key] ? <span className="bg-green-400 px-2 mr-2">{'Correct'}</span> : <span className="bg-red-400 px-4 mr-2">{'Wrong'}</span> }</span>
                    {' Answer: ' + item.options[item.answer]}
                </div>
            ))}
        </div>
    );
}