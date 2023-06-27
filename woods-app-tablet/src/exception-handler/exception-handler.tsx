import { Alert } from 'react-native';
import RNRestart from 'react-native-restart';
import { setJSExceptionHandler } from 'react-native-exception-handler';

const exceptionhandler = (e, isFatal) => {
  if (isFatal) {
    Alert.alert(
      'Unexpected error occured',
      `
    Error: ${isFatal ? 'Fatal:' : ''} ${e.name} ${e.message}
    We will need to restart the app.`,
      [
        {
          text: 'Restart',
          onPress: () => {
            RNRestart.Restart();
          },
        },
      ],
    );
  }
};

setJSExceptionHandler(exceptionhandler, true);
