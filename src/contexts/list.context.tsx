import React, { createContext, useContext, useState, useEffect } from "react";

type ToDoTask = {
    id: number;
    task: string; 
    completed: boolean;
};

const addItem = (listItems: ToDoTask[], toDoItem: string) => {
    const newItemToAdd: ToDoTask = { id: Date.now(), task: toDoItem, completed: false};
    return [...listItems, newItemToAdd];
};

const editItem = (listItems: ToDoTask[], itemToEditId: number, newItem: string) => {
    const foundItemToEdit = listItems.find((listItem) => listItem.id === itemToEditId);

    if(foundItemToEdit){
        return listItems.map(
            (listItem) => listItem.id === foundItemToEdit.id ? {...listItem, task: newItem} : listItem
        )
    }
    
    return listItems;
};


const removeItem = (listItems: ToDoTask[], itemToRemove: ToDoTask) => {
    const foundItemToRemove = listItems.find((listItem) => listItem.id === itemToRemove.id);

    if(foundItemToRemove){ 
       return listItems.filter(listItem => listItem.id !== foundItemToRemove.id);
    }

    return listItems;
};

const markAsCompleted = (listItems: ToDoTask[], taskCompleted: ToDoTask) => {
    const foundCompletedTask = listItems.find((listItem) => listItem.id === taskCompleted.id);

    if(foundCompletedTask && foundCompletedTask.completed){
        return listItems.map(
            (listItem) => listItem.id === taskCompleted.id ? {...listItem, completed: false} : listItem
        )
    } else {
        return listItems.map(
            (listItem) => listItem.id === taskCompleted.id ? {...listItem, completed: true} : listItem
        )
    }
};

type ListContextType = {
    listItems: ToDoTask[];
    countCompletedTasks: number;
    countUncompletedTasks: number;
    addItemToList: (toDoItem: string) => void;
    editItemFromList: (itemToEditId: number, newItem: string) => void;
    removeItemFromList: (itemToRemove: ToDoTask) => void;
    clearList: () => void;
    completeTaskToggle: (taskCompleted: ToDoTask) => void;
}

export const ListContext = createContext<ListContextType>({
    listItems: [],
    countCompletedTasks: 0,
    countUncompletedTasks:0,
    addItemToList: () => {},
    editItemFromList: () => {},
    removeItemFromList: () => {},
    clearList: () => {},
    completeTaskToggle: () => {}
});

export const ListProvider = ({children}: any) => {
    const [listItems, setListItems] = useState<ToDoTask[]>([]);

    useEffect(() => {
        const storedList = localStorage.getItem('toDoList');
        if(storedList) {
            setListItems(JSON.parse(storedList));
        }

        console.log('in use effect 1');
    }, []);

    useEffect(() => {
        if(listItems.length === 0) return 
        localStorage.setItem('toDoList', JSON.stringify(listItems));
    }, [listItems]);

    const countCompletedTasks = listItems.reduce((accumulator: number, item: ToDoTask) => {
        if(item.completed){ 
            accumulator += 1;
        } 
        return accumulator;

    }, 0);

    const countUncompletedTasks = listItems.length - countCompletedTasks;
    
    const addItemToList = (toDoItem: string) => {
        setListItems(addItem(listItems, toDoItem));
    };
    
    const editItemFromList = (itemToEditId: number, newItem: string) => {
        setListItems(editItem(listItems, itemToEditId, newItem));
    };

    const removeItemFromList = (itemToRemove: ToDoTask) => {
        setListItems(removeItem(listItems, itemToRemove));
    };

    const clearList = () => {
        setListItems([]);
    };

    const completeTaskToggle = (taskCompleted: ToDoTask) => {
        setListItems(markAsCompleted(listItems, taskCompleted));
    };

    const value = { listItems, addItemToList, editItemFromList, removeItemFromList, clearList, completeTaskToggle, countCompletedTasks, countUncompletedTasks };
    
    return (
        <ListContext.Provider value={value}>{children}</ListContext.Provider>
    )
};

export const useListCurrentState = () => useContext(ListContext);