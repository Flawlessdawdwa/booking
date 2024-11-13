import HotelCard from '@/components/card/HotelCard';
import { useBottomNavigationSizes } from '@/hooks';
import { MainStackRoutes } from '@/interfaces/navigation';
import { Hilton, Marriot } from '@/theme/assets/images';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface HotelDetails {
  title: string;
  SvgImg: React.ElementType;
}

const Explore = () => {
  const { bottom } = useBottomNavigationSizes();
  const navigation = useNavigation();

  const handleNavigate = (hotelDetails: HotelDetails) => {
    navigation.navigate(
      MainStackRoutes.HOTEL_DETAILS as never,
      hotelDetails as never,
    );
  };

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
              distance="8 mins walking"
              title="Hilton Garden Inn Manchester Emirates Old"
              starsQuantity={7.6}
              onPress={() =>
                handleNavigate({
                  title: 'Hilton Garden Inn Manchester Emirates Old',
                  SvgImg: Hilton,
                })
              }
            />
            <HotelCard
              SvgImg={Marriot}
              distance="12 mins walking"
              title="Marriott Plaza"
              starsQuantity={9.9}
              onPress={() =>
                handleNavigate({
                  title: 'Marriott Plaza',
                  SvgImg: Marriot,
                })
              }
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
