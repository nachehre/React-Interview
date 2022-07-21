import { Button } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../context/ContextProvider";
import RadioButtonsGroup from "./RadioButton";
const Step2 = () => {
  const { prevoiusHandler, nextHandler } = useContext(AppContext);

  return (
    <div>
      <RadioButtonsGroup />

      <Button onClick={prevoiusHandler}> previous</Button>
      <Button onClick={nextHandler}> next</Button>
    </div>
  );
};

export default Step2;
