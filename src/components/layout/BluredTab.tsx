import { BlurView } from '@react-native-community/blur';
import React from 'react';
import { Platform, View } from 'react-native';

const BluredTab = () => {
  if (Platform.OS === 'android') {
    return (
      <View
        style={{
          height: '100%',
          width: '100%',
          borderTopWidth: 1,
          borderColor: '#E1E2E4',
          flex: 1,
        }}
      >
        <View style={{ backgroundColor: '#FFF', height: '100%', flex: 1 }} />
      </View>
    );
  }
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        borderTopWidth: 1,
        borderColor: '#E1E2E4',
        flex: 1,
      }}
    >
      <BlurView
        style={{
          height: '100%',
          flex: 1,
        }}
        reducedTransparencyFallbackColor="white"
        blurType="light"
        blurAmount={20}
        overlayColor="transparent"
      />
    </View>
  );
};

export default BluredTab;
