import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { ColorlibConnector, ColorlibStepIcon } from './StepperStyle';
const FormStep =()=>{
    const steps = ['Step1', 'Step2', 'Step3', 'Step4'];
    return (
        <Stack sx={{ width: '100%' }} spacing={4}>
  
        <Stepper alternativeLabel activeStep={1} connector={<ColorlibConnector />}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>
    );
}

export default FormStep;