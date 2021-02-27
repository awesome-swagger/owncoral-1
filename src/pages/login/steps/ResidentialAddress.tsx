import { forwardRef, useContext, ChangeEvent, ReactNode } from 'react';
import { Heading, Input, Text } from '@chakra-ui/react';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { BackBtn, Container, SubmitBtn } from '../../../components';
import type { DivRef } from '../steps';
import { StepFormContext } from '../steps';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const ResidentialAddress = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const form = useContext(StepFormContext);
    const {
      ready,
      value,
      suggestions: { status, data },
      setValue,
      clearSuggestions,
    } = usePlacesAutocomplete({
      requestOptions: {},
      debounce: 300,
    });
    const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
      setValue(e.target.value);
    };

    const handleSelect = ({ description }: any) => () => {
      setValue(description, false);
      clearSuggestions();
      getGeocode({ address: description })
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => {
          console.log('📍 Coordinates: ', { lat, lng });
        })
        .catch((error) => {
          console.log('😱 Error: ', error);
        });
    };
    const renderSuggestions = () =>
      data.map((suggestion) => {
        const {
          place_id,
          structured_formatting: { main_text, secondary_text },
        } = suggestion;

        return (
          <li key={place_id} onClick={() => handleSelect(suggestion)}>
            <strong>{main_text}</strong> <small>{secondary_text}</small>
          </li>
        );
      });
    return (
      <div ref={ref}>
        <Container>
          <BackBtn handleClick={prevStep} />
          <Heading size="md" mt="2rem" letterSpacing="normal">
            What’s your Residential address?
          </Heading>
          <Text fontSize="1rem" m="0 !important">
            Lorem ipsum dolor sir amet
          </Text>
          <Input
            placeholder="Residental Address"
            h="3rem"
            bg="#F3F3F3"
            mt="2rem"
            value={value}
            onChange={handleInput}
            disabled={!ready}
          />
          {status === 'OK' && <ul>{renderSuggestions()}</ul>}
          <SubmitBtn label="Continue" />
        </Container>
      </div>
    );
  },
);
