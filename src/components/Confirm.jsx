import { Button } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../context/ContextProvider";
const Confirm=()=>{
    const{prevoiusHandler}=useContext(AppContext);
    return <div>
        <Button onClick={prevoiusHandler}> previous</Button>
                     
           </div>
}

export default Confirm;