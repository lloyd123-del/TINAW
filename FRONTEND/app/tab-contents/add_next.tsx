import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
  ActivityIndicator, 
} from 'react-native';
import { useRouter } from 'expo-router';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";

const { width, height } = Dimensions.get('window');


export default function Add() {
  const router = useRouter();

  // Load fonts
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  const handleCancel = () => {
    // Updated route to match new path
    router.push('/tabs/add');
  };

  const handleBackToAdd = () => {
    // Navigate to home screen
    router.push('/tabs/add'); // or '/home' depending on your route structure
  };

  // Show loading while fonts load
  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4292C6" />
      </View>
    );
  }

  return (
    <ImageBackground
      source={require('../../assets/images/bg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeArea}>
        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            onPress={handleBackToAdd}
            activeOpacity={0.7}
            style={styles.backButton}
          >
            <Image
              source={require('../../assets/images/back.png')}
              style={styles.backIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>SCANNING FOR DEVICE</Text>
          <View style={styles.headerPlaceholder} />
        </View>

        {/* Main Content */}
        <View style={styles.content}>


          {/* Instruction Text */}
          <Text style={styles.instructionText1}>
            Make sure your device is {'\n'}powered on and in setup mode
          </Text>

          {/* WiFi Signal Icon */}
          <View style={styles.iconWrapper}>
            <Image source={require('../../assets/images/network.png')}
              style={styles.wifiIcon}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.instructionText2}>
            Scanning for devices nearby...
          </Text>

          {/* Cancel Button */}
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={handleCancel}
            activeOpacity={0.85}
          >
            <Text style={styles.cancelButtonText}>CANCEL</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  // Add loading container
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  headerTitle: {
    fontFamily: 'Poppins_700Bold', // Changed from 'Poppins-Bold'
    fontSize: 20,
    color: '#08306B',
    letterSpacing: 1,
  },
  headerPlaceholder: {
    width: 36,
  },

  // Content
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 10,
  },

  // Instruction
  instructionText1: {
    fontFamily: 'Poppins_400Regular', // Changed from 'Poppins-Regular'
    fontSize: 18,
    color: '#817E8F',
    textAlign: 'center',
    lineHeight: 22,
    marginTop: 30,
    marginBottom: 100,
    opacity: 0.85,
  },

  // WiFi Icon
  iconWrapper: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 70,
    position: 'relative',
  },

  wifiIcon: {
      width: "100%",
      height: "100%",
    },

  instructionText2: {
    fontFamily: 'Poppins_400Regular', // Changed from 'Poppins-Regular'
    fontSize: 18,
    color: '#817E8F',
    textAlign: 'center',
    lineHeight: 22,
    marginTop: 30,
    marginBottom: 20,
    opacity: 0.85,
  },
  // Cancel Button
  cancelButton: {
    backgroundColor: '#08306B',
    borderRadius: 30,
    width: '45%',
    height: '6%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  cancelButtonText: {
    fontFamily: 'Poppins_400Regular', // Changed from 'Poppins-Bold'
    fontSize: 24,
    marginTop: 5,
    color: '#FFFFFF',
    letterSpacing: 1,
  },
});