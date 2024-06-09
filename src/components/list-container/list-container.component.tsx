import ListItem from '../list-item/list-item.component'
import { useListCurrentState } from '../../contexts/list.context';
import React from 'react';

const ListContainer = () => {
    
    const { listItems } = useListCurrentState();

    return(
        <div className="space-y-2">
           {listItems.map((listItem,index) => (
                <ListItem key={listItem.id} item={listItem} index={index}/>
            ))}
        </div>
    );
};

export default ListContainer;