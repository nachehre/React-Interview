import { useReducer, createContext } from "react";

const initialValue = {
  country: "Iran",
  province: "Tehran",
  gender: "female",
};

export const AppContext = createContext({
  activeStep: 0,
  formValueObject: initialValue,
  nextHandler() {},
  prevoiusHandler() {},
  formOnChangeHandler() {},
});

// const initialiState = { activeStep: 0 ,formValueObject};

const reducer = (state, action) => {
  switch (action.type) {
    case "previous":
      return { ...state, activeStep: state.activeStep - 1 };

    case "next":
      return { ...state, activeStep: state.activeStep + 1 };

    case "formValue":
      console.log(state.formValueObject);
      return {
        ...state,
        formValueObject: {
          ...state.formValueObject,
          [action.name]: action.value,
        },
      };

    default:
      return state;
  }
};

export const AppContextProvider = ({ children }) => {
  const [{ activeStep, formValueObject }, dispatch] = useReducer(reducer, {
    activeStep: 0,
    formValueObject: initialValue,
  });

  const formOnChangeHandler = (event) => {
    const { value, name } = event.target;
    dispatch({ type: "formValue", value, name: name });
  };

  const nextHandler = () => {
    dispatch({ type: "next" });
  };
  const prevoiusHandler = () => {
    dispatch({ type: "previous" });
  };

  return (
    <AppContext.Provider
      value={{
        activeStep,
        formValueObject,
        nextHandler,
        prevoiusHandler,
        formOnChangeHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
