import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import images from 'res/images.js';
import mainStyles from 'res/styles/mainStyles.js';
import bookingStyles from 'res/styles/bookingStyles.js';
import OrderList from 'res/components/OrderList.js';

function OrdersScreen( { navigation }) {
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
            <Text style={bookingStyles.bookingText}>
            View an Order
            </Text>
            <OrderList>
            </OrderList>
        </View>
  
        <View style={mainStyles.footer}>
          <TouchableOpacity>
            <Text style={mainStyles.footerText}>Help and Support Center</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }

  export default OrdersScreen;