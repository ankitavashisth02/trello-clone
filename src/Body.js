import React, { useState } from "react";
import AddCard from "./AddCard";

const Body = () => {
  const [showComponent, setShowComponent] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [inputs, setInputs] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddInput = () => {
    if (inputValue.trim() !== "") {
      setInputs([...inputs, inputValue]);
      setInputValue("");
    }
  };

  const handleClick = () => {
    setShowComponent(true);
  };

  return (
    <div className="body">
      {showComponent && <AddCard inputs={inputs} setInputs={setInputs} />}
      <div className="add-card-div">
        <div>
          {showComponent && (
            <React.Fragment>
              <input
                type="text"
                className="input-field"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="add title.."
              />
              <button className="add-card" onClick={handleAddInput}>Add</button>
            </React.Fragment>
          )}
        </div>
        <button className="add-card" onClick={handleClick}>
          + Add another list
        </button>
      </div>
    </div>
  );
};

export default Body;
