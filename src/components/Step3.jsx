
import { Button } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../context/ContextProvider";
const Step3=()=>{
    const{prevoiusHandler, nextHandler}=useContext(AppContext);
    
    return <div>
        <Button onClick={prevoiusHandler}> previous</Button>
        <Button onClick={nextHandler}> next</Button>
           </div>
}

export default Step3;