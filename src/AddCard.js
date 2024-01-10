import React, { useState } from 'react';
import AddList from './AddList';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const AddCard = ({inputs,setInputs}) => {

    const handleRemoveInput = (index) => {
        const newInputs = [...inputs];
        newInputs.splice(index, 1);
        setInputs(newInputs);
    };

return (
    <DragDropContext >
    <Droppable droppableId='item-card'>
    {(provided)=>(
        <div className='item-card' {...provided.droppableProps} ref={provided.innerRef}>
            {inputs.map((input, index) => (
                <Draggable key={input} draggableId={input} index={index}>
                {(provided)=>(
                    <div className='list-card' key={index} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    {input}
                    <button className="add-card" onClick={(e)=>handleRemoveInput(index)}>Remove</button>
                    <AddList/>
                </div>
                )}
                </Draggable>
                ))
            }
            {provided.placeholder}
    </div>
    )}
    
    </Droppable>
    </DragDropContext>
  );
};

export default AddCard;