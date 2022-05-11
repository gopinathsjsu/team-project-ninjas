import React, { useState } from 'react';
import './Form.css';
import FormSuccess from './FormSuccess';
import FormLogin from "./FormLogin";

const Login = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
            <div className='form-container'>
                <span className='close-btn'>×</span>
                <div className='form-content-left'>
                    <img className='form-img' src='imges/img-2.svg' alt='spaceship' />
                </div>
                {!isSubmitted ? (
                    <FormLogin submitForm={submitForm} />
                ) : (
                    <FormSuccess />
                )}
            </div>
        </>
    );
};



export default Login;
