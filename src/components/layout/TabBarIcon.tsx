import React, { FC, PropsWithChildren } from 'react';
import { View } from 'react-native';

type Props = {
  focused: boolean;
  color: string;
};
const TabBarIcon: FC<PropsWithChildren<Props>> = ({
  children,
  focused,
  color,
}) => {
  const strokeColor = focused ? '#E28800' : '#9CA3AF';

  return (
    <View
      style={{
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        backgroundColor: 'transparent',
      }}
    >
      {React.cloneElement(children as React.ReactElement<any>, {
        stroke: strokeColor,
      })}
    </View>
  );
};

export default TabBarIcon;
