import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

const Button = ({ title,btnStyle , btnTextStyle}) => {
 

  return (
    <TouchableOpacity style={btnStyle}  activeOpacity={0.5}>
      <Text style={btnTextStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
