import React, { useState } from 'react';
import { View, Picker, StyleSheet, Text } from 'react-native';

const DropdownMenu = () => {
  const [selectedValue, setSelectedValue] = useState("option1");

  return (
    <View style={styles.container}>
        <Text style={styles.txt}> Your location</Text>
      <Picker
        selectedValue={selectedValue}
        style={styles.dropdown}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedValue(itemValue)
        }>
        <Picker.Item label="Nkongsamba La Belle, KLB" value="option1" />
        <Picker.Item label="3892 Olen Thomas Drive, NY" value="option2" />
        <Picker.Item label="Nkongsamba La Belle, KLB" value="option3" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginTop: 5,
  },
  dropdown: {
    height: 35,
    width: 250,
    borderStyle: 'none',
    fontWeight: 500,
    fontSize: 18,
  },
  txt: {
      fontSize: 14,
      fontWeight: 400,
      color: 'grey'
  }
});

export default DropdownMenu;
