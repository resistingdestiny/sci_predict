import React, { useState } from "react";
import Button from "@mui/material/Button";

const VotingComponent = ({ useStyles, options }) => {
  const classes = useStyles();

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
              marginTop: "2px",
              cursor: "pointer",
              fontWeight: "bold", // Add this line

            }}
          >
            {option}
          </button>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>

      <Button disabled={!selectedOption}
        onClick={handlePrediction} component="a" variant="contained" sx={{
          backgroundImage: 'linear-gradient(85.9deg, #1EBEA5 -14.21%, #00B5C4 18.25%, #00A8E6 52.49%, #0096FD 81.67%, #157AFB 111.44%)',
          color: 'white',
          mt: 2,
        }} >
Make a prediction                  </Button>
    
   </div>
    </div>
  );
};

export default VotingComponent;
