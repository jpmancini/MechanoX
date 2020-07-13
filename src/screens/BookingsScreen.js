import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import images from 'res/images.js';
import mainStyles from 'res/styles/mainStyles.js';
import loginStyles from 'res/styles/loginStyles.js';
import bookingStyles from 'res/styles/bookingStyles.js';

function BookingsScreen( { navigation }) {

  const [service, setService] = useState('');


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
          <DropDownPicker zIndex={8}
            items={[
              {label: 'Tire Pressure Monitor Lamp Diagnosis', value: '0'},
              {label: 'General Diagnosis', value: '1'},
              {label: 'Noise Diagnosis', value: '2'},
              {label: 'Vibration Diagnosis', value: '3'},
              {label: 'No Start Diagnosis', value: '4'},
              {label: 'Pre-Purchase Car Inspection', value: '5'},
              {label: 'Engine Oil Light Diagnosis', value: '6'},
              {label: 'Check Engine Light Diagnosis & Testing', value: '7'},
            ]}
            defaultValue={service}
            placeholder='Diagnosis & Testing'
            containerStyle={{ marginTop: 50, width: 300, height: 40 }}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
                justifyContent: 'flex-start'
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            /*onChangeItem={item => setService({
                service: item.value
            })}*/
          />
          <DropDownPicker zIndex={7}
            items={[
              {label: 'UK', value: 'uk'},
              {label: 'France', value: 'france'},
            ]}
            defaultValue={service}
            placeholder='Powertrain, Engine & Transmission'
            containerStyle={{ marginTop: 15, width: 300, height: 40 }}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
                justifyContent: 'flex-start'
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={item => setService({
                service: item.value
            })}
          />
          <DropDownPicker zIndex={6}
            items={[
              {label: 'UK', value: 'uk'},
              {label: 'France', value: 'france'},
            ]}
            defaultValue={service}
            placeholder='Heating & Air Conditioning'
            containerStyle={{ marginTop: 15, width: 300, height: 40 }}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
                justifyContent: 'flex-start'
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={item => setService({
                service: item.value
            })}
          />
          <DropDownPicker zIndex={5}
            items={[
              {label: 'UK', value: 'uk'},
              {label: 'France', value: 'france'},
            ]}
            defaultValue={service}
            placeholder='Electrical & Lights'
            containerStyle={{ marginTop: 15, width: 300, height: 40 }}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
                justifyContent: 'flex-start'
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={item => setService({
                service: item.value
            })}
          />
          <DropDownPicker zIndex={4}
            items={[
              {label: 'UK', value: 'uk'},
              {label: 'France', value: 'france'},
            ]}
            defaultValue={service}
            placeholder='Suspension, Steering & Wheels'
            containerStyle={{ marginTop: 15, width: 300, height: 40 }}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
                justifyContent: 'flex-start'
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={item => setService({
                service: item.value
            })}
          />
          <DropDownPicker zIndex={3}
            items={[
              {label: 'UK', value: 'uk'},
              {label: 'France', value: 'france'},
            ]}
            defaultValue={service}
            placeholder='Brakes'
            containerStyle={{ marginTop: 15, width: 300, height: 40 }}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
                justifyContent: 'flex-start'
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={item => setService({
                service: item.value
            })}
          />
          <DropDownPicker zIndex={2}
            items={[
              {label: 'UK', value: 'uk'},
              {label: 'France', value: 'france'},
            ]}
            defaultValue={service}
            placeholder='Body, Glass & Interior'
            containerStyle={{ marginTop: 15, width: 300, height: 40 }}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
                justifyContent: 'flex-start'
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={item => setService({
                service: item.value
            })}
          />
          <DropDownPicker zIndex={1}
            items={[
              {label: 'UK', value: 'uk'},
              {label: 'France', value: 'france'},
            ]}
            defaultValue={service}
            placeholder='Scheduled Maintenance'
            containerStyle={{ marginTop: 15, width: 300, height: 40 }}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
                justifyContent: 'flex-start'
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={item => setService({
                service: item.value
            })}
          />

          <TouchableOpacity
            style={bookingStyles.bookingScreenButton}
            //onPress = {() => navigation.navigate('Main')}
            underlayColor='#fff'
          >
            <Text style={loginStyles.loginButtonText}>Select Your Service</Text>
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

  export default BookingsScreen;