import HotelCard from '@/components/card/HotelCard';
import { useBottomNavigationSizes } from '@/hooks';
import { Hilton, Marriot } from '@/theme/assets/images';
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Explore = () => {
  const { bottom } = useBottomNavigationSizes();

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: bottom }}
        >
          <View style={{ gap: 16 }}>
            <HotelCard
              SvgImg={Hilton}
              distance={'8 mins walking'}
              title={'Hilton Garden Inn Manchester Emirates Old'}
              starsQuantity={7.6}
            />
            <HotelCard
              SvgImg={Marriot}
              distance={'12 mins walking'}
              title={'Marriott Plaza'}
              starsQuantity={9.9}
            />
          </View>
        </ScrollView>
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

export default Explore;
