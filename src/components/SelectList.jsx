import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AppContext } from "../context/ContextProvider";
import { useContext, useState, useEffect } from "react";

export default function BasicSelect() {
  const iranProvinces = ["Shiraz", "Tehran", "Tabriz"];
  const japanProvinces = ["X", "Y", "Z"];
  const turkeyProvinces = ["R", "W", "Y"];
  const { formValueObject, formOnChangeHandler } = useContext(AppContext);
  const [countryState, setcountryState] = useState(formValueObject.country);
  const [dataState, setDataState] = useState([]);

  const fetchData = () => {
    //https://my-json-server.typicode.com/nachehre/React-Interview/countries
    //http://localhost:8080/countries
    fetch(
      "https://my-json-server.typicode.com/nachehre/React-Interview/countries"
    )
      .then((response) => response.json())
      .then((data) => setDataState(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(dataState);
  const countryHandler = (e) => {
    setcountryState(e.target.value);

    formOnChangeHandler(e);
  };

  const countryItems = (country) => {
    switch (country) {
      case "Iran":
        return iranProvinces;
      case "Japan":
        return japanProvinces;
      case "Turkey":
        return turkeyProvinces;
      default:
        throw new Error("Unknown option");
    }
  };

  console.log(countryItems(countryState));
  return (
    <Box className="formContainer" sx={{ minWidth: 50 }}>
      <FormControl fullWidth>
        <InputLabel id="country-label-id">Country</InputLabel>
        <Select
          labelId="country-label-id"
          id="country"
          value={formValueObject.country}
          label="Country"
          onChange={countryHandler}
          name="country"
        >
          {dataState.map((item) => (
            <MenuItem key={item.name} value={item.name}>
              {item.name}
            </MenuItem>
          ))}
          {/* <MenuItem value="Iran">Iran</MenuItem>
          <MenuItem value="Turkey">Turkey</MenuItem>
          <MenuItem value="Japan">Japan</MenuItem> */}
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
          {countryItems(countryState).map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
