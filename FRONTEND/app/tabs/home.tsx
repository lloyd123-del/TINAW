import React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('../../assets/images/bg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Settings Button */}
      <TouchableOpacity
        style={styles.settingsButton}
        onPress={() => router.push('../settings/general_settings')}
      >
        <Image
          source={require('../../assets/images/settings.png')}
          style={styles.settingsIcon}
        />
      </TouchableOpacity>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  settingsButton: {
    position: 'absolute',
    top: 60,       // adjust if needed
    right: 20,
  },
  settingsIcon: {
    width: 45,
    height: 40,
  },
});