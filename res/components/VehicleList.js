import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

const DATA = [
  {
    id: "1v",
    title: "First Car",
  },
  {
    id: "2v",
    title: "Second Car",
  },
  {
    id: "3v",
    title: "Third Car",
  },
  {
    id: "4v",
    title: "Fourth Car",
  },
  {
    id: "5v",
    title: "Fifth Car",
  },
  {
    id: "6v",
    title: "Sixth Car",
  },
  {
    id: "7v",
    title: "Seventh Car",
  },
  {
    id: "8v",
    title: "Eigth Car",
  },
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

const VehicleList = () => {
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
    flex: 6,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: 300,
    borderRadius: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default VehicleList;
