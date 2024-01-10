import React, { useState } from 'react';
import AddList from './AddList';

const AddCard = ({inputs,setInputs}) => {

    const handleRemoveInput = (index) => {
        const newInputs = [...inputs];
        newInputs.splice(index, 1);
        setInputs(newInputs);
    };

return (
    <div className='item-card'>
            {inputs.map((input, index) => (
                <div className='list-card'>
                    {input}
                    <button className="add-card" onClick={(e)=>handleRemoveInput(index)}>Removee</button>
                    <AddList/>
                </div>
                ))
            }
    </div>
  );
};

export default AddCard;