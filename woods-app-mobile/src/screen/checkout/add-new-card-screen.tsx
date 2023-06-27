import { useNavigation } from '@react-navigation/core';
import { Formik } from 'formik';
import _ from 'lodash';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Yup from 'yup';
import { BackIcon, CrediCardIcon } from '../../assets';
import { useAuthentication } from '../../authentication';
import { Border, Button, Grid, Input, MaskedInput, Overlay, Padding, SafeAreaScreen, Stack, Text } from '../../components';
import { useFirestoreCollection } from '../../firebase/firebase';
import functions from '@react-native-firebase/functions';

export const AddNewCardScreen = () => {
  const navigation = useNavigation();
  const { user } = useAuthentication();
  const { createRecord } = useFirestoreCollection(['users', user?.uid, 'paymentMethods']);
  const [initialFormSubmitted, setInitialFormSubmitted] = useState(false);

  const goBack = () => navigation.goBack();
  const handleAddNewCard = async (value) => {
    const { cardNumber, name, cvc, validThru, addressZip } = value;
    const [expMonth, expYear] = validThru.split('/');
    const params = {
      number: cardNumber,
      expMonth: Number(expMonth),
      expYear: Number(expYear),
      cvc,
      name,
      addressZip,
    };
    goBack();
  };

  return (
    <Formik
      initialValues={{ name: 'Shagai Nyamdorj', cardNumber: '4242424242424242', validThru: '11/25', cvc: '123', addressZip: '98004' }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required('Required'),
        cardNumber: Yup.string()
          .test('len', 'Required', (val) => val?.replace(/\s/g, '').length === 16)
          .required('Required'),
        validThru: Yup.string()
          .test('len', 'Required', (val) => val?.length === 5)
          .required(),
        cvc: Yup.string()
          .test('len', 'Required', (val) => val?.length === 3)
          .required(),
        addressZip: Yup.string()
          .test('len', 'Required', (val) => val?.length === 5)
          .required(),
      })}
      enableReinitialize={true}
      validateOnMount={true}
      validateOnChange={initialFormSubmitted}
      onSubmit={handleAddNewCard}
    >
      {({ handleBlur, handleChange, isSubmitting, handleSubmit, isValid, values, errors }) => (
        <SafeAreaScreen>
          <Stack flex={1} justifyContent="space-between">
            <Stack size={5}>
              <Border size={[0, 0, 1, 0]} color="gray.darker">
                <Padding size={[3, 0, 5, 0]}>
                  <Text alignment="center" type="paragraph.bold">
                    Add card
                  </Text>
                  <Overlay size={[0, undefined, undefined, 4]}>
                    <TouchableOpacity onPress={goBack}>
                      <BackIcon />
                    </TouchableOpacity>
                  </Overlay>
                </Padding>
              </Border>
              <Padding size={[0, 4]}>
                <Stack size={4}>
                  <Text type="caption2.bold">To pay for your delicious drink, add a credit or debit card.</Text>

                  <Stack size={1}>
                    <Text type="footer1.bold">Name on card</Text>
                    <Input
                      required={!_.isNil(errors.name)}
                      onChangeText={handleChange('name')}
                      autoFocus
                      onBlur={handleBlur('name')}
                      value={values.name}
                    />
                    {!_.isNil(errors.name) && (
                      <Text type="footer2.light" color="red.main">
                        {errors.name}
                      </Text>
                    )}
                  </Stack>

                  <Stack size={1}>
                    <Text type="footer1.bold">Card number</Text>
                    <MaskedInput
                      required={!_.isNil(errors.cardNumber)}
                      leftIcon={<CrediCardIcon size={17} color={!_.isNil(errors.cardNumber) ? 'red.main' : 'black.main'} />}
                      maxLength={16}
                      placeholder="####-####-####-####"
                      mask={'[0000] [0000] [0000] [0000]'}
                      onChangeText={handleChange('cardNumber')}
                      autoFocus
                      onBlur={handleBlur('cardNumber')}
                      value={values.cardNumber}
                    />
                    {!_.isNil(errors.cardNumber) && (
                      <Text type="footer2.light" color="red.main">
                        {errors.cardNumber}
                      </Text>
                    )}
                  </Stack>

                  <Grid columns={3} gap={4}>
                    <Stack size={1}>
                      <Text type="footer1.bold">Valid thru</Text>
                      <MaskedInput
                        required={!_.isNil(errors.validThru)}
                        mask={'[00]/[00]'}
                        placeholder="MM/YY"
                        onChangeText={handleChange('validThru')}
                        autoFocus
                        onBlur={handleBlur('validThru')}
                        maxLength={4}
                        value={values.validThru}
                      />
                      {!_.isNil(errors.validThru) && (
                        <Text type="footer2.light" color="red.main">
                          {errors.validThru}
                        </Text>
                      )}
                    </Stack>
                    <Stack size={1}>
                      <Text type="footer1.bold">CVV</Text>
                      <Input
                        required={!_.isNil(errors.cvc)}
                        onChangeText={handleChange('cvc')}
                        autoFocus
                        onBlur={handleBlur('cvc')}
                        value={values.cvc}
                        maxLength={3}
                      />
                      {!_.isNil(errors.cvc) && (
                        <Text type="footer2.light" color="red.main">
                          {errors.cvc}
                        </Text>
                      )}
                    </Stack>
                    <Stack size={1}>
                      <Text type="footer1.bold">Zip</Text>
                      <Input
                        required={!_.isNil(errors.addressZip)}
                        onChangeText={handleChange('addressZip')}
                        autoFocus
                        onBlur={handleBlur('addressZip')}
                        value={values.addressZip}
                        placeholder="#####"
                        maxLength={5}
                      />
                      {!_.isNil(errors.addressZip) && (
                        <Text type="footer2.light" color="red.main">
                          {errors.addressZip}
                        </Text>
                      )}
                    </Stack>
                  </Grid>
                </Stack>
              </Padding>
            </Stack>

            <Padding size={[0, 4, 5, 4]}>
              <Button
                type="secondary"
                loading={isSubmitting}
                onClick={() => {
                  setInitialFormSubmitted(true);
                  handleSubmit();
                }}
                disabled={!isValid}
              >
                Save
              </Button>
            </Padding>
          </Stack>
        </SafeAreaScreen>
      )}
    </Formik>
  );
};
