import React from 'react';

const Error = ({message}) => {
    return ( 
        <p className='alert alert-danger p3 my-5 text-center text-uppercase'>
           {message}
        </p>
     );
}
 
export default Error;