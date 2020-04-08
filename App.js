import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DeathScreen from './src/screens/DeathScreen';
import HomeScreen from './src/screens/HomeScreen';
import ConfirmedScreen from './src/screens/ConfirmedScreen';
import RecoverScreen from './src/screens/RecoverScreen';
import GlobalScreen from './src/screens/GlobalScreen';
import CountryScreen from './src/screens/CountryScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Global" component={GlobalScreen} />
        <Stack.Screen name="Country" component={CountryScreen} />
        <Stack.Screen name="Death" component={DeathScreen} />
        <Stack.Screen name="Confirmed" component={ConfirmedScreen} />
        <Stack.Screen name="Recover" component={RecoverScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;