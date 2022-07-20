import { Button } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../context/ContextProvider";

const Step1=()=>{
    const{nextHandler}=useContext(AppContext);
   
    return <div>
                      <Button onClick={nextHandler}> تایید مرحله ی اول</Button>
           </div>
}

export default Step1;