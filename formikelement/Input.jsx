import React from 'react';
import Personalerror from '../src/Personalerror';
import { ErrorMessage, FastField } from 'formik';

const Input = (props) => {
    return (
        <div className='flex flex-col  items-center w-full'>

            <label htmlFor={props.name}>{props.label}</label>
            <FastField type={props.type} className="w-7/12 bg-black/40 rounded-lg p-2" name={props.name} />
            <ErrorMessage name={props.name} component={Personalerror}/>

        </div>
    );
};

export default Input;