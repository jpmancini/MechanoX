import React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';

import images from 'res/images.js';

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
              onPress = {() => navigation.navigate('Bookings')}
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
            onPress = {() => navigation.navigate('Settings')}
          >
              <Image style={mainStyles.mainButton} source={images.Settings} />
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