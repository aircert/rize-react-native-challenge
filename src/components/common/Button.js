import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({onPress, children}) => {

  const { button_style, text_style } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={button_style}>
      <Text style={text_style}>{children}</Text>
    </TouchableOpacity>
  );
};

styles = StyleSheet.create({
  text_style: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    padding: 10
  },
  button_style: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
})

export { Button };