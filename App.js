import React from 'react';
import { StyleSheet, Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



function LoginScreen({ navigation }) {
  return (
    <>
      <View style={loginStyles.loginContainer}>
        <Image
          resizeMode = 'contain'
          style={loginStyles.image}
          source={require('./assets/images/logo.jpg')}
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

function RegisterScreen({ navigation }) {
  return (
    <>
      <View style={loginStyles.loginContainer}>
        <Image
          resizeMode = 'contain'
          style={loginStyles.image}
          source={require('./assets/images/logo.jpg')}
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

function MainScreen({ navigation }) {
  return (
    <>
      <View style={mainStyles.header}>
        <TouchableOpacity
          onPress = {() => navigation.navigate('Login')} 
        >
          <Image style={mainStyles.linesButton} source={require('./assets/images/Lines.jpg')} />
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
            <Image style={mainStyles.mainButton} source={require('./assets/images/BookNow.jpg')} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress = {() => navigation.navigate('Orders')}
          >
            <Image style={mainStyles.mainButton} source={require('./assets/images/YourOrders.jpg')} />          
          </TouchableOpacity>        
        </View>
        <View style={mainStyles.imageRow}>
        <TouchableOpacity
          onPress = {() => navigation.navigate('Settings')}
        >
            <Image style={mainStyles.mainButton} source={require('./assets/images/Settings.jpg')} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress = {() => navigation.navigate('Promotions')}
          >
            <Image style={mainStyles.mainButton} source={require('./assets/images/Promotions.jpg')} />          
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

function BookingsScreen( { navigation }) {
  return (
    <>
      <View style={mainStyles.header}>
        <TouchableOpacity
          onPress = {() => navigation.navigate('Login')} 
        >
          <Image style={mainStyles.linesButton} source={require('./assets/images/Lines.jpg')} />
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

function OrdersScreen( { navigation }) {
  return (
    <>
      <View style={mainStyles.header}>
        <TouchableOpacity
          onPress = {() => navigation.navigate('Login')} 
        >
          <Image style={mainStyles.linesButton} source={require('./assets/images/Lines.jpg')} />
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

function SettingsScreen( { navigation }) {
  return (
    <>
      <View style={mainStyles.header}>
        <TouchableOpacity
          onPress = {() => navigation.navigate('Login')} 
        >
          <Image style={mainStyles.linesButton} source={require('./assets/images/Lines.jpg')} />
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

function PromotionsScreen( { navigation }) {
  return (
    <>
      <View style={mainStyles.header}>
        <TouchableOpacity
          onPress = {() => navigation.navigate('Login')} 
        >
          <Image style={mainStyles.linesButton} source={require('./assets/images/Lines.jpg')} />
        </TouchableOpacity>
        <Text 
          style={mainStyles.titleText}
          onPress = {() => navigation.navigate('Main')}
        >MECHANOX</Text>
        <Image style={mainStyles.headerRight} />
      </View>

      <View style={mainStyles.mainContainer}>
        <Text>Temporary</Text>
      </View>

      <View style={mainStyles.footer}>
        <TouchableOpacity>
          <Text style={mainStyles.footerText}>Help and Support Center</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

function TempScreen( { navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Temp Screen</Text>
      <Button
        title="Go to Main"
        onPress={() => navigation.navigate('Main')}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Bookings" component={BookingsScreen} />
        <Stack.Screen name="Orders" component={OrdersScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Promotions" component={PromotionsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

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
  termsText: {
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginBottom: 10,
    marginLeft: 50,
    marginRight: 50,
  }
});

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