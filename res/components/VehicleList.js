import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const VehicleList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Car1'},
          {key: 'Car2'},
          {key: 'Car3'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

export default VehicleList;