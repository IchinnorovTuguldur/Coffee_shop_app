import { useNavigation, useRoute } from '@react-navigation/core';
import { Formik } from 'formik';
import _ from 'lodash';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Yup from 'yup';
import { BackIcon, CrediCardIcon } from '../../assets';
import { useAuthentication } from '../../authentication';
import { Border, Button, Grid, Input, MaskedInput, Overlay, Padding, SafeAreaScreen, Stack, Text } from '../../components';
import { useFirestoreDocument } from '../../firebase/firebase';

export const UpdateCardInformationScreen = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  const { id: cardDocumentId } = params || { id: '' };

  const { user } = useAuthentication();

  const { data: cardInfo, updateRecord } = useFirestoreDocument(['users', user?.uid, 'paymentMethods', cardDocumentId]);

  const goBack = () => navigation.goBack();
  const handleAddNewCard = async (value) => {
    await updateRecord(value);
    goBack();
  };

  return (
    <Formik
      initialValues={{
        name: cardInfo?.name || '',
        cardNumber: cardInfo?.cardNumber || '',
        validThru: cardInfo?.validThru || '',
        CVV: cardInfo?.CVV || '',
        zip: cardInfo?.zip || '',
      }}
      enableReinitialize={true}
      validationSchema={Yup.object().shape({
        name: Yup.string().required('Required'),
        cardNumber: Yup.string()
          .test('len', 'Required', (val) => val?.length === 19)
          .required('Required'),
        validThru: Yup.string()
          .test('len', 'Required', (val) => val?.length === 5)
          .required(),
        CVV: Yup.string()
          .test('len', 'Required', (val) => val?.length === 3)
          .required(),
        zip: Yup.string()
          .test('len', 'Required', (val) => val?.length === 5)
          .required(),
      })}
      validateOnChange={true}
      onSubmit={handleAddNewCard}
    >
      {({ handleBlur, handleChange, isSubmitting, handleSubmit, isValid, dirty, values, errors }) => (
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
                        required={!_.isNil(errors.CVV)}
                        onChangeText={handleChange('CVV')}
                        autoFocus
                        onBlur={handleBlur('CVV')}
                        value={values.CVV}
                        maxLength={3}
                      />
                      {!_.isNil(errors.CVV) && (
                        <Text type="footer2.light" color="red.main">
                          {errors.CVV}
                        </Text>
                      )}
                    </Stack>
                    <Stack size={1}>
                      <Text type="footer1.bold">Zip</Text>
                      <Input
                        required={!_.isNil(errors.zip)}
                        onChangeText={handleChange('zip')}
                        autoFocus
                        onBlur={handleBlur('zip')}
                        value={values.zip}
                        placeholder="#####"
                        maxLength={5}
                      />
                      {!_.isNil(errors.zip) && (
                        <Text type="footer2.light" color="red.main">
                          {errors.zip}
                        </Text>
                      )}
                    </Stack>
                  </Grid>
                </Stack>
              </Padding>
            </Stack>

            <Padding size={[0, 4, 5, 4]}>
              <Button type="secondary" loading={isSubmitting} onClick={handleSubmit} disabled={!isValid || !dirty}>
                Save
              </Button>
            </Padding>
          </Stack>
        </SafeAreaScreen>
      )}
    </Formik>
  );
};
