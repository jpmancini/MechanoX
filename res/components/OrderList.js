import React, { useState } from "react";
import { View, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

const DATA = [
  {
    id: "1o",
    car: "Honda Civic 2014",
    job: "Pre-Purchase Car Inspection",
    shop: "Max's Mechanic Shop",
    date: "8/12/20 4:00 PM",
    address: "1 Main St, New York, NY",
  },
  {
    id: "2o",
    car: "Toyota Corolla 2012",
    job: "Air Filter Replacement",
    shop: "Joe's Auto Repair Shop",
    date: "9/3/20 10:00 AM",
    address: "1 Main St, New York, NY",
  }
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <View style = { styles.item }>
      <Text style={styles.title}>{item.car}</Text>
      <Text style={styles.subtext}>{item.job}</Text>
      <Text style={styles.subtext}>{item.shop}</Text>
      <Text style={styles.subtext}>{item.date}</Text>
      <Text style={styles.subtext}>{item.address}</Text>
    </View>
  </TouchableOpacity>
);

const OrderList = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#fff" : "#fff";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
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
  }
});

export default OrderList;
