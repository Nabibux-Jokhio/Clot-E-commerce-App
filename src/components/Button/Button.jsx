import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

const Button = ({ title, btnStyle, btnTextStyle , func }) => {
  return (
    <TouchableOpacity style={btnStyle} activeOpacity={0.5} onPress={func}>
      <Text style={btnTextStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
