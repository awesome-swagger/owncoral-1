import { useCallback, forwardRef, useContext } from "react";
import { Progress, Heading, Box, Image } from "@chakra-ui/react";
import { StepFormContext } from "../../signup";
import Chevron from "../../../assets/chevron.png";
import { Container } from "../../../components/container";
import type { DivRef } from "../../signup";

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};
const netWorth = [
  {
    value: "$500k or less",
  },
  { value: "$500k - $1m" },
  { value: "$1m - $3m" },
  { value: "$3m - $5m" },
  { value: "$10m or more" },
  { value: "I prefer not to say" },
];
export const NetWorth = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const form = useContext(StepFormContext);

    const handleSubmit = useCallback((value) => {
      nextStep();
      form.dispatch({ type: "update-form", payload: { step9: value } });
    }, []);

    return (
      <div ref={ref}>
        {" "}
        <Container>
          <Box h="16px" w="16px" cursor="pointer" onClick={() => prevStep()}>
            <Image src={Chevron} />
          </Box>
          <Progress mt="32px" colorScheme="gray" size="sm" value={33} />

          <Heading
            as="h1"
            size="md"
            mt="32px"
            mb="8px"
            textAlign="left"
            letterSpacing="normal"
          >
            How much is your net worth
          </Heading>
          {netWorth.map(({ value }) => (
            <Box
              px="24px"
              py="12px"
              mt="8px"
              bg="#F3F3F3"
              color="4E504F"
              textAlign="left"
              cursor="pointer"
              onClick={() => handleSubmit(value)}
            >
              {value}
            </Box>
          ))}
        </Container>
      </div>
    );
  }
);
