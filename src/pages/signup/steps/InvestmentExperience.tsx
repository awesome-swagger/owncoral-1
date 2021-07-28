import React, { forwardRef, useCallback, useContext } from 'react';
import { Box, Heading, Icon } from '@chakra-ui/react';
import { BackBtn, Container, ProgressBar } from '../../../components';
import type { DivRef } from '../index';
import { StepFormContext } from '../index';
import { ChevronRight } from 'react-feather';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};
type experience = {
  value: number;
  label: string;
};
const experience: experience[] = [
  { value: 0, label: '0-2 years ' },
  { value: 1, label: '2-5 years ' },
  { value: 2, label: '5-10 years ' },
  { value: 3, label: '10-20 years ' },
  { value: 4, label: 'More than 20 years ' },
];

export const InvestmentExperience = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const form = useContext(StepFormContext);
    const formStep = form?.formState?.step5;

    const handleSubmit = useCallback(
      (value) => {
        form.dispatch({ type: 'update-form', payload: { step5: value } });
        nextStep();
      },
      [form.dispatch, nextStep],
    );

    return (
      <Box ref={ref} layerStyle="noSelect">
        <Container>
          <BackBtn handleClick={prevStep} />
          <ProgressBar total={7} value={1} />
          <Heading size="md" as="h4" mt={8} textAlign="left">
            How long have you been investing?
          </Heading>
          <Box mt={8}>
            {experience.map(({ value, label }) => (
              <Box
                px={6}
                py={3}
                mt={2}
                layerStyle={value === formStep ? 'selectionBox.selected' : 'selectionBox'}
                borderRadius="full"
                textAlign="left"
                cursor="pointer"
                key={value}
                onClick={() => handleSubmit(value)}
              >
                {label}
                <Icon as={ChevronRight} />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    );
  },
);
