import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../context/ContextProvider";
import BasicSelect from "./SelectList";

const Step1=()=>{
    const{nextHandler}=useContext(AppContext);
   
    return <div>
                        <BasicSelect/>
                        <BasicSelect/>

                      <Button onClick={nextHandler}> تایید مرحله ی اول</Button>
           </div>
}

export default Step1;