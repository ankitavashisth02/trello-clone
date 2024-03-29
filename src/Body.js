import React, { useState } from "react";
import AddCard from "./AddCard";

const Body = ({modal,setModal}) => {
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
    <div className="main-body">

      <div className="nav-body">
        My Trello Board
        &nbsp;&nbsp;&nbsp;&nbsp;
        {<i class="fa-regular fa-star"></i>}
        &nbsp;&nbsp;&nbsp;&nbsp;
        {<i class="fa-solid fa-user-plus"></i>}
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button className="body-add-card">
        {<i class="fa-solid fa-chart-simple"></i>}
        Board</button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        {<i class="fa-solid fa-caret-down"></i>}
        &nbsp;&nbsp;&nbsp;&nbsp;
      </div>

      <div className="body">
        {showComponent && <AddCard inputs={inputs} setInputs={setInputs} modal={modal} setModal={setModal}/>}
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

    </div>
  );
};

export default Body;
