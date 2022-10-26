import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  console.log(error);
  return (
    <>
      <div className='flex flex-col min-h-[700px] items-center bg-slate-600 w-screen h-screen'>
        <h1 className='text-8xl font-extrabold mt-60 mb-10 text-red-300 '>Ops! An Error Ocurred!</h1>
        <p className='text-center text-6xl font-extrabold text-red-500'>404 NOT FOUND !!!</p>
        <br />
        {error && (
          <div>
            <p className='text-red-500'>{error.statusText || error.message}</p>
            <p>{error.status}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default ErrorPage;