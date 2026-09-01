import { TextInput } from 'react-native'
import React from 'react'

const Input = ({placeholderText,placeholderTextColor, inputStyle}) => {
  return (
   <TextInput placeholder={placeholderText} placeholderTextColor={placeholderTextColor} style={inputStyle}/>
  )
}

export default Input

