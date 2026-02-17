import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  View,
  Text,
  ScrollView,
  Dimensions,
  SafeAreaView,
  StatusBar,
  Platform
} from 'react-native';
import { useRouter } from 'expo-router';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from "@expo-google-fonts/poppins";

const { width, height } = Dimensions.get('window');

export default function Home() {
  const router = useRouter();

  // Load fonts
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  // Dynamic data (can come from API later)
  const sensorData = {
    dissolvedOxygen: '5.8',
    temperature: '26.4',
    ph: '5.8',
    turbidity: '12',
    waterLevel: '5.8',
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageBackground
      source={require('../../assets/images/bg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeArea}>
        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

        {/* Header with Settings Button */}
        <View style={styles.header}>
          <View style={styles.headerLeft} />
          <TouchableOpacity
            style={styles.settingsButton}
            onPress={() => router.push('../settings/general_settings')}
          >
            <Image
              source={require('../../assets/images/settings.png')}
              style={styles.settingsIcon}
            />
          </TouchableOpacity>
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Pond 1 Section */}
          <Text style={styles.pondTitle}>Pond 1</Text>

          {/* Dissolved Oxygen Card - KEEP AS IS */}
          <ImageBackground
            source={require('../../assets/images/do_card.png')}
            style={styles.doCard}
            resizeMode="stretch"
          >
            {/* Title - Upper Left */}
            <View style={styles.doTitleContainer}>
              <Text style={styles.doTitleText}>Dissolved Oxygen</Text>
            </View>
            
            {/* Value - Center Left */}
            <View style={styles.doValueContainer}>
              <Text style={styles.doValue}>{sensorData.dissolvedOxygen} mg/L</Text>
            </View>
            
            {/* Status - Below Value */}
            <View style={styles.doStatusContainer}>
              <Text style={styles.doStatusLabel}>Status: </Text>
              <Text style={[styles.doStatusValue, styles.safeStatus]}>SAFE</Text>
            </View>
            
            {/* Safe Range - Bottom Right (DO STYLE) */}
            <View style={styles.doRangeContainer}>
              <Text style={styles.doRangeText}>Safe Range: 4-6 mg/L</Text>
            </View>
          </ImageBackground>

          {/* Temperature and pH Row */}
          <View style={styles.rowContainer}>
            <ImageBackground
              source={require('../../assets/images/temp_card.png')}
              style={[styles.tempCard, styles.marginRight]}
              resizeMode="stretch"
            >
              {/* Icon and Title - Upper Left */}
              <View style={styles.cardTitleContainer}>
                <Image 
                  source={require('../../assets/images/temp.png')}
                  style={styles.cardIcon}
                  resizeMode="contain"
                />
                <Text style={styles.cardTitleText}>Temperature</Text>
              </View>
              
              {/* Value - Center Left */}
              <View style={styles.tempValueContainer}>
                <Text style={styles.tempValue}>{sensorData.temperature}°C</Text>
              </View>

              {/* Safe Range - Bottom Right (TEMP STYLE) */}
              <View style={styles.tempRangeContainer}>
                <Text style={styles.tempRangeText}>Safe Range: 24-30°C</Text>
              </View>
            </ImageBackground>

            <ImageBackground
              source={require('../../assets/images/ph_card.png')}
              style={styles.phCard}
              resizeMode="stretch"
            >
              {/* Icon and Title - Upper Left */}
              <View style={styles.cardTitleContainer}>
                <Image 
                  source={require('../../assets/images/ph.png')}
                  style={styles.cardIcon}
                  resizeMode="contain"
                />
                <Text style={styles.cardTitleText}>pH Level</Text>
              </View>
              
              {/* Value - Center Left */}
              <View style={styles.phValueContainer}>
                <Text style={styles.phValue}>{sensorData.ph}</Text>
              </View>

              {/* Safe Range - Bottom Right (PH STYLE) */}
              <View style={styles.phRangeContainer}>
                <Text style={styles.phRangeText}>Safe Range: 6.5-8.5</Text>
              </View>
            </ImageBackground>
          </View>

          {/* Turbidity and Water Level Row */}
          <View style={styles.rowContainer}>
            <ImageBackground
              source={require('../../assets/images/turb_card.png')}
              style={[styles.turbCard, styles.marginRight]}
              resizeMode="stretch"
            >
              {/* Icon and Title - Upper Left */}
              <View style={styles.cardTitleContainer}>
                <Image 
                  source={require('../../assets/images/turbidity.png')}
                  style={styles.cardIcon}
                  resizeMode="contain"
                />
                <Text style={styles.cardTitleText}>Turbidity</Text>
              </View>
              
              {/* Value - Center Left */}
              <View style={styles.turbValueContainer}>
                <Text style={styles.turbValue}>{sensorData.turbidity} NTU</Text>
              </View>
            </ImageBackground>

            <ImageBackground
              source={require('../../assets/images/waterlev_card.png')}
              style={styles.waterCard}
              resizeMode="stretch"
            >
              {/* Icon and Title - Upper Left */}
              <View style={styles.cardTitleContainer}>
                <Image 
                  source={require('../../assets/images/waterlevel.png')}
                  style={styles.cardIcon}
                  resizeMode="contain"
                />
                <Text style={styles.cardTitleText}>Water Level</Text>
              </View>
              
              {/* Value - Center Left */}
              <View style={styles.waterValueContainer}>
                <Text style={styles.waterValue}>{sensorData.waterLevel} M</Text>
              </View>
            </ImageBackground>
          </View>

          {/* Recent Alerts Section */}
          <View style={styles.alertsSection}>
            <View style={styles.alertsHeader}>
              <Text style={styles.alertsTitle}>⚠️ Recent Alerts</Text>
              <TouchableOpacity>
                <Text style={styles.viewAllText}>View All</Text>
              </TouchableOpacity>
            </View>

            {/* Critical Alert */}
            <View style={styles.alertCard}>
              <View style={styles.alertBadge}>
                <Text style={styles.alertBadgeText}>CRITICAL</Text>
              </View>
              <Text style={styles.alertTime}>10:45 PM</Text>
              <Text style={styles.alertMessage}>– Water Level was high</Text>
            </View>
          </View>
        </ScrollView>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  headerLeft: {
    width: 45,
  },
  headerTitle: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 24,
    color: '#08306B',
    textAlign: 'center',
  },
  settingsButton: {
    width: 45,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsIcon: {
    width: 45,
    height: 40,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  pondTitle: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 20,
    color: '#08306B',
    marginBottom: 12,
    marginLeft: 4,
  },

  // Dissolved Oxygen Card - KEPT EXACTLY AS IS
  doCard: {
    width: '100%',
    height: 180,
    marginBottom: 12,
  },
  doTitleContainer: {
    position: 'absolute',
    top: 12,
    left: 12,
  },
  doTitleText: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 18,
    color: '#08306B',
  },
  doValueContainer: {
    position: 'absolute',
    left: 15,
    top: '40%',
    transform: [{ translateY: -15 }],
  },
  doValue: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 35,
    color: '#08306B',
  },
  doStatusContainer: {
    position: 'absolute',
    left: 15,
    top: '55%',
    transform: [{ translateY: 10 }],
    flexDirection: 'row',
    alignItems: 'center',
  },
  doStatusLabel: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 15,
    color: '#5A7FA8',
  },
  doStatusValue: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 15,
  },
  doRangeContainer: {
    position: 'absolute',
    left: 15,
    bottom: 20,
  },
  doRangeText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 15,
    color: '#5A7FA8',
    textAlign: 'right',
  },

  // Common styles for cards with icons
  cardTitleContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIcon: {
    width: 40,
    height: 30,
    marginTop: 2,
    marginRight: 2,
  },
  cardTitleText: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
    marginTop: 5,
    color: '#08306B',
  },

  // Temperature Card
  tempCard: {
    flex: 1,
    height: 160,
  },
  tempValueContainer: {
    position: 'absolute',
    left: 15,
    top: '45%',
    transform: [{ translateY: -15 }],
  },
  tempValue: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 35,
    color: '#08306B',
  },
  tempRangeContainer: {
    position: 'absolute',
    left: 15,
    bottom: 10,
  },
  tempRangeText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 13,
    color: '#5A7FA8',
    textAlign: 'left',
  },

  // pH Card
  phCard: {
    flex: 1,
    height: 160,
  },
  phValueContainer: {
    position: 'absolute',
    left: 15,
    top: '45%',
    transform: [{ translateY: -15 }],
  },
  phValue: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 35,
    color: '#08306B',
  },
  phRangeContainer: {
    position: 'absolute',
    left: 15,
    bottom: 10,
  },
  phRangeText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 13,
    color: '#5A7FA8',
    textAlign: 'left',
  },

  // Turbidity Card
  turbCard: {
    flex: 1,
    height: 150,
  },
  turbValueContainer: {
    position: 'absolute',
    left: 15,
    top: '45%',
    transform: [{ translateY: -12 }],
  },
  turbValue: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 35,
    color: '#08306B',
  },

  // Water Level Card
  waterCard: {
    flex: 1,
    height: 150,
  },
  waterValueContainer: {
    position: 'absolute',
    left: 15,
    top: '45%',
    transform: [{ translateY: -12 }],
  },
  waterValue: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 35,
    color: '#08306B',
  },

  rowContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  marginRight: {
    marginRight: 8,
  },
  safeStatus: {
    color: '#2E7D32',
  },
  alertsSection: {
    marginTop: 8,
    marginBottom: 20,
  },
  alertsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  alertsTitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
    color: '#08306B',
  },
  viewAllText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#4292C6',
    textDecorationLine: 'underline',
  },
  alertCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  alertBadge: {
    backgroundColor: '#FF5252',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
  },
  alertBadgeText: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 10,
    color: '#FFFFFF',
  },
  alertTime: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 12,
    color: '#08306B',
    marginRight: 4,
  },
  alertMessage: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#5A7FA8',
    flex: 1,
  },
});