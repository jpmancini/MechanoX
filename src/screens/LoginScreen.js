import React from 'react';
import { StyleSheet, Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import logo from 'res/images/logo.jpg';

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
  });

function LoginScreen({ navigation }) {
    return (
      <>
        <View style={loginStyles.loginContainer}>
          <Image
            resizeMode = 'contain'
            style={loginStyles.image}
            source={logo}
          />
          <TextInput 
            style={loginStyles.fillIn}
            textAlign={'center'}
            placeholder='Email Address'
          />
          <TextInput
            style={loginStyles.fillIn}
            textAlign={'center'}
            placeholder='Password'
          />
          <View style={[{ width: "70%", margin: 10,}]}>
            <TouchableOpacity
              style={loginStyles.loginScreenButton}
              onPress = {() => navigation.navigate('Main')}
              underlayColor='#fff'
            >
              <Text style={loginStyles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
  
        <View style={loginStyles.footer}>
          <TouchableOpacity>
            <Text style={loginStyles.footerText}>Forgot Password?</Text>
          </TouchableOpacity> 
          <Text style={{fontSize: 24}}>  |  </Text>
          <TouchableOpacity
            onPress = {() => navigation.navigate('Register')}
          >
            <Text style={loginStyles.footerText}>Register Here</Text>
          </TouchableOpacity>      
        </View>
      </>
    );
  }

  export default LoginScreen;