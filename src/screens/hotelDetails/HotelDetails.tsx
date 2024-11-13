import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Pressable,
  Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { BackButton } from '@/theme/assets/icons';

const { width } = Dimensions.get('window');

interface HotelDetailsParams {
  title: string;
  SvgImg: React.ElementType;
}

const HotelDetails = () => {
  const route = useRoute<RouteProp<{ params: HotelDetailsParams }, 'params'>>();

  const { title, SvgImg } = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <View style={styles.relativeWrapper}>
        <SvgImg width={width} height={300} style={styles.image} />
        <Pressable onPress={() => navigation.goBack()} style={styles.backBtn}>
          <BackButton />
        </Pressable>

        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>Overview</Text>
            <Text style={styles.description}>
              Welcome to {title} Inn Manchester Emirates Old Trafford, your
              premier destination for luxury accommodation in the heart of
              Manchester. Situated adjacent to the iconic Emirates Old Trafford
              cricket ground.Situated adjacent to the iconic Emirates Old
              Trafford cricket ground.Situated adjacent to the iconic Emirates
              Old Trafford cricket ground.Situated adjacent to the iconic
              Emirates Old Trafford cricket ground.Situated adjacent to the
              iconic Emirates Old Trafford cricket ground.Situated adjacent to
              the iconic Emirates Old Trafford cricket ground.Situated adjacent
              to the iconic Emirates Old Trafford cricket ground.Situated
              adjacent to the iconic Emirates Old Trafford cricket
              ground.Situated adjacent to the iconic Emirates Old Trafford
              cricket ground.Situated adjacent to the iconic Emirates Old
              Trafford cricket ground.Situated adjacent to the iconic Emirates
              Old Trafford cricket ground.
            </Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.fixedButtonContainer}>
        <Pressable
          style={styles.checkButton}
          onPress={() => Linking.openURL('https://zoftify.com')}
        >
          <Text style={styles.checkButtonText}>Check availability</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -10,
  },
  image: {
    top: 0,
    width: '100%',
    height: 300,
  },
  content: {},
  detailsContainer: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginTop: 16,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
    textAlign: 'left',
  },
  fixedButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  checkButton: {
    backgroundColor: '#F49300',
    borderRadius: 32,
    paddingVertical: 12,
  },
  checkButtonText: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 22,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  relativeWrapper: {
    flex: 1,
    backgroundColor: '#FEFEFE',
    position: 'relative',
  },
  backBtn: {
    position: 'absolute',
    top: 60,
    left: 16,
  },
});

export default HotelDetails;
