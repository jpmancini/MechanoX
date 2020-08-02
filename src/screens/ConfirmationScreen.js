import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import images from 'res/images.js';
import mainStyles from 'res/styles/mainStyles.js';
import bookingStyles from 'res/styles/bookingStyles.js';

function ConfirmationScreen( { navigation }) {

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
            <View style={mainStyles.topContainer}>
              <Text style={bookingStyles.bookingText}>
              Your Order
              </Text>
            </View>

            <View style={mainStyles.midContainer}>
              <Text style={bookingStyles.confirmationText}>Honda Civic 2014</Text>
              <Text style={bookingStyles.confirmationText}>Pre-Purchase Car Inspection</Text>
              <Text style={bookingStyles.confirmationText}>Joe's Auto Repair Shop</Text>
              <Text style={bookingStyles.confirmationText}>Friday, July 24, 2020</Text>
              <Text style={bookingStyles.confirmationText}>4:00 PM</Text>
            </View>

            <View style={mainStyles.botContainer}>
              <TouchableOpacity
                style={bookingStyles.bookingScreenButton}
                onPress = {() => navigation.navigate('Main')}
                underlayColor='#fff'
              >
                <Text style={bookingStyles.bookingButtonText}>Complete Order</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity
                style={bookingStyles.bookingScreenButton}
                onPress = {() => navigation.navigate('Main')}
                underlayColor='#fff'
              >
                <Text style={bookingStyles.bookingButtonText}>Dismiss Order</Text>
              </TouchableOpacity> */}
          </View>
        </View>
  
        <View style={mainStyles.footer}>
          <TouchableOpacity>
            <Text style={mainStyles.footerText}>Help and Support Center</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }

  export default ConfirmationScreen;