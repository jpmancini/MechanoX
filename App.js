import React from 'react';
import { StyleSheet, Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
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

const loginStyles = StyleSheet.create({
  loginContainer: {
    flex: 12,
    backgroundColor: '#1b2033',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  image: {
    width: 350,
    height: 350,
    marginBottom: -50,
  },
  fillIn: {
    height: 40,
    width: 250,
    marginRight: 15,
    marginLeft: 15,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  loginScreenButton: {
    height: 40,
    marginRight: 15,
    marginLeft: 15,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor:'#1E6738',
    borderRadius: 20,
    borderWidth: 0,
  },
  loginButtonText: {
      color:'#fff',
      fontSize: 18,
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
  },
  footerText: {
      fontSize: 18,
      fontWeight: 'bold',
      textDecorationLine: 'underline',
      marginBottom: 10,

  },
  termsText: {
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginBottom: 10,
    marginLeft: 50,
    marginRight: 50,
  }
});

const mainStyles = StyleSheet.create({
  mainContainer: {
    flex: 12,
    backgroundColor: '#1b2033',
    alignItems: 'center',
    flexDirection: "column",
  },
  header: {
    flex: 1.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  footer: {
    flex: 1.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  imageRow: {
    flexDirection: 'row',
    marginTop: 14,
  },
  titleText: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#1b2033',
    marginBottom: -25,
  },
  welcomeText: {
    fontSize: 32,
    color: '#fff',
    marginTop: 80,
  },
  nameText: {
    fontSize: 36,
    color: '#fff',
    marginBottom: 80,
  },
  footerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  mainButton: {
    width: 150,
    height: 150,
    marginLeft: 7,
    marginRight: 7,
  },
  linesButton: {
    width: 50,
    height: 40,
    marginLeft: 25,
    marginBottom: -15,
  },
  headerRight: {
    width: 50,
    height: 40,
    marginRight: 25,
    marginBottom: -15,
  }
});