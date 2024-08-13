import React from 'react';
import {View} from 'react-native';

interface DividerProps {
  width?: number;
  orientation?: 'horizontal' | 'vertical';
  color?: string;
  dividerStyle?: any;
}

const Divider: React.FC<DividerProps> = ({
  width = 1,
  orientation = 'horizontal',
  color = '#d1d5db',
  dividerStyle,
}) => {
  const dividerStyles = [
    {width: orientation === 'horizontal' ? '90%' : width},
    {height: orientation === 'vertical' ? '100%' : width},
    {backgroundColor: color},
    {marginLeft: 20},
    dividerStyle,
  ];

  return <View style={dividerStyles} />;
};

export default Divider;
