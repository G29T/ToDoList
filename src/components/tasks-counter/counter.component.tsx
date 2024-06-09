import React from 'react';
import { useListCurrentState } from '../../contexts/list.context';

const Counter = () => {
    
    const { countCompletedTasks, countUncompletedTasks} = useListCurrentState();

    return(
        <div className="space-y-2">
            <p data-testid="completed">Tasks completed: {countCompletedTasks}</p>
            <p data-testid="todo">Tasks to do: {countUncompletedTasks}</p>
        </div>
    );
};

export default Counter;