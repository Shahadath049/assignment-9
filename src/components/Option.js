import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Option = ({option,correctAnswer}) => {

    const handleAnswer = () => {
        const correct = correctAnswer;
        if (correct === option) {
            toast.success(` Correct answer ` )
        }
        else {
            toast.error(` Wrong answer ` )
        }
    }
    return (
        


        <button onClick={handleAnswer} className=' text-zinc-700 flex align-center  border rounded-lg border-green-700 m-3 lg:p-10 md:p-5 p-4  hover:bg-slate-100'>


           <input className='h-6 w-4 ' type="radio" name=""    />
           <label className='mx-5 text-xl' >{option}</label>

        
        </button>
        
    );
};

export default Option;