import { useContext } from 'react';
import { Image, Button, Heading, Text } from '@chakra-ui/react';
import { BackBtn, FlexContainer } from '../../../components';
import Logo from '../../../assets/coral_logo_with_shadow.png';
import { StepFormContext } from '../index';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const WelcomeCoral = ({ nextStep, prevStep }: stepProps) => {
  const { formState } = useContext(StepFormContext);

  function capitalizeFirstLetter(val: string) {
    return val.charAt(0).toUpperCase() + val.slice(1);
  }
  const firstName = capitalizeFirstLetter(formState?.step1?.firstName);
  const lastName = capitalizeFirstLetter(formState?.step1?.lastName);

  const fullName = `${firstName}  ${lastName}`;

  return (
    <FlexContainer layerStyle="noSelect">
      <BackBtn handleClick={prevStep} top={6} left={6} pos="absolute" />
      {/* <Box h={40} w={40} borderRadius="50%" bg="#d2d2d1" /> */}
      <Image src={Logo} alt="logo" h="200px" />
      <Heading size="md" as="h4" textAlign="center">
        Welcome to Coral, {fullName}!
      </Heading>
      <Text fontSize="md" textAlign="center">
        On the following screens, we are going to ask you a few questions to get you better. There
        are no good/bad answers.
      </Text>
      <Button
        pos="absolute"
        bottom={10}
        left={6}
        w="calc(100% - 3rem)"
        h={12}
        cursor="pointer"
        onClick={nextStep}
      >
        Continue
      </Button>
    </FlexContainer>
  );
};
