// var notifSound = require('./src/assets/notifSound.m4r');
// var notificationSound = require('./src/assets/trained-420.mp3')
var admin = require('firebase-admin');

var serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

var registrationToken = [
  'fsikmxgO6k4XgN2ExYysQH:APA91bGoUvn_OfwTw92xj4SFMsMNxu5TawQ0Cf4M6a_-gGN2r44WahShM7TbGakA4FkjlQPxc28hPwOJFbKEbcbAfk2GiorrzEuHzzbeJFdBrQ6G54WhwnTpnObBCwpnr0i-Qogt2AOe',
];

var message = {
  notification: {
    title: 'test',
    body: 'geresee',
  },
  tokens: registrationToken,
};

admin
  .messaging()
  .sendMulticast(message)
  .then(function (response) {
    console.log('Successfully sent message:', response, response.responses);
  })
  .catch(function (error) {
    console.log('Error sending message:', error);
  });
