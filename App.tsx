import React from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  NativeModules,
  View,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Button
          title="PressMe"
          onPress={() => {
            console.log(NativeModules)
            NativeModules.SnackbarModule.initCustomSnackBar('dffdf');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
