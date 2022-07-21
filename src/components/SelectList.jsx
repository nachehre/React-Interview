import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AppContext } from "../context/ContextProvider";

export default function BasicSelect() {
  const { formValueObject, formOnChangeHandler } = React.useContext(AppContext);

  return (
    <Box sx={{ minWidth: 50 }}>
      <FormControl fullWidth>
        <InputLabel id="country-label-id">Country</InputLabel>
        <Select
          labelId="country-label-id"
          id="country"
          value={formValueObject.country}
          label="Country"
          onChange={formOnChangeHandler}
          name="country"
        >
          <MenuItem value="Iran">Iran</MenuItem>
          <MenuItem value="Turkey">Turkey</MenuItem>
          <MenuItem value="Japan">Japan</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="province-label-id">Province</InputLabel>
        <Select
          labelId="province-label-id"
          id="province"
          value={formValueObject.province}
          label="Province"
          onChange={formOnChangeHandler}
          name="province"
        >
          <MenuItem value="Tehran">Tehran</MenuItem>
          <MenuItem value="Shiraz">Shiraz</MenuItem>
          <MenuItem value="Qom">Qom</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
