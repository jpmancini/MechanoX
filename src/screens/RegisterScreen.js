import React from 'react';
import { StyleSheet, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import images from 'res/images.js';
import loginStyles from 'res/styles/loginStyles.js';

function RegisterScreen({ navigation }) {
    return (
      <>
        <View style={loginStyles.loginContainer}>
          <Image
            resizeMode = 'contain'
            style={loginStyles.image}
            source={images.Logo}
          />
          <TextInput 
            style={loginStyles.fillIn}
            textAlign={'center'}
            placeholder='Full Name'
          />
          <TextInput
            style={loginStyles.fillIn}
            textAlign={'center'}
            placeholder='Email Address'
          />
          <TextInput 
            style={loginStyles.fillIn}
            textAlign={'center'}
            placeholder='Phone Number'
          />
          <TextInput
            style={loginStyles.fillIn}
            textAlign={'center'}
            placeholder='Password'
          />
          <TextInput
            style={loginStyles.fillIn}
            textAlign={'center'}
            placeholder='Confirm Password'
          />
          <View style={[{ width: "70%", margin: 10,}]}>
            <TouchableOpacity
              style={loginStyles.loginScreenButton}
              onPress = {() => navigation.navigate('Main')}
              underlayColor='#fff'
            >
              <Text style={loginStyles.loginButtonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
  
        <View style={loginStyles.footer}>
          <TouchableOpacity
            //onPress = {() => navigation.navigate('Login')}
          >
            <Text style={loginStyles.termsText}>By registering, you agree to all of our terms and conditions</Text>
          </TouchableOpacity>    
        </View>
      </>
    );
  }

  export default RegisterScreen;