import { useReducer, createContext } from "react";

export const AppContext=createContext({activeStep:0, nextHandler(){}, prevoiusHandler(){}});

const initialiState={activeStep:0};
const reducer=(state, action)=>{
    switch (action.type) {
        case "previous":
           return{...state,activeStep:state.activeStep-1}
                  
        case "next":
            return{...state,activeStep:state.activeStep+1}
                 
    
        default:
            return state;
           
    }
}



export const AppContextProvider=({children})=>{
     const[{activeStep}, dispatch]= useReducer(reducer, initialiState);
     const nextHandler=()=>{
      
       dispatch({type:"next"});
     }
     const prevoiusHandler=()=>{
        dispatch({type:"previous"});
      }

    return <AppContext.Provider value={{activeStep, nextHandler, prevoiusHandler}}>{children}</AppContext.Provider>
}



