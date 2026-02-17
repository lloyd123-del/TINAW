 import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

export default function Add() {
  return (
    <ImageBackground
      source={require('../../assets/images/bg.png')}
      style={styles.background}
      resizeMode="cover"
    />
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});