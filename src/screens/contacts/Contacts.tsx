import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Contacts = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text>here goes contacts screen</Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 24,
  },
});

export default Contacts;
