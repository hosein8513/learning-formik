import React from 'react';
import Personalerror from '../src/Personalerror';
import { ErrorMessage, FastField } from 'formik';

const Select = (props) => {
    return (
        <div className='flex flex-col  items-center w-full'>

            <label htmlFor={props.name}>{props.label}</label>
            <FastField as="select" className="w-7/12 bg-black/40 rounded-lg p-2" name={props.name} >
            {
                props.options.map((o)=>(
                    <option key={o.id} value={o.id}>{o.value}</option>
                ))
            }
            </FastField>
            <ErrorMessage name={props.name} component={Personalerror}/>

        </div>
    );
};

export default Select;