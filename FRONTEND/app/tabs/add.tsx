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

const steps = [
  {
    id: 1,
    title: 'Connect the device to power',
    description: 'Plug in your device to ensure it is powered on',
    icon: require('../../assets/images/Quick Mode On.png'),
    iconBg: '#E8F4FF',
    iconTint: '#4292C6',
    iconSize: 48,
  },
  {
    id: 2,
    title: 'Put the device to setup mode',
    description: 'Press and hold the button on the device to enter setup mode',
    icon: require('../../assets/images/Setup.png'),
    iconBg: '#FFF0EE',
    iconSize: 48,
  },
  {
    id: 3,
    title: 'Configure device and WiFi',
    description: 'Follow the on-screen instructions to set up the device and connect it to WiFi',
    icon: require('../../assets/images/browse.png'),
    iconBg: '#EEF4FF',
    iconSize: 48,
  },
];

export default function Add() {
  const router = useRouter();

  // Load fonts
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  const handleNext = () => {
  
    router.push('/tab-contents/add_next');
  };

  const handleBack = () => {
    router.back();
  };


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
          <Text style={styles.headerTitle}>ADD DEVICE</Text>
        </View>

        {/* Main Content */}
        <View style={styles.content}>

          {/* WiFi Signal Icon */}
          <View style={styles.iconWrapper}>
            <Image source={require('../../assets/images/network.png')}/>
          </View>

          {/* Instruction Text */}
          <Text style={styles.instructionText}>
            Follow the steps below to add a{'\n'}new device in your system
          </Text>

          {/* Steps */}
          <View style={styles.stepsContainer}>
            {steps.map((step) => (
              <View key={step.id} style={styles.stepCard}>
                <View style={[styles.stepIconContainer, { backgroundColor: step.iconBg }]}>
                  <Image
                    source={step.icon}
                    style={[styles.stepIcon, { width: step.iconSize, height: step.iconSize, tintColor: step.iconTint }]}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.stepTextContainer}>
                  <Text style={styles.stepTitle}>{step.title}</Text>
                  <Text style={styles.stepDescription}>{step.description}</Text>
                </View>
              </View>
            ))}
          </View>

          {/* Next Button */}
          <TouchableOpacity
            style={styles.nextButton}
            onPress={handleNext}
            activeOpacity={0.85}
          >
            <Text style={styles.nextButtonText}>NEXT</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    width: '100%',
  },
  headerTitle: {
    fontFamily: 'Poppins_700Bold', 
    fontSize: 20,
    textAlign: 'center',
    color: '#08306B',
    letterSpacing: 1,
  },

  // Content
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 10,
  },

  // WiFi Icon
  iconWrapper: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 30,
    marginBottom: 20,
    position: 'relative',
  },

  // Instruction
  instructionText: {
    fontFamily: 'Poppins_400Regular', 
    fontSize: 14,
    color: '#08306B',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 28,
    opacity: 0.85,
  },

  // Steps
  stepsContainer: {
    width: '100%',
    gap: 14,
    marginBottom: 36,
  },
  stepCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 6,
    elevation: 3,
  },
  stepIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
    flexShrink: 0,
  },
  stepIcon: {
    width: 22,
    height: 22,
  },
  stepTextContainer: {
    flex: 1,
  },
  stepTitle: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 13,
    color: '#08306B',
    marginBottom: 2,
  },
  stepDescription: {
    fontFamily: 'Poppins_400Regular', 
    fontSize: 11,
    color: '#5A7FA8',
    lineHeight: 16,
  },

  // Next Button
  nextButton: {
    backgroundColor: '#08306B',
    borderRadius: 30,
    width: '40%',
    height: '6%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  nextButtonText: {
    fontFamily: 'Poppins_400Regular', 
    fontSize: 20,
    marginTop: 5,
    color: '#FFFFFF',
    letterSpacing: 1,
  },
});