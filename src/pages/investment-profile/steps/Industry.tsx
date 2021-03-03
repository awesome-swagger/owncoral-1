import { forwardRef, useContext, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  BackBtn,
  Container,
  SubmitBtn,
  HeadingTypography,
  TextTypography,
  InputField,
} from '../../../components';
import type { FormRef } from './index';
import { StepFormContext } from './index';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const Industry = forwardRef<FormRef, stepProps>(({ nextStep, prevStep }: stepProps, ref) => {
  const { handleSubmit, setValue, register } = useForm();
  const form = useContext(StepFormContext);

  const onSubmit = useCallback((data) => {
    form.dispatch({
      type: 'update-form',
      payload: { step10: data },
    });
    nextStep();
  }, []);

  useEffect(() => {
    const formState = form.formState;

    setValue('industry', formState?.step10?.industry || '');
  }, []);
  return (
    <form onSubmit={handleSubmit(onSubmit)} ref={ref}>
      <Container>
        <BackBtn handleClick={prevStep} />
        <HeadingTypography size="md" mt={8} mb={2} textAlign="left">
          What’s your Industry?
        </HeadingTypography>
        <TextTypography fontSize="md" textAlign="left">
          Lorem ipsum dolor sir amet
        </TextTypography>
        <InputField
          name="industry"
          ref={register({ required: true })}
          type="text"
          placeholder="Industry"
          h={12}
          bg="#F3F3F3"
          mt={8}
        />

        <SubmitBtn label="Continue" />
      </Container>
    </form>
  );
});
