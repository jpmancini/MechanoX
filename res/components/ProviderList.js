import React, { useState } from "react";
import { View, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

const DATA = [
  {
    id: "1p",
    title: "Max's Mechanic Shop",
    address: "1 Main St, New York, NY",
    phone: "(123) 456-7890",
    rating: "8.6",
  },
  {
    id: "2p",
    title: "Joe's Auto Repair Shop",
    address: "1 Main St, New York, NY",
    phone: "(123) 456-7890",
    rating: "6.3",
  },
  {
    id: "3p",
    title: "Steve's Fixing Store",
    address: "1 Main St, New York, NY",
    phone: "(123) 456-7890",
    rating: "9.2",
  },
  {
    id: "4p",
    title: "Marty Mechanic",
    address: "1 Main St, New York, NY",
    phone: "(123) 456-7890",
    rating: "7.8",
  }
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <View style = { styles.item }>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtext}>{item.address}</Text>
      <Text style={styles.subtext}>{item.phone}</Text>
      <View style={styles.ratingBox}>
        <Text>Rating: </Text>
        <Text>{item.rating}</Text>
        <Text>/10</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const ProviderList = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#a3a3a3" : "#fff";

    return (
      <>
        <Item
          item={item}
          onPress={() => setSelectedId(item.id)}
          style={{ backgroundColor }}
        />
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 8,
    marginTop: StatusBar.currentHeight || 0,
    marginBottom: 15,
  },
  item: {
    flexDirection: 'column',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 15,
    width: '90%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtext: {
    fontSize: 14,
  },
  ratingBox: {
    flexDirection: 'row',
  },
});

export default ProviderList;
