import InputField from '../input/input-field.component';
import Button from '../button/button.component';
import { useListCurrentState } from '../../contexts/list.context';
import { ChangeEvent, useState } from 'react';
import React from 'react';

const InputContainer = () => {

    const { addItemToList, clearList } = useListCurrentState();
    const [inputValue, setInputValue] = useState<string>('');

    const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };


    const addItemToListHandler = () => {
        if (inputValue.trim() !== '') {
            addItemToList(inputValue);
            setInputValue('');
        }
    };

    return(
        <div>
            <InputField value={inputValue} onChangeFunction={inputChangeHandler}/>
            <Button attribution='Add' onClickFunction={addItemToListHandler} />
            <Button attribution='Clear List' onClickFunction={clearList} />
        </div>
    );
}

export default InputContainer;