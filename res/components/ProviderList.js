import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

const DATA = [
  {
    id: "1p",
    title: "Max's Mechanic Shop",
  },
  {
    id: "2p",
    title: "Joe's Auto Repair Shop",
  },
  {
    id: "3p",
    title: "Steve's Fixing Store",
  },
  {
    id: "4p",
    title: "Marty Mechanic",
  },
  {
    id: "5p",
    title: "Alex's Car Dealer",
  },
  {
    id: "6p",
    title: "Taylor's Honda Shop",
  },
  {
    id: "7p",
    title: "Brookside Repairs",
  },
  {
    id: "8p",
    title: "D.C. Mechanic Shop",
  },
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

const ProviderList = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#a3a3a3" : "#fff";

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
    padding: 30,
    marginVertical: 8,
    marginHorizontal: 16,
    width: 300,
  },
  title: {
    fontSize: 32,
  },
});

export default ProviderList;
