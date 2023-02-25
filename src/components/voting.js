import React, { useState } from "react";
import Button from "@mui/material/Button";

const VotingComponent = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handlePrediction = () => {
    console.log("Making prediction for option:", selectedOption);
    // Your code to make prediction here...
  };

  return (
    <div>
      <h4>Make a prediction</h4>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleOptionSelect(option)}
            style={{
              backgroundColor: "#f8f8f8",
              borderRadius: "5px",
              color: selectedOption === option ? "#688ff6" : "black",
              border: selectedOption === option ? "2px solid #688ff6" : "none",
              padding: "10px",
              margin: "5px",
              cursor: "pointer",
            }}
          >
            {option}
          </button>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>

      <Button disabled={!selectedOption}
        onClick={handlePrediction} component="a" variant="contained" color="primary">
Make a prediction                  </Button>
    
   </div>
    </div>
  );
};

export default VotingComponent;
