import Button from '../button/button.component';
import { useListCurrentState } from '../../contexts/list.context';
import React, { useState } from 'react';

type ToDoTask = {
    id: number;
    task: string; 
    completed: boolean;
};

const ListItem = ({item, index}: {item: ToDoTask, index: number}) => {
    
    const [isEditing, setIsEditing] = useState(false);
    const [editedInput, setEditedInput] = useState(item.task);
    const { editItemFromList, removeItemFromList, completeTaskToggle } = useListCurrentState();

    const saveEdit = () => {
        editItemFromList(item.id, editedInput);
        setIsEditing(false);
    }

    return(
        <div className="flex justify-between items-center p-1 bg-slate-200 rounded-md">
            <input data-testid={`taskCheckbox-${index}`} type="checkbox" checked={item.completed} onChange={() => completeTaskToggle(item)} />
            {isEditing ? (
                <input className="mr-auto ml-2 bg-slate-100" data-testid={`inputListItem-${index}`} type="text" value={editedInput} disabled={!isEditing} onChange={(event) => setEditedInput(event.target.value)}/>
            ) : (<input className="mr-auto ml-2" data-testid={`inputListItem-${index}`} type="text" value={item.task} disabled={!isEditing} />)}

            {isEditing ? (
                <Button attribution='Save' onClickFunction={saveEdit} />
            ) : (
                <Button attribution='Edit' onClickFunction={() => setIsEditing(true)} />
            )}
            <Button attribution='Delete' onClickFunction={() => removeItemFromList(item)}  />
        </div>
    );
};

export default ListItem;