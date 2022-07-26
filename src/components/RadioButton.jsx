import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { AppContext } from "../context/ContextProvider";
import { useContext } from "react";

export default function RadioButtonsGroup() {
  const { formValueObject, formOnChangeHandler } = useContext(AppContext);
  return (
    <FormControl>
      <FormLabel id="radio-label-id">جنسیت خود را انتخاب کنید</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        labelId="radio-label-id"
        defaultValue={formValueObject.gender}
        name="gender"
        onChange={formOnChangeHandler}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
}
