import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import images from 'res/images.js';
import loginStyles from 'res/styles/loginStyles.js';

//export const EmailContext = React.createContext();
//export const PasswordContext = React.createContext();

function RegisterScreen({ navigation }) {

    //const [email, setEmail] = useState();
    //const [password, setPassword] = useState();

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
            onChangeText={text => setName(text)}
        />
        <TextInput
            style={loginStyles.fillIn}
            textAlign={'center'}
            placeholder='Email Address'
            onChangeText={text => setEmail(text)}
        />
        <TextInput 
            style={loginStyles.fillIn}
            textAlign={'center'}
            placeholder='Phone Number'
            onChangeText={text => setPhone(text)}
        />
        <TextInput
            style={loginStyles.fillIn}
            textAlign={'center'}
            placeholder='Password'
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
        />
        <TextInput
            style={loginStyles.fillIn}
            textAlign={'center'}
            placeholder='Confirm Password'
            secureTextEntry={true}
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