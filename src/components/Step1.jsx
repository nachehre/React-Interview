import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../context/ContextProvider";
import BasicSelect from "./SelectList";

const Step1 = () => {
  const { nextHandler } = useContext(AppContext);

  return (
    <>
      <BasicSelect />

      <Button variant="contained" onClick={nextHandler}>
        Next
      </Button>
    </>
  );
};

export default Step1;
