import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
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
              


              <View style={bookingStyles.inputRow}>
                <DropDownPicker
                  items={[
                    {label: 'Wednesday, July 22, 2020', value: '0'},
                    {label: 'Thursday, July 23, 2020', value: '1'},
                    {label: 'Friday, July 24, 2020', value: '2'},
                    {label: 'Saturday, July 25, 2020', value: '3'},
                    {label: 'Sunday, July 26, 2020', value: '4'},
                    {label: 'Monday, July 27, 2020', value: '5'},
                    {label: 'Tuesday, July 28, 2020', value: '6'},
                    {label: 'Wednesday, July 29, 2020', value: '7'},
                    {label: 'Thursday, July 30, 2020', value: '8'},
                    {label: 'Friday, July 31, 2020', value: '9'},
                    {label: 'Saturday, August 1, 2020', value: '10'},
                    {label: 'Sunday, August 2, 2020', value: '1'},
                    {label: 'Monday, August 3, 2020', value: '12'},
                    {label: 'Tuesday, August 4, 2020', value: '13'},
                    {label: 'Wednesday, August 5, 2020', value: '14'},
                    {label: 'Thursday, August 6, 2020', value: '15'},
                    {label: 'Friday, August 7, 2020', value: '16'},
                    {label: 'Saturday, August 8, 2020', value: '17'},
                    {label: 'Sunday, August 9, 2020', value: '18'},
                    {label: 'Monday, August 10, 2020', value: '19'},
                    {label: 'Tuesday, August 11, 2020', value: '20'},
                  ]}
                  showArrow={false}
                  defaultValue={hour}
                  placeholder={'Date'}
                  containerStyle={{ marginTop: 20, marginRight: 15, width: 250, height: 40 }}
                  style={{backgroundColor: '#fafafa'}}
                  itemStyle={{
                      justifyContent: 'flex-start'
                  }}
                  dropDownStyle={{backgroundColor: '#fafafa'}}
                  /*onChangeItem={item => setService({
                      service: item.value
                  })}*/
                />
              
                <DropDownPicker
                  items={[
                    {label: '1:00 PM', value: '0'},
                    {label: '2:00 PM', value: '1'},
                    {label: '3:00 PM', value: '2'},
                    {label: '4:00 PM', value: '3'},
                    {label: '5:00 PM', value: '4'},
                    {label: '6:00 PM', value: '5'},
                    {label: '7:00 PM', value: '6'},
                    {label: '8:00 PM', value: '7'},
                    {label: '9:00 PM', value: '8'},
                    {label: '10:00 PM', value: '9'},
                    {label: '11:00 PM', value: '10'},
                    {label: '12:00 PM', value: '11'},
                    {label: '1:00 AM', value: '12'},
                    {label: '2:00 AM', value: '13'},
                    {label: '3:00 AM', value: '14'},
                    {label: '4:00 AM', value: '15'},
                    {label: '5:00 AM', value: '16'},
                    {label: '6:00 AM', value: '17'},
                    {label: '7:00 AM', value: '18'},
                    {label: '8:00 AM', value: '19'},
                    {label: '9:00 AM', value: '20'},
                    {label: '10:00 AM', value: '21'},
                    {label: '11:00 AM', value: '22'},
                    {label: '12:00 AM', value: '23'},
                  ]}
                  showArrow={false}
                  defaultValue={minute}
                  placeholder={'Time'}
                  containerStyle={{ marginTop: 20, marginLeft: 10, width: 100, height: 40 }}
                  style={{backgroundColor: '#fafafa'}}
                  itemStyle={{
                      justifyContent: 'flex-start'
                  }}
                  dropDownStyle={{backgroundColor: '#fafafa',  height: 200}}
                  /*onChangeItem={item => setService({
                      service: item.value
                  })}*/
                />
              </View>
            </View>

            <View style={mainStyles.botContainer}>
              <TouchableOpacity
                style={bookingStyles.bookingScreenButton}
                onPress = {() => navigation.navigate('Confirmation')}
                underlayColor='#fff'
              >
                <Text style={bookingStyles.bookingButtonText}>Confirm Order</Text>
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