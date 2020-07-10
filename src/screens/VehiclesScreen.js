import React from 'react';
import { Image, Text, TouchableOpacity, View, TextInput, } from 'react-native';
import loginStyles from 'res/styles/loginStyles.js';

import images from 'res/images.js';
import mainStyles from 'res/styles/mainStyles.js';
import vehicleStyles from 'res/styles/vehicleStyles.js';
import FlatListBasics from 'res/components/List.js';

function VehiclesScreen( { navigation }) {
  const state = {
    language: 'java',
  };

  return (
    <>
      <View style={mainStyles.header}>
        <TouchableOpacity
          onPress = {() => navigation.navigate('Login')} 
        >
          <Image style={mainStyles.linesButton} source={images.Lines} />
        </TouchableOpacity>
        <Text 
          style={mainStyles.titleText}
          onPress = {() => navigation.navigate('Main')}
        >MECHANOX</Text>
        <Image style={mainStyles.headerRight} />
      </View>

      <View style={mainStyles.centerContainer}>
        <FlatListBasics></FlatListBasics>

        <Text style={vehicleStyles.vehicleText}>
          Select your Vehicle
        </Text>
        <View style={vehicleStyles.inputRow}>
          <TextInput 
            style={vehicleStyles.fillIn}
            textAlign={'center'}
            placeholder='Enter Year'
            placeholderTextColor='#fff'
          />
          <TextInput 
            style={vehicleStyles.fillIn}
            textAlign={'center'}
            placeholder='Enter Make'
            placeholderTextColor='#fff'
          />
        </View>
        <TextInput 
            style={vehicleStyles.fillIn}
            textAlign={'center'}
            placeholder='Enter Model'
            placeholderTextColor='#fff'
        />

        <TouchableOpacity
          style={vehicleStyles.vehicleScreenButton}
          //onPress = {() => navigation.navigate('Main')}
          underlayColor='#fff'
        >
          <Text style={loginStyles.loginButtonText}>Add New Vehicle</Text>
        </TouchableOpacity>
      </View>

      <View style={mainStyles.footer}>
        <TouchableOpacity>
          <Text style={mainStyles.footerText}>Help and Support Center</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

  export default VehiclesScreen;