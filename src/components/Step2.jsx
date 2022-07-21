import { Button } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../context/ContextProvider";
import RadioButtonsGroup from "./RadioButton";
const Step2 = () => {
  const { prevoiusHandler, nextHandler } = useContext(AppContext);

  return (
    <>
      <RadioButtonsGroup />

      <div>
        <Button onClick={prevoiusHandler} variant="contained" sx={{ ml: 1 }}>
          previous
        </Button>
        <Button variant="contained" onClick={nextHandler}>
          next
        </Button>
      </div>
    </>
  );
};

export default Step2;
