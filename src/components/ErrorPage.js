import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {

   
    return (
        <div>
            <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>


            <Link to={'/home'}>Back to Home</Link>

      

        </div>
    );
};

export default ErrorPage;