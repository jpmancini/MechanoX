import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import images from 'res/images.js';
import loginStyles from 'res/styles/loginStyles.js';

function LoginScreen({ navigation }) {
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