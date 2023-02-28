import Navigation from "./src/navigation/AppNavigation";
import React from "react";
import { useFonts } from 'expo-font';
import {Provider} from "react-redux";
import {store} from "./src/redux/Store";


export default function App() {
  const [fontsLoaded] = useFonts({
    'Lato-Black': require('./src/fonts/Lato-Black.ttf'),
    'Lato-Bold': require('./src/fonts/Lato-Bold.ttf'),
    'Lato-Regular': require('./src/fonts/Lato-Regular.ttf'),
    'Rancho-Regular': require('./src/fonts/Rancho-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return  (
      <Provider store={store}>
      <Navigation/>
      </Provider>
  );
}

