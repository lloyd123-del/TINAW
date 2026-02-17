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
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

const GeneralSetting = () => {
  const router = useRouter();

  const settingsOptions = [
    { id: 1, title: 'System Settings', screen: '/settings/system_settings', isLogout: false, icon: require('../../assets/images/sys.png') },
    { id: 2, title: 'Notification Settings', screen: '/settings/notification', isLogout: false, icon: require('../../assets/images/bell.png') },
    { id: 3, title: 'Connectivity Settings', screen: '/settings/connectivity', isLogout: false, icon: require('../../assets/images/wifi.png') },
    { id: 4, title: 'Help & Support', screen: '/settings/help_support', isLogout: false, icon: require('../../assets/images/help.png') },
    { id: 5, title: 'Device Management', screen: '/settings/device_management', isLogout: false, icon: require('../../assets/images/device.png') },
    { id: 6, title: 'Log Out', screen: 'logout', isLogout: true, icon: require('../../assets/images/logout.png') },
  ];

  const handleButtonPress = (option : any) => {
    if (option.isLogout) {
      // Show confirmation alert before logging out
      Alert.alert(
        'Log Out',
        'Are you sure you want to log out?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Log Out',
            onPress: () => handleLogout(),
            style: 'destructive',
          },
        ],
        { cancelable: true }
      );
    } else {
      router.push(option.screen);
    }
  };

  const handleLogout = () => {
    // Here you can add any logout logic like:
    // - Clearing user session
    // - Removing tokens from storage
    // - Clearing async storage
    // - Resetting any global state
    
    // Navigate to login screen
    router.replace('/screen/login'); 
  };

  const handleBackToHome = () => {
    // Navigate to home screen
    router.push('/tabs/home'); 
  };

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
          <Text style={styles.headerTitle}>SETTINGS</Text>
          <View style={styles.headerRightPlaceholder} />
        </View>
        
        {/* Buttons Container */}
        <View style={styles.buttonsContainer}>
          {settingsOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.button,
                option.isLogout && styles.logoutButton,
              ]}
              onPress={() => handleButtonPress(option)}
              activeOpacity={0.7}
            >
              <View style={styles.buttonContent}>
                <Image 
                  source={option.icon} 
                  style={[
                    styles.buttonIcon,
                    option.isLogout && styles.logoutButtonIcon
                  ]} 
                  resizeMode="contain"
                />
                <Text style={[
                  styles.buttonText,
                  option.isLogout && styles.logoutButtonText,
                ]}>
                  {option.title}
                </Text>
              </View>
              {!option.isLogout && <Text style={styles.arrowIcon}>›</Text>}
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
    backgroundColor: '#ffffff',
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
  },
  logoutButton: {
    backgroundColor: '#4292C6',
  },
  logoutButtonIcon: {
    tintColor: '#FFFFFF',
  },
  buttonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#08306B',
    flex: 1,
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-SemiBold',
  },
  arrowIcon: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: '#08306B',
    opacity: 0.6,
    width: 18,
    textAlign: 'center',
  },
});

export default GeneralSetting;