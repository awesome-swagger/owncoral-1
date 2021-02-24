import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { forwardRef } from 'react';

import { BackBtn } from '../../../components/backBtn';
import { FlexContainer } from '../../../components/container';
import type { DivRef } from '../index';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const VerifyEmail = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    return (
      <Box ref={ref} layerStyle="noSelect">
        <FlexContainer>
          <BackBtn pos="absolute" handleClick={prevStep} />

          <Box h="160px" w="160px" borderRadius="50%" bg="#d2d2d1" />
          <Heading size="md" as="h4" mt="32px">
            Please verify your email address
          </Heading>
          <Text fontSize="1rem" textAlign="center">
            An email has been sent to <b>johndoe@gmail.com</b>. Please follow the instructions in
            the verification email to finish creating your Coral account.
          </Text>

          <Text
            pos="absolute"
            bottom="106px"
            left="24px"
            w="calc(100% - 48px)"
            fontSize="0.85rem"
            textAlign="center"
          >
            Didn’t receive an email?
          </Text>
          <Button
            pos="absolute"
            bottom="42px"
            left="24px"
            w="calc(100% - 48px)"
            h="48px"
            variant="outline"
            onClick={nextStep}
          >
            Resend verification email
          </Button>
        </FlexContainer>
      </Box>
    );
  },
);
