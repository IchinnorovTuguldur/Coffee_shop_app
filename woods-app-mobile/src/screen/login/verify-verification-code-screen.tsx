import { ErrorMessage, Formik } from 'formik';
import _ from 'lodash';
import React from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import * as Yup from 'yup';
import 'yup-phone';
import { useAuthentication } from '../../authentication';
import { Button, Grid, Input, Stack, Text } from '../../components';
import { useFlow } from '../../components/flow/flow';

export const VerifyVerificationCodeScreen = () => {
  const { confirmCode } = useAuthentication();
  const { onPrevious, onNext } = useFlow();

  const goBack = () => {
    onPrevious();
  };

  const handleSigningInWithNumber = async ({ verificationCode }) => {
    await confirmCode(verificationCode);
    onNext();
  };

  return (
    <Formik
      initialValues={{ verificationCode: '' }}
      validationSchema={Yup.object().shape({
        verificationCode: Yup.string()
          .test('len', 'Must be exactly 6 characters', (val) => val?.length === 6)
          .required(),
      })}
      onSubmit={handleSigningInWithNumber}
    >
      {({ handleBlur, handleChange, isSubmitting, handleSubmit, isValid, dirty, values, errors }) => (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
          <Stack size={4}>
            <Text alignment="center">Please enter the verification code</Text>
            <Input onChangeText={handleChange('verificationCode')} onBlur={handleBlur('verificationCode')} value={values.verificationCode} />
            {!_.isNil(errors) && (
              <Text type="caption2.light" color="red.main">
                <ErrorMessage name="verificationCode" />
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
