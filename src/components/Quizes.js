import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizz from './Quizz';

const Quizes = () => {
    const quizes = useLoaderData();
    
     
    return (
        <div className='container  mt-20 mx-auto'>
            <h1 className='text-4xl text-center text-slate-500 font-bold'>Quizes of  {quizes.data.name}</h1>
            <div className="container ">
               {
                quizes.data.questions.map(quiz =><Quizz
                    quiz={quiz}
                    key={quiz.id}
                   
                
                
                ></Quizz>)
               }
            </div>


        </div>
    );
};

export default Quizes;