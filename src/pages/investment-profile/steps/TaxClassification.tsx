import { forwardRef, useContext } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Box, Icon, Text } from '@chakra-ui/react';

import { BackBtn, Container } from '../../../components';
import { Title1 } from '../../../components/text';
import type { DivRef } from './index';
import { StepFormContext } from './index';

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
          <Title1 mt={8} mb={2} textAlign="left">
            Which type of Tax Classification?
          </Title1>
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
              layerStyle={
                value === form?.formState?.step8?.tax_classification
                  ? 'selectionBox.selected'
                  : 'selectionBox'
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
                as={FiChevronRight}
              />
            </Box>
          ))}
        </Container>
      </div>
    );
  },
);
