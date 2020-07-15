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

const ProviderList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Provider 1'},
          {key: 'Provider 2'},
          {key: 'Provider 3'},
          {key: 'Provider 4'},
          {key: 'Provider 5'},
          {key: 'Provider 6'},
          {key: 'Provider 7'},
          {key: 'Provider 8'},
          {key: 'Provider 9'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

export default ProviderList;