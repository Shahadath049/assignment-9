import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizz from './Quizz';

const Quizes = () => {
    const quizes = useLoaderData();
    // console.log(quizes)
    
     
    return (
        <div className='  mt-20 mx-auto'>
            <h1 className='text-4xl text-center text-slate-500 font-bold mb-10'>Quizes of  {quizes.data.name}</h1>
            <div className="w-9/12 mx-auto">
               {
                quizes.data.questions.map(quiz =><Quizz
                    quiz={quiz}
                    userId = {quizes.data.id}
                    key={quiz.id}
                   
                
                
                ></Quizz>)
               }
            </div>


        </div>
    );
};

export default Quizes;