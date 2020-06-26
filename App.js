import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/screens/LoginScreen.js';
import MainScreen from './src/screens/MainScreen.js';
import RegisterScreen from './src/screens/RegisterScreen.js';
import BookingsScreen from './src/screens/BookingsScreen.js';
import OrdersScreen from './src/screens/OrdersScreen.js';
import SettingsScreen from './src/screens/SettingsScreen.js';
import PromotionsScreen from './src/screens/PromotionsScreen.js';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Bookings" component={BookingsScreen} />
        <Stack.Screen name="Orders" component={OrdersScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Promotions" component={PromotionsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;