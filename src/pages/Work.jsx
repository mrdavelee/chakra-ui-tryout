import React from 'react';
import { Box, Step, StepIcon, StepDescription, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, Text } from '@chakra-ui/react';
// import { StepIcon } from '@chakra-ui/icons'


export const Work = () => {
    const steps = [
        { title: 'Proagrica', dates: 'June 2018 - April 2023', description: 'Contact Info' },
        { title: 'Abacus e-Media', dates: 'November 2015 - June 2018', description: 'Date & Time' },
        { title: 'Brilens', dates: 'August 2013 - November 2015', description: 'Select Rooms' },
      ]
      
      
        
      
        return (
          <Stepper orientation='vertical' height='400px' size='sm' gap='0'>
            {steps.map((step, index) => (
              <Step key={index}>
                <StepIndicator>
                  <StepStatus
                    complete={<StepIcon />}
                    incomplete={<StepNumber />}
                    active={<StepNumber />}
                  />
                </StepIndicator>
      
                <Box flexShrink='0'>
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.dates}</StepDescription>
                  <Text>{step.description}</Text>
                </Box>
      
                <StepSeparator />
              </Step>
            ))}
          </Stepper>
        )
      
    }