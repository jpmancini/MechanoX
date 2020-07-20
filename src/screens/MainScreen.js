import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import images from 'res/images.js';
import mainStyles from 'res/styles/mainStyles.js';

function MainScreen({ navigation }) {
    return (
      <>
        <View style={mainStyles.header}>
          <TouchableOpacity
            onPress = {() => navigation.navigate('Login')} 
          >
            <Image style={mainStyles.linesButton} source={images.Lines} />
          </TouchableOpacity>
          <Text style={mainStyles.titleText}>MECHANOX</Text>
          <Image style={mainStyles.headerRight} />
        </View>
  
        <View style={mainStyles.mainContainer}>
          <Text style={mainStyles.welcomeText}>Welcome</Text>
          <Text style={mainStyles.nameText}>Full Name</Text>
          <View style={mainStyles.imageRow}>
            <TouchableOpacity
              onPress = {() => navigation.navigate('Vehicles')}
            >
              <Image style={mainStyles.mainButton} source={images.BookNow} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress = {() => navigation.navigate('Orders')}
            >
              <Image style={mainStyles.mainButton} source={images.YourOrders} />          
            </TouchableOpacity>        
          </View>
          <View style={mainStyles.imageRow}>
          <TouchableOpacity
            onPress = {() => navigation.navigate('Vehicles')}
          >
              <Image style={mainStyles.mainButton} source={images.MyVehicles} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress = {() => navigation.navigate('Promotions')}
            >
              <Image style={mainStyles.mainButton} source={images.Promotions} />          
            </TouchableOpacity>
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

  export default MainScreen;