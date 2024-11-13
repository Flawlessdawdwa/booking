import { Price, Route, Star } from '@/theme/assets/images';
import React, { FC } from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';

type HotelCardProps = {
  SvgImg: FC;
  distance: string;
  title: string;
  starsQuantity: number;
};

const HotelCard: FC<HotelCardProps> = ({
  SvgImg,
  distance,
  title,
  starsQuantity,
}) => {
  return (
    <View style={styles.container}>
      <SvgImg />
      <View style={styles.cardDescriptions}>
        <View style={styles.distanceWrapper}>
          <Route />
          <Text style={styles.distanceText}>{distance}</Text>
        </View>
        <View style={styles.starsWrapper}>
          <Star />
          <Text style={styles.quantity}>{starsQuantity}</Text>
        </View>
      </View>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.pricesWrapper}>
        <View style={styles.prices}>
          <View style={styles.priceImages}>
            <Price />
            <Image source={require('@/theme/assets/images/booking.png')} />
          </View>

          <Pressable style={styles.viewButton}>
            <Text style={styles.viewText}>View prices</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 24,
  },
  cardDescriptions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  distanceWrapper: {
    flexDirection: 'row',
    marginVertical: 16,
    gap: 5,
  },
  distanceText: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 18,
    color: '#111827',
  },
  starsWrapper: {
    flexDirection: 'row',
    backgroundColor: '#FDEFD9',
    borderRadius: 6,
    paddingVertical: 2,
    paddingHorizontal: 4,
  },
  quantity: {
    color: '#F49300',
  },
  title: {
    paddingHorizontal: 16,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 22,
    color: '#111827',
  },
  pricesWrapper: {
    marginTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  prices: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceImages: {
    gap: 10,
  },
  viewButton: {
    borderRadius: 32,
    backgroundColor: '#F49300',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  viewText: {
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 18,
    color: '#FFFFFF',
  },
});
export default HotelCard;
