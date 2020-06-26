import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import images from 'res/images.js';
import mainStyles from 'res/styles/mainStyles.js';

function BookingsScreen( { navigation }) {
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
  
        <View style={mainStyles.mainContainer}>
  
        </View>
  
        <View style={mainStyles.footer}>
          <TouchableOpacity>
            <Text style={mainStyles.footerText}>Help and Support Center</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }

  export default BookingsScreen;