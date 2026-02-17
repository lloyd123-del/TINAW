import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useRouter } from 'expo-router'; // For navigation

const { width, height } = Dimensions.get('window');

const LoadingScreen = () => {
  const router = useRouter();
  const [activeDot, setActiveDot] = useState(0); // 0, 1, or 2

  useEffect(() => {
    // Create an interval that changes the active dot every 2 seconds
    const interval = setInterval(() => {
      setActiveDot((prevDot) => {
        // If this is the last dot (2), clear interval and navigate to login
        if (prevDot === 2) {
          clearInterval(interval);
          // Navigate to login screen after a tiny delay
          setTimeout(() => {
            router.replace('/screen/login'); // Change this to your login screen path
          }, 500);
          return prevDot;
        }
        // Otherwise, move to next dot
        return prevDot + 1;
      });
    }, 1000); // 2 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

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
        
        {/* App Name */}
        <Text style={styles.appName}>TINAW</Text>
        
        {/* Subtitle */}
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
    fontFamily: 'Poppins-Bold',
    fontSize: 40,
    color: '#08306B',
    textAlign: 'center',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontFamily: 'Poppins-Regular',
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