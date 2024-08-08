import { StyleSheet } from 'react-native';
import * as Font from 'expo-font'
import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import MainStack from './navigate';


// подключаем шрифты в асинхронном режиме
const fonts = () => Font.loadAsync({
  'mt-bold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
  'mi-light': require('./assets/fonts/Montserrat-Light.ttf'),
});

export default function App() {
  const [font, setFont] = useState(false);

  if(font) {
    return (
      <MainStack />
    );
  } else {
    return (
      <AppLoading 
        startAsync={fonts} 
        onFinish={() => setFont(true)} 
        onError={console.warm}
      />
    );
  }
}

const styles = StyleSheet.create({

});
