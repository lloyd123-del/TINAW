import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from "@expo-google-fonts/poppins";

const { width, height } = Dimensions.get('window');

const SystemSetting = () => {
  const router = useRouter();

  // Load fonts
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  const settingsOptions = [
    { id: 1, title: 'Threshold Settings', screen: '/settings/threshold_settings', icon: require('../../assets/images/thresys.png') },
    { id: 2, title: 'Automation Controls', screen: '/settings/automation_controls', icon: require('../../assets/images/autcon.png') },
    { id: 3, title: 'Monitoring Frequency', screen: '/settings/monitoring_frequency', icon: require('../../assets/images/monfreq.png') },
    { id: 4, title: 'Sensor Calibration', screen: '/settings/sensor_calibration', icon: require('../../assets/images/sencal.png') },
    { id: 5, title: 'Device Maintenance', screen: '/settings/device_maintenance', icon: require('../../assets/images/devset.png') },
  ];

  const handleButtonPress = (option : any) => {
    router.push(option.screen);
  };

  const handleBackToHome = () => {
    router.push('./general_settings');
  };

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
        source={require('../../assets/images/bg.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      
      {/* Content */}
      <View style={styles.content}>
        {/* Header with Back Button on Left */}
        <View style={styles.headerContainer}>
          <TouchableOpacity 
            onPress={handleBackToHome}
            activeOpacity={0.7}
            style={styles.backButton}
          >
            <Image
              source={require('../../assets/images/back.png')}
              style={styles.backIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>SYSTEM SETTINGS</Text>
          <View style={styles.headerRightPlaceholder} />
        </View>
        
        {/* Buttons Container */}
        <View style={styles.buttonsContainer}>
          {settingsOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={styles.button}
              onPress={() => handleButtonPress(option)}
              activeOpacity={0.7}
            >
              <View style={styles.buttonContent}>
                <Image 
                  source={option.icon} 
                  style={styles.buttonIcon} 
                  resizeMode="contain"
                />
                <Text style={styles.buttonText}>
                  {option.title}
                </Text>
              </View>
              <Text style={styles.arrowIcon}>›</Text>
            </TouchableOpacity>
          ))}
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
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
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
    // Removed tintColor to keep original icon color
  },
  headerTitle: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 24,
    color: '#08306B',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  headerRightPlaceholder: {
    width: 40,
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  button: {
    width: '100%',
    maxWidth: 300,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: 'rgba(8, 48, 107, 0.2)',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 8,
  },
  buttonIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
    // Removed tintColor to keep original icon colors
  },
  buttonText: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
    color: '#08306B',
    flex: 1,
  },
  arrowIcon: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 18,
    color: '#08306B',
    opacity: 0.6,
    width: 18,
    textAlign: 'center',
  },
});

export default SystemSetting;