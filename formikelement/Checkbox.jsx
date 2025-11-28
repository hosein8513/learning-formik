import React, { Fragment } from 'react';
import Personalerror from '../src/Personalerror';
import { ErrorMessage, FastField } from 'formik';

const Checkbox = (props) => {
    return (
        <div className='flex gap-4  items-center w-full'>

            <label htmlFor={props.name}>{props.label}:</label>
            <FastField className="w-7/12 bg-black/40 rounded-lg p-2" name={props.name} >
            {({field})=>{
                return props.options.map((o)=>(
                    <Fragment key={o.id}>
                        <input type="checkbox" 
                        id={o.value}
                        {...field}
                        value={o.value}
                        checked={field.value.includes(o.value)}
                        />
                        <label htmlFor={o.value}>{o.value}</label>
                    </Fragment>
                ))
            }
                
               
            }
            </FastField>
            <ErrorMessage name={props.name} component={Personalerror}/>

        </div>
    );
};

export default Checkbox;