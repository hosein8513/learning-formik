import React from 'react';
import Input from './Input';
import Select from './Select';
import Radio from './Radio';
import Checkbox from './Checkbox';

const Formikcontrol = (props) => {
  switch(props.control){
    case "input":
        return (
        <div className='className="flex flex-col justify-center items-center w-full'>
        <Input {...props}/>
        </div>)
        case "select":
        return (
        <div className='className="flex flex-col justify-center items-center w-full'>
        <Select {...props}/>
        </div>)
        case "radio":
             return (
        <div className='className="flex flex-col justify-center items-center w-full'>
        <Radio {...props}/>
        </div>)
        case "checkbox":
            return (
        <div className='className="flex flex-col justify-center items-center w-full'>
        <Checkbox {...props}/>
        </div>)


  }
};

export default Formikcontrol;