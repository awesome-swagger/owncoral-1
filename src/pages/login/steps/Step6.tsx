import { forwardRef, useContext } from "react";
import { StepFormContext } from "../steps";
import { BackBtn } from "../../../components/backBtn";
import { Container } from "../../../components/container";
import { Heading, Button, Input, Text } from "@chakra-ui/react";
import type { DivRef } from "../steps";

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const Step6 = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const form = useContext(StepFormContext);

    return (
      <div ref={ref}>
        <Container>
          <BackBtn handleClick={prevStep} />
          <Heading
            size="md"
            mt="32px"
            mb="8px"
            textAlign="left"
            letterSpacing="normal"
          >
            What is your Entity Name
          </Heading>

          <Input
            type="text"
            placeholder="Entity Name"
            h="48px"
            bg="#F3F3F3"
            mt="32px"
          />

          <Button
            pos="absolute"
            bottom="42px"
            left="24px"
            w="calc(100% - 48px)"
            h="48px"
            bg="#4E504F"
            color="#fff"
            onClick={nextStep}
          >
            Continue
          </Button>
        </Container>
      </div>
    );
  }
);
