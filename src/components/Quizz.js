import React from 'react';
import Option from './Option';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quizz = ({ quiz,userId }) => {
    console.log(quiz)
    const { question, options, id, correctAnswer } = quiz;
    
    const showButton = () => {
           toast.success(` Correct answer  : ${correctAnswer}` )
    }

    return (
        <div className='m-10'>
            <div className='border rounded-lg text-green-600 font-semibold shadow-lg h-auto m-auto w-auto'>


                <div>
                    <div className='text-right mr-5 mt-5'>
                        <button onClick={showButton} ><FontAwesomeIcon className='text-3xl' icon={faEyeSlash} /></button>
                        <ToastContainer className="text-xl"></ToastContainer>
                    </div>
               

                    <h2 className=' text-center lg:px-32 px-10 py-5 text-3xl'>Quiz : {question}</h2>

                </div>

                <div className='grid lg:grid-cols-2 sm:grid-cols-1 px-10 mb-5'>
                    {
                        options.map(option => <Option
                            id={id}
                            correctAnswer={correctAnswer}
                            option={option}
                        ></Option>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Quizz;