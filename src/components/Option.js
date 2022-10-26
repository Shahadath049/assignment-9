import React from 'react';

const Option = ({option}) => {
    return (
        <div className=' text-zinc-700 flex align-center  border rounded-lg border-green-700 m-3 lg:p-10 md:p-5 p-4  hover:bg-slate-100'>

            
           <input className='h-6 w-4 ' type="radio" name="" id=""  />
           <h3 className='mx-5 text-xl '>{option}</h3>
        </div>
    );
};

export default Option;