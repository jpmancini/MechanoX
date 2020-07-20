import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import DropDownPicker from 'react-native-dropdown-picker';


import images from 'res/images.js';
import mainStyles from 'res/styles/mainStyles.js';
import bookingStyles from 'res/styles/bookingStyles.js';

function AppointmentScreen( { navigation }) {
  
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');

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
              Select a Date
              </Text>
            </View>

            <View style={mainStyles.midContainer}>
              <Calendar
                style={{
                  //height: 400,
                  width: 350,
                }}
                //markingType={'period'}
                markedDates={{
                  '2020-08-20': {selected: true, selectedColor: 'green'},
                }}
              />
              <View style={bookingStyles.inputRow}>
                <DropDownPicker
                  items={[
                    {label: '1', value: '0'},
                    {label: '2', value: '1'},
                    {label: '3', value: '2'},
                    {label: '4', value: '3'},
                    {label: '5', value: '4'},
                    {label: '6', value: '5'},
                    {label: '7', value: '6'},
                    {label: '8', value: '7'},
                    {label: '9', value: '8'},
                    {label: '10', value: '9'},
                    {label: '11', value: '10'},
                    {label: '12', value: '11'},
                  ]}
                  showArrow={false}
                  defaultValue={hour}
                  containerStyle={{ marginTop: 20, marginRight: 15, width: 50, height: 40 }}
                  style={{backgroundColor: '#fafafa'}}
                  itemStyle={{
                      justifyContent: 'flex-start'
                  }}
                  dropDownStyle={{backgroundColor: '#fafafa'}}
                  /*onChangeItem={item => setService({
                      service: item.value
                  })}*/
                />
                <Text style={bookingStyles.timeText}>:</Text>
                <DropDownPicker
                  items={[
                    {label: '15', value: '0'},
                    {label: '30', value: '1'},
                    {label: '45', value: '2'},
                    {label: '00', value: '3'},
                  ]}
                  showArrow={false}
                  defaultValue={minute}
                  containerStyle={{ marginTop: 20, marginLeft: 10, width: 50, height: 40 }}
                  style={{backgroundColor: '#fafafa'}}
                  itemStyle={{
                      justifyContent: 'flex-start'
                  }}
                  dropDownStyle={{backgroundColor: '#fafafa'}}
                  /*onChangeItem={item => setService({
                      service: item.value
                  })}*/
                />
              </View>
            </View>

            <View style={mainStyles.botContainer}>
              <TouchableOpacity
                style={bookingStyles.bookingScreenButton}
                onPress = {() => navigation.navigate('Main')}
                underlayColor='#fff'
              >
                <Text style={bookingStyles.bookingButtonText}>Complete Order</Text>
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

  export default AppointmentScreen;