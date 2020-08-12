import React, {useState} from "react";
import { View, DropDownPicker } from "react-native";

import bookingStyles from 'res/styles/bookingStyles.js';

function Services() {

  const [service, setService] = useState('');

  return(
    <View style={ bookingStyles.serviceContainer }>
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
              placeholderStyle={{
                fontWeight: 'bold',
                textAlign: 'center'
              }}
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
                {label: 'Serpentine Belt Replacement', value: '0'},
                {label: 'Drive Belt Idler Pulley Replacement', value: '1'},
                {label: 'Air Filter Replacement', value: '2'},
                {label: 'Camshaft Position Sensor Replacement', value: '3'},
                {label: 'Catalytic Converter Replacement', value: '4'},
                {label: 'Clutch Replacement', value: '5'},
              ]}
              defaultValue={service}
              placeholder='Powertrain, Engine & Transmission'
              placeholderStyle={{
                fontWeight: 'bold',
                textAlign: 'center'
              }}
              containerStyle={{ marginTop: 15, width: 300, height: 40 }}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                  justifyContent: 'flex-start'
              }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              /*onChangeItem={item => setService({
                  service: item.value
              })}*/
            />
            <DropDownPicker zIndex={6}
              items={[
                {label: 'test1', value: 'uk'},
                {label: 'test2', value: 'france'},
              ]}
              defaultValue={service}
              placeholder='Heating & Air Conditioning'
              placeholderStyle={{
                fontWeight: 'bold',
                textAlign: 'center'
              }}
              containerStyle={{ marginTop: 15, width: 300, height: 40 }}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                  justifyContent: 'flex-start'
              }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              /*onChangeItem={item => setService({
                  service: item.value
              })}*/
            />
            <DropDownPicker zIndex={5}
              items={[
                {label: 'test1', value: 'uk'},
                {label: 'test2', value: 'france'},
              ]}
              defaultValue={service}
              placeholder='Electrical & Lights'
              placeholderStyle={{
                fontWeight: 'bold',
                textAlign: 'center'
              }}
              containerStyle={{ marginTop: 15, width: 300, height: 40 }}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                  justifyContent: 'flex-start'
              }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              /*onChangeItem={item => setService({
                  service: item.value
              })}*/
            />
            <DropDownPicker zIndex={4}
              items={[
                {label: 'test1', value: 'uk'},
                {label: 'test2', value: 'france'},
              ]}
              defaultValue={service}
              placeholder='Suspension, Steering & Wheels'
              placeholderStyle={{
                fontWeight: 'bold',
                textAlign: 'center'
              }}
              containerStyle={{ marginTop: 15, width: 300, height: 40 }}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                  justifyContent: 'flex-start'
              }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              /*onChangeItem={item => setService({
                  service: item.value
              })}*/
            />
            <DropDownPicker zIndex={3}
              items={[
                {label: 'test1', value: 'uk'},
                {label: 'test2', value: 'france'},
              ]}
              defaultValue={service}
              placeholder='Brakes'
              placeholderStyle={{
                fontWeight: 'bold',
                textAlign: 'center'
              }}
              containerStyle={{ marginTop: 15, width: 300, height: 40 }}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                  justifyContent: 'flex-start'
              }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              /*onChangeItem={item => setService({
                  service: item.value
              })}*/
            />
            <DropDownPicker zIndex={2}
              items={[
                {label: 'test1', value: 'uk'},
                {label: 'test2', value: 'france'},
              ]}
              defaultValue={service}
              placeholder='Body, Glass & Interior'
              placeholderStyle={{
                fontWeight: 'bold',
                textAlign: 'center'
              }}
              containerStyle={{ marginTop: 15, width: 300, height: 40 }}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                  justifyContent: 'flex-start'
              }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              /*onChangeItem={item => setService({
                  service: item.value
              })}*/
            />
            <DropDownPicker zIndex={1}
              items={[
                {label: 'test1', value: 'uk'},
                {label: 'test2', value: 'france'},
              ]}
              defaultValue={service}
              placeholder='Scheduled Maintenance'
              placeholderStyle={{
                fontWeight: 'bold',
                textAlign: 'center'
              }}
              containerStyle={{ marginTop: 15, width: 300, height: 40 }}
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
  );
}

export default Services;
