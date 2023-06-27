import { ErrorMessage, Formik } from 'formik';
import _ from 'lodash';
import React from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import * as Yup from 'yup';
import 'yup-phone';
import { useAuthentication } from '../../authentication';
import { Button, Grid, Input, Stack, Text } from '../../components';
import { useFlow } from '../../components/flow/flow';

export const VerifyPhoneNumberScreen = () => {
  const { signInWithPhoneNumber } = useAuthentication();
  const { onNext, onPrevious } = useFlow();

  const goBack = () => {
    onPrevious();
  };

  const handleSigningInWithNumber = async ({ phoneNumber }) => {
    await signInWithPhoneNumber(phoneNumber);
    onNext();
  };

  return (
    <Formik
      initialValues={{ phoneNumber: '' }}
      validationSchema={Yup.object().shape({
        phoneNumber: Yup.string().phone().required(),
      })}
      onSubmit={handleSigningInWithNumber}
    >
      {({ handleBlur, handleChange, isSubmitting, handleSubmit, isValid, dirty, values, errors }) => (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
          <Stack size={4}>
            <Text alignment="center">Please enter your phone number</Text>
            <Input onChangeText={handleChange('phoneNumber')} autoFocus onBlur={handleBlur('phoneNumber')} value={values.phoneNumber} />
            {!_.isNil(errors) && (
              <Text type="caption2.light" color="red.main">
                <ErrorMessage name="phoneNumber" />
              </Text>
            )}
          </Stack>
          <KeyboardAvoidingView keyboardVerticalOffset={120} behavior="padding">
            <Grid columns={2} gap={4}>
              <Button onClick={goBack}>Cancel</Button>
              <Button loading={isSubmitting} onClick={handleSubmit} disabled={!isValid || !dirty}>
                Next
              </Button>
            </Grid>
          </KeyboardAvoidingView>
        </View>
      )}
    </Formik>
  );
};
