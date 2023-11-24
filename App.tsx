
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {BottomTabNavigator} from "./src/navigations/bottomTabNavigator"
import { Login } from './src/screens/login';
import { AuthStack } from './src/navigations/authstack';

function App() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}

export default App;
