import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  StatusBar,
  ActivityIndicator, // Add this import
} from 'react-native';
import { useRouter } from 'expo-router';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";

const { width, height } = Dimensions.get('window');

const LoadingScreen = () => {
  const router = useRouter();
  const [activeDot, setActiveDot] = useState(0); // 0, 1, or 2

  // Load fonts
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  useEffect(() => {
    // Only start the interval if fonts are loaded
    if (!fontsLoaded) return;

    // Create an interval that changes the active dot every 1 second
    const interval = setInterval(() => {
      setActiveDot((prevDot) => {
        // If this is the last dot (2), clear interval and navigate to login
        if (prevDot === 2) {
          clearInterval(interval);
          // Navigate to login screen after a tiny delay
          setTimeout(() => {
            router.replace('/screen/login');
          }, 500);
          return prevDot;
        }
        // Otherwise, move to next dot
        return prevDot + 1;
      });
    }, 1000); // 1 second

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [fontsLoaded]); // Add fontsLoaded as dependency

  // Show loading screen while fonts are loading
  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4292C6" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      
      {/* Background Image */}
      <Image
        source={require('../assets/images/bg.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      
      {/* Content */}
      <View style={styles.content}>
        {/* Logo */}
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        
        {/* App Name - Fixed font family name */}
        <Text style={styles.appName}>TINAW</Text>
        
        {/* Subtitle - Fixed font family name */}
        <Text style={styles.subtitle}>IOT Crayfish Monitoring System</Text>
        
        {/* Pagination Dots */}
        <View style={styles.paginationContainer}>
          <View style={[styles.dot, activeDot === 0 && styles.activeDot]} />
          <View style={[styles.dot, activeDot === 1 && styles.activeDot]} />
          <View style={[styles.dot, activeDot === 2 && styles.activeDot]} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  // Add loading container style
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  backgroundImage: {
    position: 'absolute',
    width: width,
    height: height,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 500,
    height: 600,
    marginBottom: -220,
  },
  appName: {
    fontFamily: 'Poppins_700Bold', // Changed from 'Poppins-Bold'
    fontSize: 40,
    color: '#08306B',
    textAlign: 'center',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontFamily: 'Poppins_400Regular', // Changed from 'Poppins-Regular'
    fontSize: 16,
    color: '#08306B',
    textAlign: 'center',
    marginBottom: 400,
    opacity: 0.9,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 200,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#9DB2CE',
    marginHorizontal: 6,
  },
  activeDot: {
    backgroundColor: '#08306B',
  },
});

export default LoadingScreen;