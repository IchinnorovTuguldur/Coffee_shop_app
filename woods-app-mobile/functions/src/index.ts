import * as functions from 'firebase-functions';
const admin = require('firebase-admin');
admin.initializeApp();
const { Stripe } = require('stripe');

const stripe = new Stripe('sk_test_8Ha5lB4kETVPZyyFghPa0qlp', {
  apiVersion: '2020-08-27',
});

exports.createPaymentIntent = functions.https.onCall(async (data: any) => {
  const { amount, currency } = data;
  console.log(data);
  try {
    const { client_secret } = await stripe.paymentIntents.create({
      amount: amount || 0,
      currency: currency || 'usd',
      payment_method_types: ['card'],
    });
    // console.log(client_secret);
    return client_secret;
  } catch (error) {
    console.log(error);
  }
});
