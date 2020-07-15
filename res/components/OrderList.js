import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

const DATA = [
  {
    id: "1o",
    title: "Order 1",
  },
  {
    id: "2o",
    title: "Order 2",
  },
  {
    id: "3o",
    title: "Order 3",
  },
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
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
    padding: 30,
    marginVertical: 8,
    marginHorizontal: 16,
    width: 300,
  },
  title: {
    fontSize: 32,
  },
});

export default OrderList;
