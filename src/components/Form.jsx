import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { ColorlibConnector, ColorlibStepIcon } from "./StepperStyle";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Confirm from "./Confirm";
import { useContext } from "react";
import { AppContext } from "../context/ContextProvider";

const FormStep = () => {
  const { activeStep } = useContext(AppContext);

  const steps = ["Step1", "Step2", "Step4"];
  const handleSteps = (step) => {
    switch (step) {
      case 0:
        return <Step1 />;
      case 1:
        return <Step2 />;
      case 2:
        return <Confirm />;
      default:
        throw new Error("Unknown step");
    }
  };
  return (
    <Stack sx={{ width: "100%" }} spacing={4}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className="formContainer">{handleSteps(activeStep)}</div>
    </Stack>
  );
};

export default FormStep;
