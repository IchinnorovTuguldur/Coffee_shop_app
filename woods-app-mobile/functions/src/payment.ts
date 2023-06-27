// import * as functions from 'firebase-functions';
// const { Stripe } = require('stripe');
// const stripe = new Stripe('sk_test_8Ha5lB4kETVPZyyFghPa0qlp', {
//   apiVersion: '2020-08-27',
// });

// const userFacingMessage = (error: any) => {
//   return error.type ? error.message : 'An error occurred, developers have been alerted';
// };

// export const createCustomer = functions.firestore.document('users/{uid}').onCreate(async (snap) => {
//   try {
//     const customer = await stripe.customers.create();
//     console.log(customer);
//   } catch (error) {
//     console.log(error);
//   }
// });

// export const addPaymentMethodDetails = functions.firestore.document('users/{uid}/paymentMethods/{paymentMethodId}').onCreate(async (snap) => {
//   try {
//     const { tokenId } = snap.data();
//     console.log(tokenId);
//     const paymentMethod = await stripe.paymentMethods.retrieve(tokenId);
//     console.log('hello');
//     await snap.ref.set(paymentMethod);
//     console.log(paymentMethod.customer);

//     const intent = await stripe.setupIntents.create({
//       customer: `${paymentMethod.customer}`,
//     });
//     await snap.ref.set(
//       {
//         setup_secret: intent.client_secret,
//       },
//       { merge: true },
//     );
//     return;
//   } catch (error) {
//     console.log(error);
//     await snap.ref.set({ error: userFacingMessage(error) }, { merge: true });
//   }
// });

// export const createPaymentIntent = functions.firestore.document('users/{uid}/payments/{intentId}').onCreate(async (snap, context) => {
//   const { amount, currency, payment_method } = snap?.data();
//   const { uid } = context?.params;
//   try {
//     const idempotencyKey = context?.params?.intentId;
//     console.log(idempotencyKey);
//     console.log({ amount, currency, customer: uid, payment_method, off_session: false, confirm: true, confirmation_method: 'manual' });
//     const payment = await stripe.paymentIntents.create(
//       { amount, currency, customer: uid, payment_method, off_session: false, confirm: true, confirmation_method: 'manual' },
//       { idempotencyKey },
//     );
//     console.log(payment);
//     await snap.ref.set(payment);
//   } catch (error) {
//     await snap.ref.set({ error: userFacingMessage(error) }, { merge: true });
//   }
// });
