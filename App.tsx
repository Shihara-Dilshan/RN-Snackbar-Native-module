import React from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  NativeModules,
  View,
} from 'react-native';

const App: React.FC  = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.container}>
        <Button
          title="Native Snack bar"
          onPress={() => {
            NativeModules.SnackbarModule.initCustomSnackBar(
              'Native snackbar',
              () => {
                console.log('close button pressed');
              },
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default App;
