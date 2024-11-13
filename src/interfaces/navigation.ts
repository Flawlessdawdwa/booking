import { NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

export enum AppNavigationStack {
  MAIN = 'Main',
  MODAL = 'Modal',
}

export enum MainTabRoutes {
  EXPLORE = 'Explore',
  STADIUMS = 'Stadiums',
  INFORMATION = 'Information',
  CONTACTS = 'Contacts',
}

export enum MainStackRoutes {
  HOTEL_DETAILS = 'HotelDetails',
}

export type MainParamsList = {
  [MainTabRoutes.EXPLORE]: undefined;
  [MainTabRoutes.STADIUMS]: undefined;
  [MainTabRoutes.INFORMATION]: undefined;
  [MainTabRoutes.CONTACTS]: undefined;
};

export type ApplicationStackParamList = {
  [MainStackRoutes.HOTEL_DETAILS]: undefined;

  Main: NavigatorScreenParams<MainParamsList>;
};

export type ApplicationScreenProps =
  StackScreenProps<ApplicationStackParamList>;
