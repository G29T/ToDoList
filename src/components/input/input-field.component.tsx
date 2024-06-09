import React, { ChangeEvent } from "react";

const InputField = ({value, onChangeFunction} : {value: string, onChangeFunction: (event: ChangeEvent<HTMLInputElement>) => void}) =>{
    return(
        <input data-testid="add-task-input" className="border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" type='text' placeholder='Add task' value={value} onChange={onChangeFunction}/> 
    );
}

export default InputField;