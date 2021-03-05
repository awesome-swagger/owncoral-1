import { forwardRef, useContext } from 'react';
import { BsChevronRight } from 'react-icons/bs';
import { Box, Icon, Heading, Text } from '@chakra-ui/react';

import { BackBtn, Container } from '../../../components';
import type { DivRef } from './index';
import { StepFormContext } from './index';
import { layerStyles } from '../../../theme/layerStyles';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

const EntityType = [
  {
    value: 'Partnership',
  },
  { value: 'S Corporation' },
  { value: 'C Corporation' },
];
export const TaxClassification = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const form = useContext(StepFormContext);

    return (
      <div ref={ref}>
        <Container>
          <BackBtn handleClick={prevStep} />
          <Heading size="md" mt={8} mb={2} textAlign="left">
            Which type of Tax Classification?
          </Heading>
          <Text fontSize="md" textAlign="left" mb={8}>
            Lorem ipsum dolor sir amet
          </Text>
          {EntityType.map(({ value }) => (
            <Box
              px={6}
              py={3}
              mt={2}
              textAlign="left"
              cursor="pointer"
              pos="relative"
              key="value"
              layerStyle="selectionBox"
              bg={
                value === form?.formState?.step8?.tax_classification
                  ? layerStyles.selectionBox.selected
                  : layerStyles.selectionBox.bg
              }
              borderRadius="full"
              onClick={() => {
                form.dispatch({
                  type: 'update-form',
                  payload: {
                    step8: { tax_classification: value },
                  },
                });
                nextStep();
              }}
            >
              {value}
              <Icon
                pos="absolute"
                top="50%"
                right={4}
                transform="translateY(-50%)"
                as={BsChevronRight}
              />
            </Box>
          ))}
        </Container>
      </div>
    );
  },
);
