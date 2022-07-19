import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { ColorlibConnector, ColorlibStepIcon } from './StepperStyle';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Confirm from './Confirm';
const FormStep =()=>{
    const steps = ['Step1', 'Step2', 'Step3', 'Step4'];
    const handleSteps = (step) => {
        switch (step) {
          case 1:
            return <Step1/>
          case 2:
            return <Step2/>
          case 3:
            return <Step3/>
          case 4:
                return <Confirm/>
          default:
            throw new Error('Unknown step')
        }
      }

    return (
        <Stack sx={{ width: '100%' }} spacing={4}>
  
        <Stepper alternativeLabel activeStep={1} connector={<ColorlibConnector />}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {handleSteps(3)}
      </Stack>
    );
}

export default FormStep;