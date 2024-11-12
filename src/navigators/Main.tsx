/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import {
  TabIconContacts,
  TabIconExplore,
  TabIconInformation,
  TabIconStadiums,
} from '@/theme/assets/icons/tab-bar';

import { MEDIUM_SIZE } from '@/constants/size';
import { BluredTab, TabBarIcon } from '@/components/layout';
import { Contacts, Explore, Information, Stadiums } from '@/screens';
import { MainParamsList, MainTabRoutes } from '@/interfaces/navigation';
import { useBottomNavigationSizes } from '@/hooks';

//@ts-ignore
const Tab = createBottomTabNavigator<MainParamsList>();

const MainNavigator = () => {
  const { height, bottom } = useBottomNavigationSizes();
  return (
    <Tab.Navigator
      initialRouteName={MainTabRoutes.EXPLORE}
      screenOptions={{
        headerShown: false,
        tabBarBackground: () => <BluredTab />,
        tabBarStyle: {
          paddingTop: MEDIUM_SIZE,
          position: 'absolute',
          height: height + bottom,
          bottom: 0,
          elevation: 0,
          shadowColor: 'transparent',
          shadowOpacity: 0,
          overflow: 'hidden',
        },
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarActiveTintColor: '#E28800',
      }}
    >
      <Tab.Screen
        name={MainTabRoutes.EXPLORE}
        component={Explore}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, focused }: any) => (
            <TabBarIcon focused={focused} color={color}>
              <TabIconExplore
                color={color}
                width={24}
                height={24}
                fill={color}
                stroke={focused ? '#E28800' : '#9CA3AF'}
              />
            </TabBarIcon>
          ),
        }}
      />

      <Tab.Screen
        name={MainTabRoutes.STADIUMS}
        component={Stadiums}
        options={{
          tabBarLabel: 'Stadiums',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon focused={focused} color={color}>
              <TabIconStadiums color={color} />
            </TabBarIcon>
          ),
        }}
      />
      <Tab.Screen
        name={MainTabRoutes.INFORMATION}
        component={Information}
        options={{
          tabBarLabel: 'Information',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon focused={focused} color={color}>
              <TabIconInformation color={color} />
            </TabBarIcon>
          ),
        }}
      />
      <Tab.Screen
        name={MainTabRoutes.CONTACTS}
        component={Contacts}
        options={{
          tabBarLabel: 'Contacts',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon focused={focused} color={color}>
              <TabIconContacts color={color} />
            </TabBarIcon>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
